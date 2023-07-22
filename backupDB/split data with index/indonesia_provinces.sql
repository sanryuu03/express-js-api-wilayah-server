-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 22, 2023 at 06:47 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `indonesia_provinces`
--

CREATE TABLE `indonesia_provinces` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `indonesia_provinces`
--

INSERT INTO `indonesia_provinces` (`id`, `code`, `name`) VALUES
(1, '11', 'ACEH'),
(2, '12', 'SUMATERA UTARA'),
(3, '13', 'SUMATERA BARAT'),
(4, '14', 'RIAU'),
(5, '15', 'JAMBI'),
(6, '16', 'SUMATERA SELATAN'),
(7, '17', 'BENGKULU'),
(8, '18', 'LAMPUNG'),
(9, '19', 'KEPULAUAN BANGKA BELITUNG'),
(10, '21', 'KEPULAUAN RIAU'),
(11, '31', 'DKI JAKARTA'),
(12, '32', 'JAWA BARAT'),
(13, '33', 'JAWA TENGAH'),
(14, '34', 'DAERAH ISTIMEWA YOGYAKARTA'),
(15, '35', 'JAWA TIMUR'),
(16, '36', 'BANTEN'),
(17, '51', 'BALI'),
(18, '52', 'NUSA TENGGARA BARAT'),
(19, '53', 'NUSA TENGGARA TIMUR'),
(20, '61', 'KALIMANTAN BARAT'),
(21, '62', 'KALIMANTAN TENGAH'),
(22, '63', 'KALIMANTAN SELATAN'),
(23, '64', 'KALIMANTAN TIMUR'),
(24, '65', 'KALIMANTAN UTARA'),
(25, '71', 'SULAWESI UTARA'),
(26, '72', 'SULAWESI TENGAH'),
(27, '73', 'SULAWESI SELATAN'),
(28, '74', 'SULAWESI TENGGARA'),
(29, '75', 'GORONTALO'),
(30, '76', 'SULAWESI BARAT'),
(31, '81', 'MALUKU'),
(32, '82', 'MALUKU UTARA'),
(33, '91', 'PAPUA'),
(34, '92', 'PAPUA BARAT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `indonesia_provinces`
--
ALTER TABLE `indonesia_provinces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `code_index` (`code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `indonesia_provinces`
--
ALTER TABLE `indonesia_provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
