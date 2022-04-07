-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 07 avr. 2022 à 14:33
-- Version du serveur : 8.0.21
-- Version de PHP : 7.4.27

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
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `account`
--

INSERT INTO `account` (`AC_ID`, `Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType`) VALUES
(1, 'eric@live.fr', 'eric', 'eric', 'oriez', '123456', 1),
(2, 'ana@live.fr', 'ana', 'ana', 'ana', '123456', 1),
(3, 'reno@live.fr', 'scrummaster', 'reno', 'reno', '123456', 1),
(5, 'ana@gmail.com', 'ana123', 'Ana', 'Aaaa', '123456', 0);

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
) ENGINE=MyISAM AUTO_INCREMENT=215 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `answer`
--

INSERT INTO `answer` (`ANS_ID`, `Answer`, `Option_Number`, `Correct_Or_Not`, `Question`) VALUES
(1, 'Lyon', 1, 0, 1),
(2, 'Annecy', 2, 0, 1),
(3, 'Paris', 3, 1, 1),
(4, 'Marseille', 4, 0, 1),
(5, 'Lausanne', 1, 0, 2),
(6, 'Bern', 2, 1, 2),
(7, 'Geneva', 3, 0, 2),
(8, 'Zurich', 4, 0, 2),
(9, 'Brussels', 1, 1, 3),
(10, 'Gand', 2, 0, 3),
(11, 'Anvers', 3, 0, 3),
(12, 'Bruges', 4, 0, 3),
(13, 'Milan', 1, 0, 4),
(14, 'Torino', 2, 0, 4),
(15, 'Naples', 3, 0, 4),
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
(92, 'Matthew McConaughey', 4, 0, 23),
(93, 'Naruto', 1, 0, 24),
(94, 'Saylor Moon', 2, 0, 24),
(95, 'Dragon Ball', 3, 1, 24),
(96, 'Pokemon', 4, 0, 24),
(97, 'Hideaki Anno', 1, 0, 25),
(98, 'Makoto Shinkai', 2, 1, 25),
(99, 'Hayao Miyazaki', 3, 0, 25),
(100, 'Goro Miyazaki', 4, 0, 25),
(101, '\"Spirited Away\"', 1, 0, 26),
(102, '\"Your Name\"', 2, 0, 26),
(103, '\"My Neighbor Totoro\"', 3, 0, 26),
(104, '\"Princess Mononoke\"', 4, 1, 26),
(105, 'Vegeta', 1, 0, 27),
(106, 'Gohan', 2, 0, 27),
(107, 'Goku', 3, 1, 27),
(108, 'Trunks', 4, 0, 27),
(109, 'Ace', 1, 1, 28),
(110, 'Luffy', 2, 0, 28),
(111, 'Blackbeard', 3, 0, 28),
(112, 'Sabo', 4, 0, 28),
(113, 'Ponyo', 1, 0, 29),
(114, 'Kiki', 2, 0, 29),
(115, 'Haku', 3, 0, 29),
(116, 'Totoro', 4, 1, 29),
(117, '\"Spirited Away\"', 1, 1, 30),
(118, '\"Howl\'s Moving Castle\"', 2, 0, 30),
(119, '\"Kiki\'s Delivery Service\"', 3, 0, 30),
(120, '\"Tales From Earthsea\"', 4, 0, 30),
(121, 'Wolf', 1, 0, 31),
(122, 'Fox', 2, 1, 31),
(123, 'Cat', 3, 0, 31),
(124, 'Snake', 4, 0, 31),
(125, '72', 1, 0, 32),
(126, '81', 2, 0, 32),
(127, '90', 3, 1, 32),
(128, '104', 4, 0, 32),
(148, 'Grover Cleveland', 0, 1, 37),
(147, 'James A. Garfield', 0, 0, 37),
(146, 'John F. Kennedy', 0, 0, 37),
(145, 'Benjamin Harrison', 0, 0, 37),
(150, 'A savoury sauce of melted cheese and other ingredients, served hot on toast', 0, 0, 38),
(149, 'A relish of chopped pickled vegetables and spice', 0, 1, 38),
(151, 'Finely shredded cabbage, fermented by various lactic acid bacteria', 0, 0, 38),
(152, 'Rice, cooked flaked fish & hard boiled eggs', 0, 0, 38),
(153, 'Philippines', 0, 0, 39),
(154, 'Turkey', 0, 0, 39),
(155, 'Spain', 0, 0, 39),
(156, 'Greece', 0, 1, 39),
(157, '180', 0, 0, 40),
(158, '360', 0, 0, 40),
(159, '540', 0, 1, 40),
(160, '1080', 0, 0, 40),
(161, 'Michigan', 0, 0, 41),
(162, 'Massachusetts', 0, 1, 41),
(163, 'Indiana', 0, 0, 41),
(164, 'Tennessee', 0, 0, 41),
(165, 'Bay of Naples', 0, 1, 42),
(166, 'Copacabana Beach', 0, 0, 42),
(167, 'Mexico City', 0, 0, 42),
(168, 'The island of Penang', 0, 0, 42),
(169, 'Cat scratch fever', 0, 0, 43),
(170, 'Psittacosis', 0, 0, 43),
(171, 'Measles', 0, 0, 43),
(172, 'Myxomatosis', 0, 1, 43),
(173, 'Exercise', 0, 0, 44),
(174, 'Soil', 0, 1, 44),
(175, 'Bicycles', 0, 0, 44),
(176, 'Feet', 0, 0, 44),
(177, 'Cox\'s Orange Pippin', 0, 0, 45),
(178, 'Golden Delicious', 0, 0, 45),
(179, 'Gravenstein', 0, 0, 45),
(187, 'Argon', 0, 0, 46),
(188, 'Helium', 0, 1, 46),
(189, 'Xenon', 0, 0, 46),
(190, 'Krypton', 0, 0, 46),
(186, 'Granny Smith', 0, 1, 45),
(191, 'Bodyguards', 0, 1, 47),
(192, 'Doctors', 0, 0, 47),
(193, 'Minstrels', 0, 0, 47),
(194, 'Actors', 0, 0, 47),
(195, 'Ammonia', 0, 1, 48),
(196, 'Chlorine', 0, 0, 48),
(197, 'Naphthalene', 0, 0, 48),
(198, 'Turpentine', 0, 0, 48),
(199, '40 to 45 days', 0, 0, 49),
(200, '10 to 11 days', 0, 1, 49),
(201, '2 days', 0, 0, 49),
(202, '6 hours', 0, 0, 49),
(203, 'Antonio Gaudi', 0, 1, 50),
(204, 'Frank Lloyd Wright', 0, 0, 50),
(205, 'Georges-Eugène Haussmann', 0, 0, 50),
(206, 'Christopher Wren', 0, 0, 50),
(207, 'Red Sea', 0, 0, 51),
(208, 'Bering Sea', 0, 0, 51),
(209, 'Kara Sea', 0, 0, 51),
(210, 'Tasman Sea', 0, 1, 51),
(211, '8', 0, 0, 52),
(212, '12', 0, 0, 52),
(213, '24', 0, 1, 52),
(214, '120', 0, 0, 52);

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
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`Question_ID`, `Question`, `Question_Photo`, `Answer`, `Quiz_ID`) VALUES
(1, 'What is the capital of France?', '/assets/img/img-question/question-1-france.jpg', 3, 1),
(2, 'What is the capital of Switzerland?', '/assets/img/img-question/question-2-swiss.jpg', 6, 1),
(3, 'What is the capital of Belgium?', '/assets/img/img-question/question-3-belgium.jpg', 9, 1),
(4, 'What is the capital of Italy?', '/assets/img/img-question/question-4-italy.jpg', 16, 1),
(5, 'What is the capital of England?', '/assets/img/img-question/question-5-england.jpg', 17, 1),
(6, 'What is the capital of Spain?', '/assets/img/img-question/question-6-spain.jpg', 22, 1),
(7, 'What is the name of the big bad guy in the movie \"Avengers: Age of Ultron\"?', '/assets/img/img-question/question-7-avenger.jpg', 27, 2),
(8, 'Who is the Harry Potter\'s godfather?', '/assets/img/img-question/question-8-hp.jpg', 32, 2),
(9, 'In \"The Lord of the Rings\", what is the name of the demon they meet in Moria?', '/assets/img/img-question/question-9-lotr.jpg', 34, 2),
(10, 'In the movie \"Star Wars\", who are the parents of Kylo Ren?', '/assets/img/img-question/question-10-sw.jpg', 37, 2),
(11, 'What is the name of the big bad guy in the movie \"Avengers: Infinity War\"?', '/assets/img/img-question/question-11-avenger.jpg', 41, 2),
(12, 'In the movie \"Matrix\", what animal does Neo follow?', '/assets/img/img-question/question-12-matrix.jpg', 46, 2),
(13, 'Which of the following movies was NOT directed by Quentin Tarantino?', '/assets/img/img-question/question-13-tarantino.jpg', 51, 2),
(14, 'What movie is this picture from?', '/assets/img/img-question/question-14-Meg.jpg', 56, 2),
(15, 'What is the most watched movie of all times?', '/assets/img/img-question/question-15-viewed.jpg', 57, 2),
(16, 'Which actor starred in \"Forrest Gump\"?', '/assets/img/img-question/question-16-forest-gump.jpg', 62, 2),
(17, 'The quote \"I think it is possible for ordinary people to choose to be extraordinary\" belongs to...', '/assets/img/img-question/question-17-musk.jpg', 65, 3),
(18, 'Who is the first Chinese actor to have put his fingerprints in the famous cement of the \"Chinese Theater\" in Hollywood?', '/assets/img/img-question/question-18-chan.jpg', 70, 3),
(19, 'Who is the highest paid athlete in the world?', '/assets/img/img-question/question-19-athlete.jpg', 75, 3),
(20, 'Who, after watching an apple fall, had an illumination and formulated his famous gravitational theory?', '/assets/img/img-question/question-20-apple.jpg', 80, 3),
(21, 'Where did Napoleon Bonaparte die?', '/assets/img/img-question/question-21-napoleon.jpg', 81, 3),
(22, 'Who is the 44th President of the United States?', '/assets/img/img-question/question-22-president.jpg', 87, 3),
(23, 'Which actor has never had an Oscar?', '/assets/img/img-question/question-23-oscar.jpg', 90, 3),
(24, 'What is the most popular anime of all times?', '/assets/img/img-question/question-24-anime.jpg', 95, 4),
(25, '\"5 Centimeters per Second\" is a masterpiece created by..', '/assets/img/img-question/question-25-5cm.jpg', 98, 4),
(26, 'What anime is this image from?', '/assets/img/img-question/question-26-screenshot.jpg', 104, 4),
(27, 'Which \"Dragon Ball Z\" character first becomes super saiyan?', '/assets/img/img-question/question-27-dragonball.jpg', 107, 4),
(28, 'In anime \"One piece\", who dies in the Marineford Battle?', '/assets/img/img-question/question-28-onepiece.jpg', 109, 4),
(29, 'What is the name of Studio Ghibli’s well-known mascot?', '/assets/img/img-question/question-29-ghibli.jpg', 116, 4),
(30, 'Yubaba is a witch in which animated film written and directed by Hayao Miyazaki?', '/assets/img/img-question/question-30-yubaba.jpg', 117, 4),
(31, 'In \"Naruto\", the main character is a host for the powerful Nine-Tales. What creature is the Nine-Tails?', '/assets/img/img-question/question-31-naruto.jpg', 122, 4),
(32, 'In \"Howl’s Moving Castle\", Sophie is transformed into an old woman by a witch. How old is Sophie as an old woman?', '/assets/img/img-question/question-32-castle.jpeg', 127, 4),
(37, 'Who is the only US president to have served two non-consecutive terms and is therefore counted as both the 22nd and 24th president?', '/assets/img/img-question/quiz-general-1.png', 0, 7),
(38, 'What is the dish called \"Piccalilli\"?', '/assets/img/img-question/quiz-general-2.jpg', 0, 7),
(39, 'Which country governs such islands as Lesbos, Corfu, Lemnos, Andros and others?', '/assets/img/img-question/quiz-general-3.jpg', 0, 7),
(40, 'The internal angles of a pentagon add up to how many degrees?', '/assets/img/img-question/quiz-general-4.jpg', 0, 7),
(41, 'In which state of the USA is the private research university known as M. I. T.?', '/assets/img/img-question/quiz-general-5.png', 0, 7),
(42, 'Mount Vesuvius overlooks what area?', '/assets/img/img-question/quiz-general-6.jpg', 0, 7),
(43, 'Which virus spread by fleas was deliberately introduced into Australia to control rabbits in 1951?', '/assets/img/img-question/quiz-general-7.jpg', 0, 7),
(44, 'Pedology is the study of what?', '/assets/img/img-question/quiz-general-8.jpg', 0, 7),
(45, 'What type of apple is on the Apple Records logo?', '/assets/img/img-question/quiz-general-9.jpg', 0, 7),
(46, 'What is the lightest noble gas?', '/assets/img/img-question/quiz-general-10.jpg', 0, 7),
(47, 'In the Middle Ages, what were \"hauskarls\"?', '/assets/img/img-question/quiz-general-11.jpg', 0, 7),
(48, 'What is the common name of the chemical NH3, which is found in cleaning products?', '/assets/img/img-question/quiz-general-12.jpg', 0, 7),
(49, 'Meat is usually \"hung\" after the animal is killed to improve tenderness and flavour. The recommended time differs according to the meat; how long is the usual minimum for which beef is \"hung\"?', '/assets/img/img-question/quiz-general-13.jpg', 0, 7),
(50, 'Which of these has had the most influence on the architecture of Barcelona?', '/assets/img/img-question/quiz-general-14.jpg', 0, 7),
(51, 'Which of these seas is not on the coast of Asia?', '/assets/img/img-question/quiz-general-15.jpg', 0, 7),
(52, 'What number is the factorial of 4?', '/assets/img/img-question/quiz-general-16.jpg', 0, 7);

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
  PRIMARY KEY (`Quiz_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo`, `Score`) VALUES
