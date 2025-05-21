
-- Creacion de tablas de usuarios

USE c_clasicDB;
GO

-- Eliminar tabla de usuarios si ya existe
IF OBJECT_ID(N'dbo.Users', N'U') IS NOT NULL
    DROP TABLE dbo.Users;
GO

-- Crear tabla de usuarios
CREATE TABLE dbo.Users
(
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    UsersName NVARCHAR(200) NOT NULL,
    Email NVARCHAR(200) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(256) NOT NULL,
    RegistrationDate DATETIME2 DEFAULT SYSDATETIME()
);
GO