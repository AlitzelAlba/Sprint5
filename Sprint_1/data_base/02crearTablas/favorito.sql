-- Creacion de tabla de favoritos

USE c_clasicDB;
GO

-- Eliminar favoritos si ya existe
IF OBJECT_ID(N'dbo.favorites', N'U') IS NOT NULL
    DROP TABLE dbo.favorites;
GO

-- Crear tabla de favoritos
CREATE TABLE dbo.favorites
(
    UserId INT NOT NULL,
    CartoonId INT NOT NULL
);
GO