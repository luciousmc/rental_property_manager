-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 14, 2019 at 04:43 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `land_lord`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `url` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `property_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `property_id`) VALUES
(1, 'https://tinyurl.com/y6eu9ldc', 1);

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `property_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `street_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `zip` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `sqft` bigint(20) UNSIGNED NOT NULL,
  `property_type` enum('Single Unit','Multi Unit') COLLATE utf8_unicode_ci NOT NULL,
  `manager_contact` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `manager_phone` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `parking_spaces` mediumint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `property_name`, `street_address`, `city`, `state`, `zip`, `sqft`, `property_type`, `manager_contact`, `manager_phone`, `parking_spaces`) VALUES
(1, 'vista complex', '23002 El Toro Road', 'irvine', 'ca', '91101', 20000, 'Multi Unit', 'Joe', '8008888888', 30),
(2, 'Spectrum Center', 'Spectrum Drive', 'Irvine', 'CA', '92620', 4000, 'Multi Unit', 'Spencer', '7148182312', 200),
(3, 'Harris Ranch', '2134 Harry Lane', 'Pasadena', 'CA', '91010', 13000, 'Single Unit', 'Mike Harris ', '4542178423', 10);

-- --------------------------------------------------------

--
-- Table structure for table `property_images`
--

CREATE TABLE `property_images` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `property_id` mediumint(8) UNSIGNED NOT NULL,
  `url` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `property_images`
--

INSERT INTO `property_images` (`id`, `property_id`, `url`) VALUES
(1, 1, 'https://tinyurl.com/y6eu9ldc');

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `unit_id` mediumint(8) UNSIGNED NOT NULL,
  `business_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `contact_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `tenant_phone` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `tenant_email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `move_in_date` date NOT NULL,
  `lease_end_date` date NOT NULL,
  `rent_due_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`id`, `unit_id`, `business_name`, `contact_name`, `tenant_phone`, `tenant_email`, `move_in_date`, `lease_end_date`, `rent_due_date`) VALUES
(1, 1, 'Wonder Bread Racing', 'Ricky Bobby', '5628937321', 'ricky@bobby.com', '2019-06-11', '2019-06-11', '2019-06-11'),
(2, 2, 'Joes Pool Service', 'Joe Rogan', '2139811234', 'joe@pools.com', '2019-06-29', '2019-06-28', '2019-06-26');

-- --------------------------------------------------------

--
-- Table structure for table `tenant_images`
--

CREATE TABLE `tenant_images` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `tenants_id` mediumint(8) UNSIGNED NOT NULL,
  `images_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tenant_requests`
--

CREATE TABLE `tenant_requests` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `tenant_phone` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `tenant_email` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `repair_request` text COLLATE utf8_unicode_ci NOT NULL,
  `tenant_id` mediumint(8) UNSIGNED NOT NULL,
  `status` enum('Pending','Approved','Denied') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tenant_requests`
--

INSERT INTO `tenant_requests` (`id`, `tenant_phone`, `tenant_email`, `repair_request`, `tenant_id`, `status`) VALUES
(1, '7145627777', 'ricky@bobby.com', 'Please Change Light Bulb', 1, 'Pending'),
(2, '6287148852', 'Joe@ro.com', 'Please Change Ceiling Tiles in lobby.', 1, 'Pending'),
(3, '7824548234', 'mike@me.com', 'A/C is not working, and Summer is here.', 1, 'Pending'),
(4, '828626723', 'dan@lfz.com', 'Can you fix your figma?', 1, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `property_id` mediumint(8) UNSIGNED NOT NULL,
  `unit_number` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `sqft` mediumint(8) UNSIGNED NOT NULL,
  `rent` mediumint(8) UNSIGNED NOT NULL,
  `status` enum('Vacant','Occupied','Pending') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `property_id`, `unit_number`, `sqft`, `rent`, `status`) VALUES
(1, 1, '100T', 2500, 2500, 'Occupied'),
(2, 3, '200', 1800, 2000, 'Occupied');

-- --------------------------------------------------------

--
-- Table structure for table `unit_images`
--

CREATE TABLE `unit_images` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `units_id` mediumint(8) UNSIGNED NOT NULL,
  `images_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tenant_images`
--
ALTER TABLE `tenant_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tenant_requests`
--
ALTER TABLE `tenant_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unit_images`
--
ALTER TABLE `unit_images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tenants`
--
ALTER TABLE `tenants`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tenant_images`
--
ALTER TABLE `tenant_images`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tenant_requests`
--
ALTER TABLE `tenant_requests`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `unit_images`
--
ALTER TABLE `unit_images`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