(1, 'Capitals', 'Sure you know all the countries\' capitals of the world? Challenge yourself!', '/assets/img/img-quiz/quiz-capitals.jpg', 0),
(2, 'Movies', 'Love movies? Me too! Let\'s see if you pay attention while watching!', '/assets/img/img-quiz/quiz-movies.jpg', 0),
(3, 'Personalities', 'World\'s top influencers and personalities: do you know them?', '/assets/img/img-quiz/quiz-personality.jpg', 0),
(4, 'Anime', 'Enjoy Japanese anime movies? Let\'s find out if you know the well!', '/assets/img/img-quiz/quiz-anime.jpg', 0),
(7, 'General knowledge', 'Test your knowledge on physics, maths, politics, geography, etc...', '/assets/img/img-quiz/quiz-general.jpg', 0);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `SC_ID` int NOT NULL AUTO_INCREMENT,
  `Total_Score` int NOT NULL,
  `Total_Time` float NOT NULL,
  `Quiz` int NOT NULL COMMENT 'Quiz_ID',
  `AC_ID` int NOT NULL,
  PRIMARY KEY (`SC_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `score`
--

INSERT INTO `score` (`SC_ID`, `Total_Score`, `Total_Time`, `Quiz`, `AC_ID`) VALUES
(1, 5, 4, 1, 0),
(2, 10, 4, 2, 0),
(3, 2, 1, 1, 0),
(4, 5, 2, 1, 0),
(5, 5, 2, 1, 0),
(6, 5, 2, 1, 0),
(7, 4, 2, 1, 0),
(8, 1, 0, 1, 0),
(9, 1, 0, 1, 0),
(10, 3, 1, 1, 0),
(11, 2, 1, 1, 0),
(12, 2, 1, 1, 0),
(13, 3, 1, 1, 0),
(14, 4, 1, 1, 0),
(15, 3, 1, 1, 0),
(16, 3, 1, 1, 0),
(17, 4, 1, 1, 0),
(18, 4, 1, 1, 0),
(19, 3, 1, 1, 0),
(20, 3, 1, 1, 0),
(21, 4, 2, 1, 0),
(22, 4, 2, 1, 0),
(23, 3, 1, 1, 0),
(24, 3, 1, 1, 0),
(25, 4, 2, 1, 0),
(26, 4, 2, 1, 0),
(27, 6, 2, 1, 0),
(28, 6, 2, 1, 0),
(29, 4, 1, 1, 0),
(30, 1, 1, 1, 0),
(31, 1, 1, 1, 0),
(32, 2, 1, 1, 0),
(33, 2, 1, 1, 0),
(34, 2, 1, 1, 0),
(35, 2, 1, 1, 0),
(36, 1, 0, 1, 0),
(37, 1, 0, 1, 0),
(38, 2, 0, 1, 0),
(39, 3, 1, 1, 0),
(40, 3, 1, 1, 0),
(41, 3, 1, 1, 0),
(42, 1, 1, 1, 0),
(43, 1, 1, 1, 0),
(44, 4, 1, 1, 0),
(45, 4, 1, 1, 0),
(46, 3, 1, 1, 0),
(47, 3, 1, 1, 0),
(48, 6, 1, 1, 0),
(49, 6, 1, 1, 0),
(50, 5, 1, 1, 0),
(51, 6, 2, 1, 0),
(52, 6, 1, 1, 0),
(53, 6, 1, 1, 0),
(54, 2, 0.83, 1, 0),
(55, 6, 1, 1, 0),
(56, 6, 1, 1, 0),
(57, 6, 1, 1, 0),
(58, 6, 1, 1, 0),
(59, 5, 1, 1, 0),
(60, 6, 1, 1, 0),
(61, 1, 3.67, 1, 0),
(62, 6, 1, 1, 0),
(63, 6, 1.17, 1, 0),
(64, 6, 1.17, 1, 0),
(65, 6, 1.5, 1, 0),
(66, 1, 3.67, 1, 0),
(67, 6, 1.17, 1, 0),
(68, 6, 1.17, 1, 0),
(69, 6, 1, 1, 0),
(70, 5, 4.5, 1, 0),
(71, 5, 6, 1, 0),
(72, 5, 6, 1, 0),
(73, 2, 1, 5, 0),
(74, 0, 1, 5, 0),
(75, 2, 1, 5, 0),
(76, 2, 1, 5, 0),
(77, 2, 1, 6, 2),
(78, 2, 1, 6, 2),
(79, 2, 1, 6, 2),
(80, 5, 2.17, 1, 2),
(81, 14, 3.38, 7, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
