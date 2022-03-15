-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 15 mars 2022 à 09:44
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizzdom_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `AC_ID` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `AccountType` int NOT NULL COMMENT 'PER_ID',
  PRIMARY KEY (`AC_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `account_quiz`
--

DROP TABLE IF EXISTS `account_quiz`;
CREATE TABLE IF NOT EXISTS `account_quiz` (
  `AQ_ID` int NOT NULL AUTO_INCREMENT,
  `AC_ID` int NOT NULL,
  `QUIZ_ID` int NOT NULL,
  PRIMARY KEY (`AQ_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `ANS_ID` int NOT NULL AUTO_INCREMENT,
  `Answer` text NOT NULL,
  `Option_Number` int NOT NULL,
  `Correct_Or_Not` tinyint(1) NOT NULL,
  `Question` int NOT NULL COMMENT 'Question_ID',
  PRIMARY KEY (`ANS_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE IF NOT EXISTS `permissions` (
  `PER_ID` tinyint(1) NOT NULL AUTO_INCREMENT,
  `Account_Type` varchar(255) NOT NULL,
  `Account_ID` int NOT NULL COMMENT 'AC_ID',
  PRIMARY KEY (`PER_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `Question_ID` int NOT NULL AUTO_INCREMENT,
  `Question` text NOT NULL,
  `Question_Photo` text NOT NULL,
  `Answer` int NOT NULL COMMENT 'ANS_ID',
  PRIMARY KEY (`Question_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `Quiz_ID` int NOT NULL AUTO_INCREMENT,
  `Quiz_Name` varchar(255) NOT NULL,
  `Quiz_Description` varchar(255) NOT NULL,
  `Quiz_Photo` text NOT NULL,
  `Score` int NOT NULL COMMENT 'SC_ID',
  `Questions` int NOT NULL COMMENT 'Question_ID',
  PRIMARY KEY (`Quiz_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `SC_ID` int NOT NULL AUTO_INCREMENT,
  `Total_Score` int NOT NULL,
  `Total_Time` decimal(10,0) NOT NULL,
  `Quiz` int NOT NULL COMMENT 'Quiz_ID',
  PRIMARY KEY (`SC_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
