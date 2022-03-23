-- phpMyAdmin SQL Dump
<<<<<<< Updated upstream
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 15 mars 2022 à 09:44
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26
=======
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 23 mars 2022 à 15:57
-- Version du serveur : 8.0.21
-- Version de PHP : 7.4.27
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
=======
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`Question_ID`, `Question`, `Question_Photo`, `Answer`, `Quiz_ID`) VALUES
(1, 'What is the capital of France?', '/assets/img/img-question/question-1-1-france.jpg', 3, 1),
(2, 'What is the capital of Switzerland?', '/assets/img/img-question/question-1-2-swiss.jpg', 6, 1),
(3, 'What is the capital of Belgium?', '/assets/img/img-question/question-1-3-belgium.jpg', 9, 1),
(4, 'What is the capital of Italy?', '/assets/img/img-question/question-1-4-italy.jpg', 16, 1),
(5, 'What is the capital of England?', '/assets/img/img-question/question-1-5-england.jpg', 17, 1),
(6, 'What is the capital of Spain?', '/assets/img/img-question/question-1-6-spain.jpg', 22, 1),
(7, 'What is the name of the big bad guy in the movie \"Avengers: Age of Ultron\"?', '/assets/img/img-question/question-2-7-avenger.jpg', 27, 2),
(8, 'Who is the Harry Potter\'s godfather?', '/assets/img/img-question/question-2-8-hp.jpg', 32, 2),
(9, 'In \"The Lord of the Rings\", what is the name of the demon they meet in Moria?', '/assets/img/img-question/question-2-9-lotr.jpg', 34, 2),
(10, 'In the movie \"Star Wars\", who are the parents of Kylo Ren?', '/assets/img/img-question/question-2-10-sw.jpg', 37, 2),
(11, 'What is the name of the big bad guy in the movie \"Avengers: Infinity War\"?', '/assets/img/img-question/question-2-11-avenger.jpg', 41, 2),
(12, 'In the movie \"Matrix\", what animal follows Neo?', '/assets/img/img-question/question-2-12-matrix.jpg', 46, 2),
(13, 'Which of the following movies was NOT directed by Quentin Tarantino?', '/assets/img/img-question/question-2-13-tarantino.jpg', 51, 2),
(14, 'What movie is this picture from?', '/assets/img/img-question/question-2-14-Meg.jpg', 56, 2),
(15, 'What is the most watched movie of all times?', '/assets/img/img-question/question-2-15-viewed.jpg', 57, 2),
(16, 'Which actor starred in \"Forrest Gump\"?', '/assets/img/img-question/question-2-16-forest-gump.jpg', 62, 2),
(17, 'The quote \"I think it is possible for ordinary people to choose to be extraordinary\" belongs to...', '/assets/img/img-question/question-3-17-musk.jpg', 65, 3),
(18, 'Who is the first Chinese actor to have put his fingerprints in the famous cement of the \"Chinese Theater\" in Hollywood?', '/assets/img/img-question/question-3-18-chan.jpg', 70, 3),
(19, 'Who is the highest paid athlete in the world?', '/assets/img/img-question/question-3-19-athlete.jpg', 75, 3),
(20, 'Who, after watching an apple fall, had an illumination and formulated his famous gravitational theory?', '/assets/img/img-question/question-3-20-apple.jpg', 80, 3),
(21, 'Where did Napoleon Bonaparte die?', '/assets/img/img-question/question-3-21-napoleon.jpg', 81, 3),
(22, 'Who is the 44th President of the United States?', '/assets/img/img-question/question-3-22-president.jpg', 87, 3),
(23, 'Which actor has never had an Oscar?', '/assets/img/img-question/question-3-23-oscar.jpg', 90, 3);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
=======
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo`, `Score`) VALUES
(1, 'Capitals', 'Sure you know all the countries\' capitals of the world? Challenge yourself!', '/assets/img/img-quiz/quiz-capitals.jpg', 0),
(2, 'Movies', 'Love movies? Me too! Let\'s see if you pay attention while watching!', '/assets/img/img-quiz/quiz-movies.jpg', 0),
(3, 'Personalities', 'World\'s top influencers and personalities: do you know them?', '/assets/img/img-quiz/quiz-personality.jpg', 0);
>>>>>>> Stashed changes

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
