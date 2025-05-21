
-- Creacion de tabla de contenidos

USE c_clasicDB;
GO

-- Si existe la tabla cartoons, eliminarla
IF OBJECT_ID(N'dbo.cartoons', N'U') IS NOT NULL
    DROP TABLE dbo.cartoons;
GO

-- Crear tabla de caricaturas
CREATE TABLE dbo.cartoons
(
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Title NVARCHAR(150) NOT NULL,
    CartoonDescription NVARCHAR(MAX),
    Genre INT,
    ContentYear DATE,
    Rating DECIMAL(2,1),
    Duration TIME,
    CoverImage NVARCHAR(300),
    VideoUrl NVARCHAR(300)
);
GO