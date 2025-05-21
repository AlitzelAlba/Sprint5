
USE c_clasicDB;
GO

-- Eliminar tabla genres si ya existe
IF OBJECT_ID(N'dbo.genres', N'U') IS NOT NULL
    DROP TABLE dbo.genres;
GO

-- Crear tabla de géneros
CREATE TABLE dbo.genres
(
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL
);
GO