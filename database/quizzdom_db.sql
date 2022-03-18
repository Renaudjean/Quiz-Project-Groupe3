<<<<<<< HEAD
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
=======
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 18 mars 2022 à 07:44
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizzdom`
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
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `answer`
--

INSERT INTO `answer` (`ANS_ID`, `Answer`, `Option_Number`, `Correct_Or_Not`, `Question`) VALUES
(1, 'Lyon', 1, 0, 1),
(2, 'Annecy', 2, 0, 1),
(3, 'Paris', 3, 1, 1),
(4, 'Marseille', 4, 0, 1),
(5, 'Laussane', 1, 0, 2),
(6, 'Bern', 2, 1, 2),
(7, 'Geneva', 3, 0, 2),
(8, 'Zurich', 4, 0, 2),
(9, 'Bruxelles', 1, 1, 3),
(10, 'Gand', 2, 0, 3),
(11, 'Anvers', 3, 0, 3),
(12, 'Bruges', 4, 0, 3),
(13, 'Milan', 1, 0, 4),
(14, 'Torino', 2, 0, 4),
(15, 'Napoli', 3, 0, 4),
(16, 'Rome', 4, 1, 4),
(17, 'London', 1, 1, 5),
(18, 'Manchester', 2, 0, 5),
(19, 'Liverpool', 3, 0, 5),
(20, 'Leeds', 4, 0, 5),
(21, 'Barcelona', 1, 0, 6),
(22, 'Madrid', 2, 1, 6),
(23, 'Bilbao', 3, 0, 6),
(24, 'Valence', 4, 0, 6),
(25, 'Thanos', 1, 0, 7),
(26, 'Loki', 2, 0, 7),
(27, 'Ultron', 3, 1, 7),
(28, 'Red Skull', 4, 0, 7),
(29, 'Remus Lupin', 1, 0, 8),
(30, 'Severus Rogue', 2, 0, 8),
(31, 'Rubeus Hagrid', 3, 0, 8),
(32, 'Sirius Black', 4, 1, 8),
(33, 'Nazgul', 1, 0, 9),
(34, 'Balrog', 2, 1, 9),
(35, 'Sauron', 3, 0, 9),
(36, 'Smaug', 4, 0, 9),
(37, 'Leia and Han Solo', 1, 1, 10),
(38, 'Leia and Luke Skywalker', 2, 0, 10),
(39, 'Leia and Chewbacca', 3, 0, 10),
(40, 'Leia and Obi-Wan Kenobi', 4, 0, 10),
(41, 'Thanos', 1, 1, 11),
(42, 'Loki', 2, 0, 11),
(43, 'Ultron', 3, 0, 11),
(44, 'Red Skull', 4, 0, 11),
(45, 'Black Panther', 1, 0, 12),
(46, 'White Rabbit', 2, 1, 12),
(47, 'Grenn Hornet', 3, 0, 12),
(48, 'Pink Panther', 4, 0, 12),
(49, 'Kill Bill', 1, 0, 13),
(50, 'Pulp Fiction', 2, 0, 13),
(51, 'Usual Suspects', 3, 1, 13),
(52, 'Django Unchained', 4, 0, 13),
(53, 'Titanic', 1, 0, 14),
(54, 'Jaws', 2, 0, 14),
(55, 'Abyss', 3, 0, 14),
(56, 'The Meg', 4, 1, 14),
(57, 'Avatar', 1, 1, 15),
(58, 'Star Wars VII', 2, 0, 15),
(59, 'Titanic', 3, 0, 15),
(60, 'Jurassic World', 4, 0, 15),
(61, 'Tom Holland', 1, 0, 16),
(62, 'Tom Hanks', 2, 1, 16),
(63, 'Tom Hardy', 3, 0, 16),
(64, 'Tom Cruise', 4, 0, 16),
(65, 'Elon Musk', 1, 1, 17),
(66, 'Bill Gates', 2, 0, 17),
(67, 'Steve Jobs', 3, 0, 17),
(68, 'Jeff Bezos', 4, 0, 17),
(69, 'Bruce Lee', 1, 0, 18),
(70, 'Jackie Chan', 2, 1, 18),
(71, 'Jet Li', 3, 0, 18),
(72, 'Donnie Yen', 4, 0, 18),
(73, 'Lionel Messi', 1, 0, 19),
(74, 'LeBron James', 2, 0, 19),
(75, 'Conor McGregor', 3, 1, 19),
(76, 'Tiger Woods', 4, 0, 19),
(77, 'Steve Jobs', 1, 0, 20),
(78, 'Albert Einstein', 2, 0, 20),
(79, 'Charles Darwin', 3, 0, 20),
(80, 'Isaac Newton', 4, 1, 20),
(81, 'Sainte-hélène', 1, 1, 21),
(82, 'Corse', 2, 0, 21),
(83, 'France', 3, 0, 21),
(84, 'Italie', 4, 0, 21),
(85, 'Bill Clinton', 1, 0, 22),
(86, 'Donald Trump', 2, 0, 22),
(87, 'Barack Obama', 3, 1, 22),
(88, 'Denzel Washington', 4, 0, 22),
(89, 'Joaquin Phoenix', 1, 0, 23),
(90, 'Johnny Depp', 2, 1, 23),
(91, 'Leonardo DiCaprio', 3, 0, 23),
(92, 'Matthew McConaughey', 4, 0, 23);

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
  `Quiz_ID` int NOT NULL,
  PRIMARY KEY (`Question_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`Question_ID`, `Question`, `Question_Photo`, `Answer`, `Quiz_ID`) VALUES
(1, 'What is the capital of France ?', '', 3, 1),
(2, 'What is the capital of Swiss ?', '', 6, 1),
(3, 'What is the capital of Belgium ?', '', 9, 1),
(4, 'What is the capital of Italy ?', '', 16, 1),
(5, 'What is the capital of England ?', '', 17, 1),
(6, 'What is the capital of Spain ?', '', 22, 1),
(7, 'What is the name of the big bad in the movie Avengers: Age of ultron ?', '', 27, 2),
(8, 'Who is the godfather of Harry Potter ?', '', 32, 2),
(9, 'In the movie the Lord of the Rings what is the name of the demon to meet in Moria ?', '', 34, 2),
(10, 'In the movie star wars who are the parents of Kylo Ren ?', '', 37, 2),
(11, 'What is the name of the big bad in the movie Avengers: Infinity War ?', '', 41, 2),
(12, 'In the movie Matrix which animal must follow Neo ?', '', 46, 2),
(13, 'What Movie Quentin Tarantino Didn\'t Direct ?', '', 51, 2),
(14, 'What movie is this picture from ?', '', 56, 2),
(15, 'What is the most viewed movie in the world ?', '', 57, 2),
(16, 'Which actor to play in Forest Gump ?', '', 62, 2),
(17, 'Who said \'It\'s possible that ordinary people choose to be extraordinary\' ?', '', 65, 3),
(18, 'What is the first Chinese actor to put his fingerprints in the famous cement of the Chinese Theater in Hollywood ?', '', 70, 3),
(19, 'Who is the highest paid athlete in the world ?', '', 75, 3),
(20, 'Who by observing the fall of an apple would have had the illumination which was to lead him to formulate his theory of universal gravitation ?', '', 80, 3),
(21, 'Where did Napoléon Bonaparte die ?', '', 81, 3),
(22, 'Who is the 44th Président of the United States ?', '', 87, 3),
(23, 'Which actor has never had an Oscar ?', '', 90, 3);

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
>>>>>>> Eric-branche
