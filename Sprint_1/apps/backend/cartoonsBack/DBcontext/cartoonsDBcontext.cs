
using Microsoft.EntityFrameworkCore;
using cartoonsBack.Models;

namespace cartoonsBack.Data
{
    //Contexto de la base de datos
    //Configura las entidades del modelo y conexión con la base de datos
    public class CartoonsDbContext : DbContext
    {
        //Constructor que recibe las opciones de configuración 
        public CartoonsDbContext(DbContextOptions<CartoonsDbContext> options)
            : base(options)
        {
        }

        #region === Tablas del Modelo ===
        //Tabla de usuarios registrados
        public DbSet<User> Users { get; set; }

        //Tabla de caricaturas disponibles
        public DbSet<cartoons> cartoons { get; set; }

        #endregion
    }
}
