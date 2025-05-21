USE master;
GO

-- Eliminar la base de datos si ya existe
IF DB_ID(N'c_clasicDB') IS NOT NULL
BEGIN
    ALTER DATABASE c_clasicDB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE c_clasicDB;
END
GO

-- Crear nueva base de datos
CREATE DATABASE c_clasicDB;
GO