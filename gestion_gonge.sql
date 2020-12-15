-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 09, 2020 at 09:59 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_gonge`
--

-- --------------------------------------------------------

--
-- Table structure for table `conges`
--

DROP TABLE IF EXISTS `conges`;
CREATE TABLE IF NOT EXISTS `conges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_debut` text NOT NULL,
  `date_fin` text NOT NULL,
  `Nbrjours` text NOT NULL,
  `commentaire` text NOT NULL,
  `type` text NOT NULL,
  `Etat` text NOT NULL,
  `created` text NOT NULL,
  `userId` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=173 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `conges`
--

INSERT INTO `conges` (`id`, `date_debut`, `date_fin`, `Nbrjours`, `commentaire`, `type`, `Etat`, `created`, `userId`) VALUES
(1, '2019-09-16', '2019-09-27', '10', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '111'),
(2, '2020-03-25', '2020-04-06', '9', '', 'Congé payé', 'Validé', '2020-09-29 10:59:56', '111'),
(4, '2018-05-08', '2018-05-13', '4', '', 'Congé Paye', 'Validé', '2020-09-29 13:28:17', '112'),
(5, '2018-12-24', '2018-12-31', '5', '', 'Congé Paye', 'Validé', '2020-09-29 13:28:55', '112'),
(10, '2020-07-27', '2020-08-04', '6', '', 'Congé Paye', 'Validé', '2020-09-29 13:37:42', '112'),
(9, '2019-08-05', '2019-08-19', '10', '', 'Congé Paye', 'Validé', '2020-09-29 13:36:19', '112'),
(11, '2018-08-06', '2018-08-17', '9', '', 'Congé Paye', 'Validé', '2020-09-29 13:38:42', '112'),
(13, '2017-09-04', '2017-09-22', '14', '', 'Congé Paye', 'Validé', '2020-09-29 15:40:12', '113'),
(12, '2017-03-24', '2017-03-25', '1', '', 'Congé Paye', 'Validé', '2020-09-29 13:39:04', '112'),
(14, '2018-05-18', '2018-05-22', '2', '', 'Congé Paye', 'Validé', '2020-09-29 15:40:42', '113'),
(15, '2018-08-23', '2018-08-25', '1', '', 'Congé Paye', 'Validé', '2020-09-29 15:41:33', '113'),
(16, '2018-12-24', '2018-12-31', '5', '', 'Congé Paye', 'Validé', '2020-09-29 15:41:57', '113'),
(17, '2019-08-06', '2019-08-16', '8', '', 'Congé Paye', 'Validé', '2020-09-29 15:42:27', '113'),
(132, '2019-07-13', '2019-07-25', '10', '', 'Congé Paye', 'Validé', '2020-10-09 13:45:29', '134'),
(19, '2019-12-04', '2019-12-09', '3', '', 'Congé Paye', 'Validé', '2020-09-29 15:45:30', '113'),
(20, '2020-03-09', '2020-03-10', '1', '', 'Congé Paye', 'Validé', '2020-09-29 15:46:12', '113'),
(21, '2019-12-26', '2020-01-01', '4', '', 'Congé Paye', 'Validé', '2020-09-29 15:47:13', '113'),
(22, '2020-08-03', '2020-08-07', '4', '', 'Congé Paye', 'Validé', '2020-09-29 15:47:44', '113'),
(23, '2018-08-06', '2018-08-17', '9', '', 'Congé Paye', 'Validé', '2020-09-29 15:48:17', '113'),
(128, '2019-12-30', '2020-01-02', '3', '', 'Congé Paye', 'Validé', '2020-10-09 13:32:11', '133'),
(27, '2019-08-05', '2019-08-18', '8', ' ', 'Congé payé', 'Validé', '2020-09-30 14:35:25', '115'),
(29, '2019-12-30', '2020-01-02', '2', ' ', 'Congé payé', 'Validé', '2020-09-30 14:43:53', '115'),
(30, '2020-08-17', '2020-08-24', '5', '', 'Congé Paye', 'Validé', '2020-09-30 14:45:26', '115'),
(31, '2019-11-04', '2019-11-06', '2', '', 'Congé Paye', 'Validé', '2020-09-30 14:45:56', '115'),
(35, '2017-07-27', '2017-08-11', '11', '', 'Congé payé', 'Validé', '2020-10-01 15:32:31', '114'),
(36, '2017-12-26', '2017-12-29', '3', '', 'Congé Paye', 'Validé', '2020-10-01 15:32:56', '114'),
(37, '2018-03-01', '2018-03-02', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:33:12', '114'),
(38, '2018-08-06', '2018-08-17', '9', '', 'Congé Paye', 'Validé', '2020-10-01 15:33:36', '114'),
(39, '2018-08-23', '2018-08-24', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:33:57', '114'),
(40, '2019-12-19', '2019-12-20', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:35:14', '114'),
(41, '2018-12-24', '2018-12-31', '5', '', 'Congé Paye', 'Validé', '2020-10-01 15:35:36', '114'),
(42, '2018-12-05', '2018-12-06', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:35:51', '114'),
(43, '2019-02-01', '2019-02-02', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:36:17', '114'),
(44, '2019-08-05', '2019-08-19', '8', '', 'Congé Paye', 'Validé', '2020-10-01 15:37:57', '114'),
(45, '2018-02-07', '2018-02-08', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:38:40', '114'),
(46, '2018-07-26', '2018-07-27', '1', '', 'Congé Paye', 'Validé', '2020-10-01 15:38:56', '114'),
(47, '2020-07-27', '2020-08-04', '6', '', 'Congé Paye', 'Validé', '2020-10-01 15:39:37', '114'),
(48, '2019-11-15', '2019-11-27', '8', '', 'Congé Paye', 'Validé', '2020-10-01 15:40:09', '114'),
(50, '2020-08-31', '2020-09-07', '5', '', 'Congé payé', 'Validé', '2020-10-01 16:39:55', '111'),
(52, '2017-07-31', '2017-08-11', '9', '', 'Congé payé', 'Validé', '2020-10-02 14:52:30', '119'),
(53, '2017-12-26', '2017-12-29', '3', '', 'Congé Paye', 'Validé', '2020-10-02 14:52:54', '119'),
(54, '2018-12-21', '2018-12-31', '6', '', 'Congé Paye', 'Validé', '2020-10-02 14:53:12', '119'),
(55, '2018-09-03', '2018-09-14', '9', '', 'Congé Paye', 'Validé', '2020-10-02 14:53:49', '119'),
(56, '2019-07-22', '2019-08-05', '10', '', 'Congé Paye', 'Validé', '2020-10-02 14:54:36', '119'),
(57, '2019-12-26', '2020-01-01', '4', '', 'Congé Paye', 'Validé', '2020-10-02 14:56:59', '119'),
(58, '2019-11-06', '2019-11-18', '8', '', 'Congé Paye', 'Validé', '2020-10-02 14:57:58', '119'),
(59, '2018-11-19', '2018-11-20', '1', '', 'Congé Paye', 'Validé', '2020-10-02 14:58:17', '119'),
(60, '2020-08-10', '2020-08-21', '9', '', 'Congé Paye', 'Validé', '2020-10-02 14:59:02', '119'),
(61, '2020-03-13', '2020-03-16', '1', '', 'Congé Paye', 'Validé', '2020-10-02 14:59:47', '119'),
(62, '2018-08-03', '2018-08-14', '7', '', 'Congé payé', 'Validé', '2020-10-02 15:00:11', '119'),
(64, '2018-09-11', '2018-09-21', '8', '', 'Congé Paye', 'Validé', '2020-10-02 15:35:59', '120'),
(65, '2018-12-24', '2018-12-31', '5', '', 'Congé Paye', 'Validé', '2020-10-02 15:36:14', '120'),
(66, '2018-03-12', '2018-03-16', '4', '', 'Congé Paye', 'Validé', '2020-10-02 15:36:33', '120'),
(67, '2018-12-14', '2018-12-17', '1', '', 'Congé Paye', 'Validé', '2020-10-02 15:36:58', '120'),
(68, '2018-12-10', '2018-12-11', '1', '', 'Congé Paye', 'Validé', '2020-10-02 15:37:14', '120'),
(69, '2018-12-03', '2018-12-04', '1', '', 'Congé Paye', 'Validé', '2020-10-02 15:37:47', '120'),
(70, '2017-10-16', '2017-10-20', '4', '', 'Congé Paye', 'Validé', '2020-10-02 15:38:06', '120'),
(71, '2017-12-26', '2017-12-29', '3', '', 'Congé Paye', 'Validé', '2020-10-02 15:38:22', '120'),
(72, '2019-11-21', '2019-11-22', '1', '', 'Congé Paye', 'Validé', '2020-10-02 15:38:39', '120'),
(73, '2019-12-16', '2020-01-02', '13', '', 'Congé Paye', 'Validé', '2020-10-02 15:39:09', '120'),
(74, '2020-01-13', '2020-01-14', '1', '', 'Congé Paye', 'Validé', '2020-10-02 15:39:22', '120'),
(75, '2020-09-23', '2020-09-28', '3', '', 'Congé Paye', 'Validé', '2020-10-02 15:40:04', '120'),
(76, '2020-07-27', '2020-07-31', '4', '', 'Congé Paye', 'Validé', '2020-10-02 15:40:27', '120'),
(77, '2018-04-30', '2018-05-01', '1', '', 'Congé Paye', 'Validé', '2020-10-02 15:40:45', '120'),
(79, '2018-04-18', '2018-04-25', '5', '', 'Congé Paye', 'Validé', '2020-10-05 10:24:28', '121'),
(80, '2018-08-06', '2018-08-13', '5', '', 'Congé Paye', 'Validé', '2020-10-05 10:24:46', '121'),
(81, '2018-05-02', '2018-05-03', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:25:06', '121'),
(82, '2019-06-12', '2019-06-13', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:25:21', '121'),
(83, '2019-08-05', '2019-08-19', '8', '', 'Congé Paye', 'Validé', '2020-10-05 10:25:38', '121'),
(84, '2018-01-31', '2018-02-02', '2', '', 'Congé Paye', 'Validé', '2020-10-05 10:25:56', '121'),
(85, '2019-12-26', '2020-01-01', '4', '', 'Congé Paye', 'Validé', '2020-10-05 10:26:22', '121'),
(86, '2019-11-27', '2019-11-28', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:26:43', '121'),
(87, '2020-01-07', '2020-01-08', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:27:12', '121'),
(88, '2020-01-07', '2020-01-08', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:28:38', '121'),
(89, '2020-01-09', '2020-01-10', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:28:52', '121'),
(90, '2020-08-10', '2020-08-21', '9', '', 'Congé Paye', 'Validé', '2020-10-05 10:29:07', '121'),
(91, '2018-05-09', '2018-05-10', '1', '', 'Congé Paye', 'Validé', '2020-10-05 10:29:27', '121'),
(92, '2018-08-20', '2018-08-31', '9', '', 'Congé payé', 'Validé', '2020-10-05 10:57:08', '122'),
(93, '2018-12-24', '2018-12-31', '5', '', 'Congé payé', 'Validé', '2020-10-05 10:58:41', '122'),
(94, '2019-12-26', '2020-01-01', '4', '', 'Congé payé', 'Validé', '2020-10-05 10:58:59', '122'),
(95, '2020-03-13', '2020-03-16', '1', '', 'Congé payé', 'Validé', '2020-10-05 10:59:43', '122'),
(96, '2020-08-17', '2020-08-25', '6', '', 'Congé payé', 'Validé', '2020-10-05 10:59:59', '122'),
(97, '2019-10-21', '2019-10-31', '8', '', 'Congé payé', 'Validé', '2020-10-05 11:00:19', '122'),
(98, '2018-10-10', '2018-10-12', '2', '', 'Congé Paye', 'Validé', '2020-10-05 11:04:39', '123'),
(99, '2018-08-13', '2018-08-17', '4', '', 'Congé Paye', 'Validé', '2020-10-05 11:04:54', '123'),
(100, '2019-08-05', '2019-08-19', '8', '', 'Congé Paye', 'Validé', '2020-10-05 11:05:21', '123'),
(101, '2019-10-10', '2019-10-14', '2', '', 'Congé Paye', 'Validé', '2020-10-05 11:06:14', '123'),
(102, '2018-06-25', '2018-06-26', '1', '', 'Congé Paye', 'Validé', '2020-10-05 11:06:32', '123'),
(103, '2019-12-23', '2020-01-01', '7', '', 'Congé Paye', 'Validé', '2020-10-05 11:06:50', '123'),
(104, '2020-08-10', '2020-08-21', '9', '', 'Congé Paye', 'Validé', '2020-10-05 11:07:10', '123'),
(105, '2018-12-24', '2018-12-31', '5', '', 'Congé Paye', 'Validé', '2020-10-05 11:07:40', '123'),
(106, '2019-08-05', '2019-08-19', '8', '', 'Congé payé', 'Validé', '2020-10-05 11:11:38', '124'),
(107, '2020-08-03', '2020-08-14', '9', '', 'Congé payé', 'Validé', '2020-10-05 11:38:02', '124'),
(108, '2020-01-20', '2020-01-27', '5', '', 'Congé payé', 'Validé', '2020-10-05 11:38:18', '124'),
(110, '2019-12-26', '2020-01-01', '4', '', 'Congé Paye', 'Validé', '2020-10-05 11:44:38', '125'),
(111, '2020-07-15', '2020-07-27', '8', '', 'Congé Paye', 'Validé', '2020-10-05 11:45:22', '125'),
(112, '2020-08-13', '2020-08-24', '7', '', 'Congé Paye', 'Validé', '2020-10-05 11:48:53', '126'),
(113, '2020-10-09', '2020-10-12', '1', 'demande faite y a 1 mois pour mon anniversaire', 'Congé payé', 'Validé', '2020-10-06 16:35:42', '123'),
(127, '2019-08-05', '2019-08-19', '8', '', 'Congé Paye', 'Validé', '2020-10-09 13:31:42', '133'),
(129, '2020-02-10', '2020-02-12', '2', '', 'Congé Paye', 'Validé', '2020-10-09 13:32:36', '133'),
(130, '2019-10-22', '2019-10-23', '1', '', 'Congé Paye', 'Validé', '2020-10-09 13:32:54', '133'),
(131, '2019-08-05', '2019-08-19', '8', 'AID ADHA', 'Congé Paye', 'Validé', '2020-10-09 13:45:29', '134'),
(133, '2019-12-31', '2020-01-01', '1', '', 'Congé Paye', 'Validé', '2020-10-09 13:45:29', '134'),
(134, '2020-01-15', '2020-01-17', '2', '', 'Congé Paye', 'Validé', '2020-10-09 13:45:29', '135'),
(135, '2020-07-06', '2020-07-18', '10', '', 'Congé Paye', 'Validé', '2020-10-09 13:45:29', '136'),
(136, '2018-08-06', '2018-08-17', '9', '', 'Congé Paye', 'Validé', '2020-10-09 13:45:29', '137'),
(137, '2019-10-14', '2019-10-18', '4', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(138, '2017-07-27', '2017-08-11', '11', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(139, '2017-12-26', '2017-12-29', '3', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(140, '2019-12-25', '2020-01-02', '6', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(141, '2019-01-11', '2019-01-12', '1', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(142, '2020-08-17', '2020-08-29', '10', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(143, '2019-08-05', '2019-08-19', '8', '', 'Congé payé', 'Validé', '2020-09-29 10:58:16', '137'),
(149, '2020-10-15', '2020-10-16', '1', 'RDV Medecin', 'Congé payé', 'Validé', '2020-10-13 08:57:28', '115'),
(150, '2020-10-08', '2020-10-09', '1', 'RDV Medecin', 'Congé payé', 'Validé', '2020-10-13 08:58:05', '115'),
(151, '2020-10-22', '2020-10-26', '2', 'pour le dépôt du renouvellement de la carte de séjour ', 'Congé payé', 'Validé', '2020-10-15 16:41:11', '125'),
(152, '2020-11-02', '2020-11-03', '1', '', 'Congé payé', 'Validé', '2020-10-19 11:09:21', '122'),
(154, '2020-10-29', '2020-11-02', '2', 'vacances scolaire ', 'Congé payé', 'Validé', '2020-10-22 10:17:36', '120'),
(160, '2020-10-22', '2020-10-26', '2', 'Décès ', 'Décès', 'Validé', '2020-10-22 10:57:15', '119'),
(162, '2020-10-23', '2020-10-26', '1', 'RDV Medecin', 'Congé payé', 'Validé', '2020-10-22 17:04:13', '115'),
(163, '2020-10-01', '2020-10-05', '2', 'covid ', 'Congé Paye', 'Validé', '2020-10-23 10:50:01', '133'),
(158, '2020-12-24', '2020-12-25', '1', 'Invitation a la fête de Noël chez mon Mari', 'Congé Paye', 'Validé', '2020-10-22 10:22:22', '123'),
(164, '2020-10-09', '2020-10-12', '1', 'contrôle médecin  ', 'Congé Paye', 'Validé', '2020-10-23 11:29:37', '120'),
(166, '2020-11-20', '2020-11-23', '1', 'Pour des affaires personnels ', 'Congé payé', 'En attente', '2020-10-26 09:16:20', '111'),
(170, '2020-12-24', '2020-12-25', '1', 'fête chrétienne ', 'Congé Paye', 'En attente', '2020-10-30 16:54:53', '125'),
(171, '2020-11-09', '2020-11-10', '1', '', 'Congé payé', 'Validé', '2020-11-02 11:37:06', '123'),
(172, '2020-11-03', '2020-11-13', '1', 'test', 'Congé payé', 'Refus', '2020-11-02 16:50:49', '111');

-- --------------------------------------------------------

--
-- Table structure for table `historiques`
--

DROP TABLE IF EXISTS `historiques`;
CREATE TABLE IF NOT EXISTS `historiques` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `congeId` int(11) NOT NULL,
  `commentaire` text NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `EtatHistory` varchar(200) NOT NULL,
  `date_creation` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `historiques`
--

INSERT INTO `historiques` (`id`, `userId`, `congeId`, `commentaire`, `user_name`, `EtatHistory`, `date_creation`) VALUES
(51, 111, 171, '', 'Ayoub', 'Validé', '2020-11-09 08:21:02'),
(49, 111, 172, '', 'Ayoub', 'En attente', '2020-11-06 15:39:45'),
(50, 111, 172, '', 'Ayoub', 'Refus', '2020-11-09 08:13:59'),
(48, 111, 172, '', 'Ayoub', 'Refus', '2020-11-06 13:23:17'),
(46, 111, 172, '', 'Ayoub', 'En attente', '2020-11-06 13:10:33'),
(47, 111, 172, '', 'Ayoub', 'Validé', '2020-11-06 13:11:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` text DEFAULT NULL,
  `last_name` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `type` text DEFAULT NULL,
  `created` text DEFAULT NULL,
  `date_recrutement` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=138 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `type`, `created`, `date_recrutement`) VALUES
