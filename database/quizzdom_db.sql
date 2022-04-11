-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 11 avr. 2022 à 09:00
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
) ENGINE=MyISAM AUTO_INCREMENT=423 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
(214, '120', 0, 0, 52),
(215, '5 minutes', 0, 0, 53),
(216, '10 minutes', 0, 1, 53),
(217, '20 minutes', 0, 0, 53),
(218, '60 minutes', 0, 0, 53),
(219, '4096', 0, 0, 54),
(220, '2401', 0, 0, 54),
(221, '1296', 0, 1, 54),
(222, '968', 0, 0, 54),
(223, '10,000,000', 0, 0, 55),
(224, '1,000', 0, 0, 55),
(225, '100,000', 0, 0, 55),
(226, '1,000,000', 0, 1, 55),
(227, '360', 0, 1, 56),
(228, '180', 0, 0, 56),
(229, '1080', 0, 0, 56),
(230, '540', 0, 0, 56),
(231, '59', 0, 0, 57),
(232, '69', 0, 1, 57),
(233, '79', 0, 0, 57),
(234, '89', 0, 0, 57),
(235, 'Zero', 0, 0, 58),
(236, 'One', 0, 0, 58),
(237, 'Infinity, or undefined', 0, 1, 58),
(238, 'One tenth', 0, 0, 58),
(314, 'The Sims', 0, 0, 73),
(313, 'Bejeweled', 0, 0, 73),
(312, 'Minecraft', 0, 0, 73),
(311, 'Tetris', 0, 1, 73),
(310, 'Nintendo', 0, 1, 72),
(309, 'Bethesda', 0, 0, 72),
(308, 'Fromsoftware', 0, 0, 72),
(307, 'Blizzard', 0, 0, 72),
(306, 'Mega man', 0, 0, 71),
(305, 'Metroid', 0, 0, 71),
(304, 'Halo CE', 0, 1, 71),
(303, 'Fortnite', 0, 0, 71),
(302, 'Halo', 0, 0, 70),
(301, 'Call of Duty', 0, 1, 70),
(300, 'Battlefield ', 0, 0, 70),
(299, 'Skyrim', 0, 0, 70),
(315, 'Zelda', 0, 0, 74),
(316, 'Gannon', 0, 0, 74),
(317, 'Link', 0, 1, 74),
(318, 'Midna', 0, 0, 74),
(319, 'Mega Man', 0, 0, 75),
(320, 'Snake', 0, 0, 75),
(321, 'Dark Souls', 0, 1, 75),
(322, 'Genshin Impact', 0, 0, 75),
(323, 'Mario', 0, 1, 76),
(324, 'Hitman', 0, 0, 76),
(325, 'Sonic', 0, 0, 76),
(326, 'Spider-Man', 0, 0, 76),
(327, 'The Sims', 0, 0, 77),
(328, 'FIFA', 0, 1, 77),
(329, 'MADDEN NFL', 0, 0, 77),
(330, 'Battlefield', 0, 0, 77),
(331, 'Starcraft', 0, 0, 78),
(332, 'Overwatch', 0, 0, 78),
(333, 'Diablo', 0, 0, 78),
(334, 'World of Warcraft', 0, 1, 78),
(335, 'Fortnite', 0, 0, 79),
(336, 'Doki Doki Literature Club', 0, 0, 79),
(337, 'Call of Duty Warzone', 0, 0, 79),
(338, 'PUBG', 0, 1, 79),
(339, 'Chlorine', 0, 0, 84),
(340, 'Lithium', 0, 1, 84),
(341, 'Sulphur', 0, 0, 84),
(342, 'Xenon', 0, 0, 84),
(343, 'Reduce impurities', 0, 0, 85),
(344, 'Add impurities', 0, 1, 85),
(345, 'Increase pressure', 0, 0, 85),
(346, 'Reduce pressure', 0, 0, 85),
(347, '14 billion years', 0, 1, 86),
(348, '185 million years', 0, 0, 86),
(349, '25 billion years', 0, 0, 86),
(350, '59 million years', 0, 0, 86),
(351, 'Nerve', 0, 0, 87),
(352, 'Vein', 0, 0, 87),
(353, 'Muscle', 0, 1, 87),
(354, 'Bone', 0, 0, 87),
(355, 'Mercury', 0, 0, 88),
(356, 'Lead', 0, 0, 88),
(357, 'Helium', 0, 0, 88),
(358, 'Water', 0, 1, 88),
(359, 'A quarter', 0, 1, 89),
(360, 'A third', 0, 0, 89),
(361, 'A half', 0, 0, 89),
(362, 'Two thirds', 0, 0, 89),
(363, 'Stellacula', 0, 0, 90),
(364, 'Orbitry', 0, 0, 90),
(365, 'Bangor', 0, 0, 90),
(366, 'Astrometry', 0, 1, 90),
(367, 'Al', 0, 0, 91),
(368, 'Ca', 0, 0, 91),
(369, 'C', 0, 1, 91),
(370, 'Na', 0, 0, 91),
(371, 'The Mpemba effect', 0, 1, 92),
(372, 'The China syndrome', 0, 0, 92),
(373, 'The Odessa file', 0, 0, 92),
(374, 'Antiperistasis', 0, 0, 92),
(375, 'The Last of Us ', 0, 0, 93),
(376, 'HALO', 0, 0, 93),
(377, 'Final Fantasy', 0, 1, 93),
(378, 'The Last Stand', 0, 0, 93),
(379, '8', 0, 0, 94),
(380, '6', 0, 0, 94),
(381, '7', 0, 1, 94),
(382, '5', 0, 0, 94),
(383, 'XBOX', 0, 0, 95),
(384, 'Nintendo Switch', 0, 0, 95),
(385, 'PS2', 0, 1, 95),
(386, 'Nintendo DS', 0, 0, 95),
(387, 'Command and Conquer: Conflit du Tiberium', 0, 1, 96),
(388, 'Red Alert ', 0, 0, 96),
(389, 'Shogun: Total War', 0, 0, 96),
(390, 'Warcraft', 0, 0, 96),
(391, 'Assassin\'s Creed Black Flag', 0, 0, 97),
(392, 'Assassin\'s Creed 2', 0, 0, 97),
(393, 'Assassin\'s Creed Unity', 0, 0, 97),
(394, 'Assassin\'s Creed Valhalla', 0, 1, 97),
(395, 'Half-life ', 0, 1, 98),
(396, 'Destiny', 0, 0, 98),
(397, 'Dota 2', 0, 0, 98),
(398, 'Battlefied', 0, 0, 98),
(399, 'Left 4 Dead', 0, 0, 99),
(400, 'World War Z', 0, 0, 99),
(401, 'The Walking Dead ', 0, 1, 99),
(402, 'Back 4 blood', 0, 0, 99),
(403, 'GTA V', 0, 0, 100),
(404, 'Fallout 4 ', 0, 0, 100),
(405, 'Watch Dogs', 0, 0, 100),
(406, 'Minecraft', 0, 1, 100),
(407, 'New York', 0, 0, 101),
(408, 'Los Angeles', 0, 0, 101),
(409, 'Washington', 0, 1, 101),
(410, 'Chicago', 0, 0, 101),
(411, 'Ottawa', 0, 1, 102),
(412, 'Vancouver', 0, 0, 102),
(413, 'Montreal', 0, 0, 102),
(414, 'Toronto', 0, 0, 102),
(415, 'Sydney', 0, 0, 103),
(416, 'Melbourne', 0, 0, 103),
(417, 'Canberra', 0, 1, 103),
(418, 'Perth', 0, 0, 103),
(419, 'Pretoria', 0, 0, 104),
(420, 'Cape Town', 0, 0, 104),
(421, 'Bloemfontein', 0, 0, 104),
(422, 'All three above', 0, 1, 104);

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
) ENGINE=MyISAM AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
(52, 'What number is the factorial of 4?', '/assets/img/img-question/quiz-general-16.jpg', 0, 7),
(53, 'How long does it take to travel 10 km at 60 kilometres per hour?', '/assets/img/img-question/quiz-maths-1.jpg', 0, 8),
(54, 'What is the next number in the series 1, 16, 81, 256, 625?', '/assets/img/img-question/quiz-maths-2.jpg', 0, 8),
(55, 'What is the cube of 100?', '/assets/img/img-question/quiz-maths-3.jpg', 0, 8),
(56, 'The internal angles of a rectangle add up to how many degrees?', '/assets/img/img-question/quiz-maths-4.jpg', 0, 8),
(57, 'Which of these is not a prime number?', '/assets/img/img-question/quiz-maths-5.jpg', 0, 8),
(58, 'What is the mathematical result of dividing any real number other than zero, by zero?', '/assets/img/img-question/quiz-maths-6.jpg', 0, 8),
(70, 'Let\'s start easy! Which game is the game series company Activision the most known for?', '/assets/img/img-question/Activision-Two military soldiers.jpg', 0, 11),
(71, 'Which of those games first featured rechargeable shields?', '/assets/img/img-question/Masterchief-John-117.jpg', 0, 11),
(72, 'Who owns the game IP of Pokemon?', '/assets/img/img-question/Pokeballs.jpg', 0, 11),
(73, 'Which game is about aligning falling blocks to form rows?', '/assets/img/img-question/VarietyBlocks.jpg', 0, 11),
(74, 'Who is the main protagonist of \"The legend of Zelda\" games?', '/assets/img/img-question/Legends-of-zelda.jpg', 0, 11),
(75, 'Which of these series is renowned for being infamously difficult by game journalists?', '/assets/img/img-question/Fromsoftware.jpg', 0, 11),
(76, 'Who has the most games named after him?', '/assets/img/img-question/Tetris.jpg', 0, 11),
(77, 'Which series is EA most profitable game series?', '/assets/img/img-question/EAlogo.jpg', 0, 11),
(78, 'Which game was Blizzard known for ? ', '/assets/img/img-question/Gameclasses.jpg', 0, 11),
(79, 'Which game popularized the battle royal Genre?', '/assets/img/img-question/WinnerWiner.jpg', 0, 11),
(84, 'Which of these is a metal?', '/assets/img/img-question/quiz-science-1.jpg', 0, 13),
(85, 'What can be done to water to make it freeze at a lower temperature than normal?', '/assets/img/img-question/quiz-science-2.jpg', 0, 13),
(86, 'What is the approximate calculated age of the Universe?', '/assets/img/img-question/quiz-science-3.jpg', 0, 13),
(87, 'In the human body, adductors and abductors are types of what?', '/assets/img/img-question/quiz-science-4.jpg', 0, 13),
(88, 'What becomes less dense as it solidifies?', '/assets/img/img-question/quiz-science-5.jpg', 0, 13),
(89, 'What proportion of the 206 bones in the human body is contained in the hands and feet?', '/assets/img/img-question/quiz-science-6.jpg', 0, 13),
(90, 'What is the name for the branch of astronomy that relates to precise measurements and explanations of the positions and movements of celestial bodies?', '/assets/img/img-question/quiz-science-7.jpg', 0, 13),
(91, 'What is the next in the series H, He, Li, Be, B ...?', '/assets/img/img-question/quiz-science-8.jpg', 0, 13),
(92, 'The fact that hot water freezes more quickly than cold water is known as what?', '/assets/img/img-question/quiz-science-9.jpg', 0, 13),
(93, 'Which game was meant to be the last game of  SQUARE?', '/assets/img/img-question/Cataclysm.jpg', 0, 14),
(94, 'How many times was The Elder Scrolls: Skyrim released (as of 2022)? ', '/assets/img/img-question/skyrim.jpg', 0, 14),
(95, 'Which game console is the best selling game console of all time?', '/assets/img/img-question/nintendo-switch-console-test__w1200.jpg', 0, 14),
(96, 'Which of those games came first ?', '/assets/img/img-question/C&C-Red-Alert.jpg', 0, 14),
(97, 'Which Assassin\'s Creed game is the most sold? (2022)', '/assets/img/img-question/Ubisoft.jpg', 0, 14),
(98, 'Which game has the most awaited sequel release that won\'t happen?', '/assets/img/img-question/Gameover.jpg', 0, 14),
(99, 'Which of these games is not of the same genre', '/assets/img/img-question/zombie.jpg', 0, 14),
(100, 'Which is the most popular open world game?', '/assets/img/img-question/OpenWorld.jpg', 0, 14),
(101, 'What is the capital of the USA?', '/assets/img/img-question/question-7-usa.jpg', 0, 1),
(102, 'What is the capital of Canada?', '/assets/img/img-question/question-8-canada.jpg', 0, 1),
(103, 'What is the capital of Australia?', '/assets/img/img-question/question-9-aus.jpg', 0, 1),
(104, 'What is the capital of South Africa?', '/assets/img/img-question/question-10-sa.jpg', 0, 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo`, `Score`) VALUES
(1, 'Capitals', 'Sure you know all the countries\' capitals of the world? Challenge yourself!', '/assets/img/img-quiz/quiz-capitals.jpg', 0),
(2, 'Movies', 'Love movies? Me too! Let\'s see if you pay attention while watching!', '/assets/img/img-quiz/quiz-movies.jpg', 0),
(3, 'Personalities', 'World\'s top influencers and personalities: do you know them?', '/assets/img/img-quiz/quiz-personality.jpg', 0),
(4, 'Anime', 'Enjoy Japanese anime movies? Let\'s find out if you know the well!', '/assets/img/img-quiz/quiz-anime.jpg', 0),
(7, 'General knowledge', 'Test your knowledge on physics, maths, politics, geography, etc...', '/assets/img/img-quiz/quiz-general.jpg', 0),
(8, 'Maths', 'Place where you\'ll finally need to remember Sin and Cos... Or not.', '/assets/img/img-quiz/quiz-maths.jpg', 0),
(11, 'Video Game Trivia pt.1', 'Try and complete this quiz of video game trivia that even the most casual gamers can enjoy!', '/assets/img/img-quiz/Gaming-desktop.jpg', 0),
(13, 'Science', 'Chemistry, biology, physics and everything. Test your knowledge!', '/assets/img/img-quiz/quiz-science.jpg', 0),
(14, 'Video Game Trivia pt.2', 'The difficulty is turned up with now more cult knowledge of some games. Will you be able to answer them all?', '/assets/img/img-quiz/GamingMedium.jpg', 0);

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
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
(81, 14, 3.38, 7, 2),
(82, 6, 2.17, 8, 2),
(83, 4, 2.33, 1, 3),
(84, 10, 3.2, 11, 3),
(85, 8, 5.78, 13, 2),
(86, 6, 6.1, 11, 2),
(87, 7, 3.38, 14, 0),
(88, 4, 4.75, 14, 0),
(89, 9, 4.11, 13, 2),
(90, 10, 1.8, 1, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
