-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2017 at 10:17 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` bigint(20) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `division` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL,
  `hired_date` datetime NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `marital_status` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `sub_division` varchar(255) NOT NULL,
  `suspend_date` datetime DEFAULT NULL,
  `loc_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `date_of_birth`, `division`, `email`, `first_name`, `gender`, `grade`, `hired_date`, `last_name`, `marital_status`, `nationality`, `phone`, `photo`, `status`, `sub_division`, `suspend_date`, `loc_id`) VALUES
(1, '1994-08-15 00:00:00', 'SE', 'donnygfrance@gmail.com', 'Donny G', 'Male', 'JP', '2000-08-20 00:00:00', 'France', 'Single', 'Indonesia', '081294039110', NULL, 'Single', 'Trainee', NULL, 1),
(2, '1994-02-09 00:00:00', 'SE', 'Badluck@life.com', 'Bad Luck', 'Male', 'JP', '2017-04-03 00:00:00', 'Brian', 'Single', 'Australia', '080989999', NULL, 'Single', 'CDC Java Spring', NULL, 2),
(3, '1990-04-27 00:00:00', 'SQ', 'annoyingDerpina@meme.com', 'Derpina', 'Female', 'AP', '1899-01-01 00:00:00', 'Christiani', 'Married', 'Indonesia', '081122334455', NULL, 'Single', 'CDC XCode', NULL, 3),
(4, '1990-11-02 00:00:00', 'AC', 'DerptheAnnoying@meme.com', 'Derp', 'Male', 'PG', '1900-03-01 00:00:00', 'Santiago', 'Divorced', 'Indonesia', '08992334455', NULL, 'Single', 'CDC java8', NULL, 4),
(5, '1991-05-13 00:00:00', 'TS', 'stevenSeagal@awesome.com', 'Steven', 'Male', 'PG', '1899-01-12 00:00:00', 'Seagal', 'Married', 'Indonesia', '08235434455', NULL, 'Married', 'CDC Angular2', '2017-02-18 00:00:00', 4),
(6, '1981-12-12 00:00:00', 'SQ', 'Jasonstattam@awesome.com', 'Jason', 'Male', 'PG', '1899-01-12 00:00:00', 'Statham', 'Single', 'Indonesia', '08234534455', NULL, 'Single', 'CDC Scrum', '2017-04-15 00:00:00', 2),
(7, '1992-03-04 00:00:00', 'SQ', 'teamscream99@wmail.com', 'Tommy A ', 'Male', 'PG', '2017-01-10 00:00:00', 'France', 'Single', 'Indonesia', '08114567890', NULL, 'Single', 'BTPN', NULL, 2),
(8, '1992-03-04 00:00:00', 'SQ', 'kyarinf@wmail.com', 'Karina', 'Female', 'AN', '2015-10-10 00:00:00', 'France', 'Single', 'Indonesia', '08114577890', NULL, 'Single', 'BTPN', NULL, 4),
(9, '1980-12-24 00:00:00', 'SE', 'liliput@wmail.com', 'Lili', 'Female', 'AP', '2017-11-10 00:00:00', 'Puspita', 'Single', 'Indonesia', '08114567890', NULL, 'Single', 'BTPN', NULL, 2),
(10, '1994-12-24 00:00:00', 'SE', 'titipuspa@wmail.com', 'Titi', 'Female', 'PG', '2017-08-15 00:00:00', 'Puspita', 'Single', 'Indonesia', '08114567123', NULL, 'Single', 'BTPN', NULL, 2),
(11, '1992-06-08 00:00:00', 'SQ', 'tinaToon@wmail.com', 'Christina', 'Female', 'PG', '2017-08-15 00:00:00', 'Toonisia', 'Married', 'Indonesia', '08123467123', NULL, 'Single', 'CDC Java-8', NULL, 3),
(12, '1991-07-08 00:00:00', 'TS', 'irvan123@wmail.com', 'Irvan', 'Male', 'PG', '2017-08-15 00:00:00', 'Fathoni', 'Married', 'Indonesia', '08123213123', NULL, 'Single', 'CDC Java-8', NULL, 3),
(13, '1992-11-23 00:00:00', 'PG', 'Suryamagot@wmail.com', 'Abdullrahman', 'Male', 'PG', '2017-08-15 00:00:00', 'Sholleh', 'Single', 'Indonesia', '08112313123', NULL, 'Single', 'CDC Java-8', NULL, 3);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` bigint(20) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `city`) VALUES
(1, 'Jakarta'),
(2, 'Bali'),
(3, 'Bandung'),
(4, 'Yogyakarta');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `FK731tmgoixb14mxbou4da711h6` (`loc_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK731tmgoixb14mxbou4da711h6` FOREIGN KEY (`loc_id`) REFERENCES `location` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
