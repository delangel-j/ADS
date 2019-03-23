-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-03-2019 a las 19:04:57
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `employees`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `employee_key` varchar(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `level` tinyint(1) NOT NULL,
  `gender` enum('F','M') NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `hash` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`employee_key`, `name`, `lastname`, `level`, `gender`, `salary`, `email`, `password`, `hash`) VALUES
('emp1', 'Brenda', 'Villegas', 1, 'F', '3500.50', 'brenda@correo.com', 'brenda123', '4da938776fdb8a0236a0b980fb27214b'),
('emp2', 'Jaime', 'Rocha', 2, 'M', '2800.30', 'jaime@correo.com', 'jaime123', '26eab66329fae7cf234013a4d49eef35'),
('emp3', 'Guillermo', 'Ramirez', 3, 'M', '1800.00', 'guillermo@correo.com', 'guillermo123', '16289f7266ad864c3aec42763a75a0f7'),
('emp4', 'Raquel', 'Zarate', 2, 'F', '2850.00', 'raquel@correo.com', 'raquel123', '7c324d6ebfcd6718de98c51b05620607'),
('emp5', 'Alfredo', 'Torres', 1, 'M', '3500.00', 'alfredo@correo.com', 'alfredo123', 'd59e598dae9859120126d87c91ac6c7e');

--
-- Disparadores `employees`
--
DELIMITER //
CREATE TRIGGER `createHash` BEFORE INSERT ON `employees`
 FOR EACH ROW SET NEW.hash = MD5(NEW.password)
//
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
 ADD PRIMARY KEY (`employee_key`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
