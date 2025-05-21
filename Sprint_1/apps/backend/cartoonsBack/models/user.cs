
namespace cartoonsBack.Models
{
  //Usuario registrado en el sistema
  public class User
  {
    //Identificador único del usuario (clave primaria)
    public int Id { get; set; }

    //Nombre de usuario
    public string UsersName { get; set; } = null!;

    //Email del usuario
    public string Email { get; set; } = null!;

    //Contraseña del usuario almacenada como hash seguro
    public string PasswordHash { get; set; } = null!;

    //Fecha en que el usuario fue registrado
    public DateTime RegistrationDate { get; set; }
  }
}