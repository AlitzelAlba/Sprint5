-- Creacion de Foreign Key Favoritos

USE c_clasicDB;
GO

-- Relaciones para la tabla favorites
IF OBJECT_ID(N'dbo.favorites', N'U') IS NOT NULL AND OBJECT_ID(N'dbo.Users', N'U') IS NOT NULL
BEGIN
    ALTER TABLE dbo.favorites
    ADD CONSTRAINT FK_Favorites_Users FOREIGN KEY (UserId)
        REFERENCES dbo.Users(id);
END
GO

IF OBJECT_ID(N'dbo.favorites', N'U') IS NOT NULL AND OBJECT_ID(N'dbo.cartoons', N'U') IS NOT NULL
BEGIN
    ALTER TABLE dbo.favorites
    ADD CONSTRAINT FK_Favorites_Cartoons FOREIGN KEY (CartoonId)
        REFERENCES dbo.cartoons(id);
END
GO

-- Relación para cartoons con genres
IF OBJECT_ID(N'dbo.genres', N'U') IS NOT NULL AND OBJECT_ID(N'dbo.cartoons', N'U') IS NOT NULL
BEGIN
    ALTER TABLE dbo.cartoons
    ADD CONSTRAINT FK_Cartoons_Genres FOREIGN KEY (Genre)
        REFERENCES dbo.genres(id);
END
GO