(111, 'Ayoub', 'Moutii', 'a.moutii@artex-business.com', '$2b$10$IumCjXhlCn83dSmbb0H6QOQtLPltt4nq8elM1/WXvRtTxEVSgmPnq', 'Administrateur', '2020-09-29 10:28:33', '2019-03-01'),
(112, 'Mouhssine', 'Sobhi', 'm.sobhi@artex-business.com', '$2b$10$Ja/g.JOQOjWFKPlg9NYRaupbYwQuD/Cao4PtUpBIr6d6Vb1QQLiBK', 'Administrateur', '2020-09-29 10:31:18', '2015-10-21'),
(113, 'Aouatif', 'Halioua', 'a.halioua@artex-business.com', '$2b$10$j0vr8hTkwAsUZmYR7fLHxuCxnFmfbytCJGX9Wg08F7zKRasSWZr/S', 'RESPONSABLE_TLV', '2020-09-29 10:33:50', '2015-06-09'),
(114, 'Khadija ', 'Sabiq', 'k.sabiq@artex-business.com', '$2b$10$8ivT2rr8.4MJvL0BGKS6OeygRokwnzvZrDUQG4JInx2lsgoJTX4G.', 'Résponsable Gestion', '2020-09-29 10:37:18', '2014-04-09'),
(115, 'Sakina', 'Khaz', 's.khaz@artex-business.com', '$2b$10$iNvUS/YneBWdWxsf7JozQOqG5/lelPttYw3h6f6GjKeqS12Ac5RSu', 'Résponsable Qualife', '2020-09-29 10:39:26', '2018-10-29'),
(120, 'Asmaa', 'Ibnelbachyi', 'a.ibnelbachyi@artex-business.com', '$2b$10$2NopNOMVDrDbeuQd.Mmagup.OFTDcnt4OvYmZa8o.IiVB.OyYvBci', 'AGENT TLV', '2020-10-02 15:35:19', '2017-03-30'),
(119, 'Kenza', 'Saidi', 'k.saidi@artex-business.com', '$2b$10$gyOuI4fD.24v/o.Uhe.5mexhp3D2sQDdofkOB8KvBY72.c0Ixq.y2', 'AGENT TLV', '2020-10-02 14:49:54', '2016-08-01'),
(121, 'Samira', 'Yaser', 's.yaser@artex-business.com', '$2b$10$GTjewheQZlGHbPLaVJE4Ke5tlzAvZFPyOivaZvyBVvFdql86CKZUe', 'AGENT TLV', '2020-10-05 10:00:59', '2017-08-01'),
(122, 'Awa', 'Diagne', 'a.diagne@artex-business.com', '$2b$10$aoLWtjgUKaHCKvjqGsmgcudEpGime4ZJg9Ma5./6jWf6gWINhCpCe', 'AGENT TLV', '2020-10-05 10:55:53', '2018-04-23'),
(123, 'Carole', 'Noth', 'c.noth@artex-business.com', '$2b$10$SJtTbINKFMv2iEBc5SpJKOTrtaBOnH25PotbDpml/xGVUbUk4aHY6', 'AGENT TLV', '2020-10-05 11:04:06', '2018-02-23'),
(124, 'Nahid', 'Mhedouir', 'n.mhedouir@artex-business.com', '$2b$10$OL6jLhJjOT9AVKIAoCR3zue9XaxnqC3id11/RYkQg9faf3WLUOMcO', 'AGENT TLV', '2020-10-05 11:10:33', '2019-02-01'),
(125, 'Chris', 'Mampouya', 'c.doje@artex-business.com', '$2b$10$aeXQg25CVAQ3TN49Q8BQS.SgPwHn57yi.w0U/IYgc3lMLP/fgBb16', 'AGENT TLV', '2020-10-05 11:44:13', '2019-03-15'),
(126, 'Meryem', 'Manni', 'm.manni@artex-business.com', '$2b$10$qgcoyqrPTFmTXP3VbHWxN.IpK/c/t3CMOOoz7mnve03YhIB9M.0B6', 'AGENT TLV', '2020-10-05 11:48:21', '2019-10-04'),
(127, 'Dounia', 'Boukoumjih', 'd.boukoumjih@artex-business.com', '$2b$10$40MPw.UL85xYFuwNa65TF.Zda49U9Ca64v7i8TLK8rSZf.ik828Su', 'AGENT TLV', '2020-10-05 13:34:45', '2020-02-05'),
(128, 'Driss', 'Ahmar', 'd.ahmar@artex-business.com', '$2b$10$rH4ypjq39whQsH.EU4IZg.qXkIlSt9MpOrgL7p2MGxeipegjNYtz6', 'AGENT TLV', '2020-10-05 13:39:48', '2020-08-01'),
(129, 'Tondeux', 'Audrey', 't.audrey@artex-business.com', '$2b$10$CrdvrtTHMGzSW.4FiZnQbODTsEmY9l5sR1nr7/PbeZOZcOmWZsIX.', 'Résponsable Gestion', '2020-10-05 13:48:13', '2020-05-01'),
(130, 'Alexia', 'Ramauge', 'a.ramauge@artex-assurances.com', '$2b$10$WmrkgcMWVYsvlDM8e0NkOexGY4pQHYTxKJocYF6tXT0h9WIzNZCOK', 'Résponsable Gestion', '2020-10-05 14:04:02', '2016-10-03'),
(131, 'Lahcen', 'Mazouz', 'l.mazouz@artex-business.com', '$2b$10$ra1t9SZ44JPhRr5X00IHh..r.gI2i9k7I2E4E3w5dVP5klzp1w7S6', 'Administrateur', '2020-10-05 15:52:52', '2015-01-01'),
(132, 'Siegfried ', 'Ramauge', 's.ramauge@artex-assurances.com', '$2b$10$BeUpxb1SSR5RbljBprmMiuhRyGcowLajizBgwyf4bLLM0kXmhdN7C', 'Administrateur', '2020-10-05 15:57:26', '2015-01-01'),
(133, 'Zakaria', 'Boubry', 'z.boubry@artex-business.com', '$2b$10$OyWSfKHn9tUKAAiIB/bZvOdmvDa54c3EmfJezpJgMUirp4ACwPi7S', 'AGENT Qualife', '2020-10-09 13:24:46', '2018-10-15'),
(134, 'Imane', 'Akaabouch', 'i.akaabouch@artex-business.com', '$2b$10$i2mPctJoE1Hdv5uylPpBiOdZfyxM/v/61uh4ln/TrDA9lbolR6AZi', 'AGENT Qualife', '2020-10-09 13:25:43', '2018-10-30'),
(135, 'Meriem', 'Azzi', 'm.azzi@artex-business.com', '$2b$10$r87N6Q6fljKVV.7D7GQlSu0pTnssII3pdMVKjm1zYZzszujG2.Cmu', 'AGENT Qualife', '2020-10-09 13:26:29', '2019-08-01'),
(136, 'Soukaina', 'Zagani', 's.zegani@artex-business.com', '$2b$10$f0K7WzpioltGQwmyqOoyb.V0reb6IBJBk60.ZGZlUNPKBJ7RKU7IS', 'AGENT Qualife', '2020-10-09 13:27:02', '2019-08-15'),
(137, 'Amina', 'Haibat', 'a.haibat@artex-business.com', '$2b$10$O//gHxsuf1CsVxdsHxuJ.uromeWyBWv6TFHuxI0h/LcsWt1AkgY3m', 'AGENT Qualife', '2020-10-09 13:27:37', '2017-03-01');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
