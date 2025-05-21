using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cartoonsBack.Data;
using cartoonsBack.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;


namespace cartoonsBack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly CartoonsDbContext _context;

        public AuthController(CartoonsDbContext context)
        {
            _context = context;
        }
        #region === Inicio de Sesión  ===
        //Inicia sesión verificando email, nombre y contraseña
        //Genera un JWT si es válido
        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest credentials)
        {
            var user = await BuscarUsuario(credentials.Email, credentials.UsersName);

            if (user == null || !ValidarPassword(credentials.Password, user.PasswordHash))
                return Unauthorized("Credenciales inválidas.");

            var token = GenerarTokenJWT(user);

            return Ok(new
            {
                message = "Inicio de sesión exitoso.",
                token = token
            });
        }

        private async Task<User?> BuscarUsuario(string email, string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email && u.UsersName == username);
        }

        private bool ValidarPassword(string inputPassword, string storedHash)
        {
            return BCrypt.Net.BCrypt.Verify(inputPassword, storedHash);
        }

        private string GenerarTokenJWT(User user)
        {
            var clave = Environment.GetEnvironmentVariable("JWT_SECRET_KEY");
            if (string.IsNullOrWhiteSpace(clave))
                throw new InvalidOperationException("JWT_SECRET_KEY no está definido.");

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(clave));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new(JwtRegisteredClaimNames.Email, user.Email),
                new("name", user.UsersName)
            };

            var jwt = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

        #endregion

        #region === Registro ===

        //Registra un nuevo usuario 
        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterRequest newUserRequest)
        {
            if (await UsuarioYaExiste(newUserRequest.Email))
                return BadRequest("El usuario ya existe.");

            var user = CrearUsuario(newUserRequest);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Usuario registrado exitosamente." });
        }

        private async Task<bool> UsuarioYaExiste(string email)
        {
            return await _context.Users.AnyAsync(u => u.Email == email);
        }

        private User CrearUsuario(RegisterRequest req)
        {
            return new User
            {
                Email = req.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(req.Password),
                UsersName = req.Name,
                RegistrationDate = DateTime.UtcNow
            };
        }

        #endregion
    }

    #region === Modelos de Solicitud (DTOs) ===

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string UsersName { get; set; } = string.Empty;
    }

    public class RegisterRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
    }

    #endregion
}