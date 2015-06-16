-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июн 16 2015 г., 14:07
-- Версия сервера: 5.6.21
-- Версия PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `wilde_gard`
--

-- --------------------------------------------------------

--
-- Структура таблицы `assignments`
--

CREATE TABLE IF NOT EXISTS `assignments` (
`ID_Assignments` smallint(6) NOT NULL,
  `Assignments` text NOT NULL,
  `Level` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `assignments_users`
--

CREATE TABLE IF NOT EXISTS `assignments_users` (
  `ID_Users` smallint(6) NOT NULL,
  `ID_Assignments` smallint(6) NOT NULL,
  `Date_Receipt` datetime NOT NULL,
  `Performance` enum('0','1') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `characteristics`
--

CREATE TABLE IF NOT EXISTS `characteristics` (
`ID_Characteristics` smallint(6) NOT NULL,
  `Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `characteristics_monster`
--

CREATE TABLE IF NOT EXISTS `characteristics_monster` (
  `ID_Monster` smallint(6) NOT NULL,
  `ID_Characteristics` smallint(6) NOT NULL,
  `Characteristics` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `characteristics_resources`
--

CREATE TABLE IF NOT EXISTS `characteristics_resources` (
  `ID_Resources` smallint(6) NOT NULL,
  `ID_Characteristics` smallint(6) NOT NULL,
  `Characteristics` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `killed_monster`
--

CREATE TABLE IF NOT EXISTS `killed_monster` (
  `ID_Monster` smallint(6) NOT NULL,
  `ID_Users` smallint(6) NOT NULL,
  `Number` smallint(6) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `location`
--

CREATE TABLE IF NOT EXISTS `location` (
`ID_Location` smallint(6) NOT NULL,
  `Description` varchar(150) DEFAULT NULL,
  `Image` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `location_users`
--

CREATE TABLE IF NOT EXISTS `location_users` (
  `ID_Location` smallint(6) NOT NULL,
  `ID_Users` smallint(6) NOT NULL,
  `Level` smallint(6) NOT NULL DEFAULT '1',
  `Profit` decimal(15,2) NOT NULL DEFAULT '1.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `monster`
--

CREATE TABLE IF NOT EXISTS `monster` (
`ID_Monster` smallint(6) NOT NULL,
  `ID_Location` smallint(6) NOT NULL,
  `Level` smallint(6) NOT NULL DEFAULT '1',
  `Description` varchar(150) DEFAULT NULL,
  `Name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `resources`
--

CREATE TABLE IF NOT EXISTS `resources` (
`ID_Resources` smallint(6) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Description` varchar(150) DEFAULT NULL,
  `Level` smallint(6) NOT NULL DEFAULT '1',
  `Image` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `resources_users`
--

CREATE TABLE IF NOT EXISTS `resources_users` (
  `ID_Users` smallint(6) NOT NULL,
  `ID_Resources` smallint(6) NOT NULL,
  `Amount` smallint(6) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `reward_assignments`
--

CREATE TABLE IF NOT EXISTS `reward_assignments` (
  `ID_Assignments` smallint(6) NOT NULL,
  `ID_Resources` smallint(6) NOT NULL,
  `Number` smallint(6) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `reward_monster`
--

CREATE TABLE IF NOT EXISTS `reward_monster` (
  `ID_Monster` smallint(6) NOT NULL,
  `ID_Resources` smallint(6) NOT NULL,
  `Number` smallint(6) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`ID_Users` smallint(6) NOT NULL,
  `Login` varchar(16) NOT NULL,
  `Password` varchar(16) NOT NULL,
  `Nikname` varchar(20) NOT NULL DEFAULT 'Player',
  `E_Mail` varchar(30) DEFAULT NULL,
  `Name` varchar(20) NOT NULL DEFAULT 'Player',
  `Family` varchar(30) NOT NULL DEFAULT '#1',
  `Date_of_Birth` date DEFAULT NULL,
  `SecretQ` varchar(100) NOT NULL,
  `Answer` varchar(50) NOT NULL,
  `Date_of_Registration` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`ID_Users`, `Login`, `Password`, `Nikname`, `E_Mail`, `Name`, `Family`, `Date_of_Birth`, `SecretQ`, `Answer`, `Date_of_Registration`) VALUES
(2, 'Admin', '7fa8282ad93047a4', 'Admin', 'olegmixa@mail.ru', 'Олег', 'Михайлов', '1996-09-24', 'Имя любимой девушки?', 'Марина', '2015-01-28'),
(3, 'Oleg', '7fa8282ad93047a4', 'аакауаку', 'vasya@pupkin.com', 'Сергей', 'STEAM', '1996-09-24', 'Сколько', '12', '2015-01-28');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `assignments`
--
ALTER TABLE `assignments`
 ADD PRIMARY KEY (`ID_Assignments`);

--
-- Индексы таблицы `assignments_users`
--
ALTER TABLE `assignments_users`
 ADD KEY `ID_Users` (`ID_Users`), ADD KEY `ID_Assignments` (`ID_Assignments`);

--
-- Индексы таблицы `characteristics`
--
ALTER TABLE `characteristics`
 ADD PRIMARY KEY (`ID_Characteristics`);

--
-- Индексы таблицы `characteristics_monster`
--
ALTER TABLE `characteristics_monster`
 ADD KEY `ID_Monster` (`ID_Monster`), ADD KEY `ID_Characteristics` (`ID_Characteristics`);

--
-- Индексы таблицы `characteristics_resources`
--
ALTER TABLE `characteristics_resources`
 ADD KEY `ID_Resources` (`ID_Resources`), ADD KEY `ID_Characteristics` (`ID_Characteristics`);

--
-- Индексы таблицы `killed_monster`
--
ALTER TABLE `killed_monster`
 ADD KEY `ID_Monster` (`ID_Monster`), ADD KEY `ID_Users` (`ID_Users`);

--
-- Индексы таблицы `location`
--
ALTER TABLE `location`
 ADD PRIMARY KEY (`ID_Location`);

--
-- Индексы таблицы `location_users`
--
ALTER TABLE `location_users`
 ADD KEY `ID_Location` (`ID_Location`), ADD KEY `ID_Users` (`ID_Users`);

--
-- Индексы таблицы `monster`
--
ALTER TABLE `monster`
 ADD PRIMARY KEY (`ID_Monster`), ADD KEY `ID_Location` (`ID_Location`);

--
-- Индексы таблицы `resources`
--
ALTER TABLE `resources`
 ADD PRIMARY KEY (`ID_Resources`);

--
-- Индексы таблицы `resources_users`
--
ALTER TABLE `resources_users`
 ADD KEY `ID_Users` (`ID_Users`), ADD KEY `ID_Resources` (`ID_Resources`);

--
-- Индексы таблицы `reward_assignments`
--
ALTER TABLE `reward_assignments`
 ADD KEY `ID_Assignments` (`ID_Assignments`), ADD KEY `ID_Resources` (`ID_Resources`);

--
-- Индексы таблицы `reward_monster`
--
ALTER TABLE `reward_monster`
 ADD KEY `ID_Monster` (`ID_Monster`), ADD KEY `ID_Resources` (`ID_Resources`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`ID_Users`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `assignments`
--
ALTER TABLE `assignments`
MODIFY `ID_Assignments` smallint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `characteristics`
--
ALTER TABLE `characteristics`
MODIFY `ID_Characteristics` smallint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `location`
--
ALTER TABLE `location`
MODIFY `ID_Location` smallint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `monster`
--
ALTER TABLE `monster`
MODIFY `ID_Monster` smallint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `resources`
--
ALTER TABLE `resources`
MODIFY `ID_Resources` smallint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
MODIFY `ID_Users` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `assignments_users`
--
ALTER TABLE `assignments_users`
ADD CONSTRAINT `assignments_users_ibfk_1` FOREIGN KEY (`ID_Users`) REFERENCES `users` (`ID_Users`),
ADD CONSTRAINT `assignments_users_ibfk_2` FOREIGN KEY (`ID_Assignments`) REFERENCES `assignments` (`ID_Assignments`);

--
-- Ограничения внешнего ключа таблицы `characteristics_monster`
--
ALTER TABLE `characteristics_monster`
ADD CONSTRAINT `characteristics_monster_ibfk_1` FOREIGN KEY (`ID_Monster`) REFERENCES `monster` (`ID_Monster`),
ADD CONSTRAINT `characteristics_monster_ibfk_2` FOREIGN KEY (`ID_Characteristics`) REFERENCES `characteristics` (`ID_Characteristics`);

--
-- Ограничения внешнего ключа таблицы `characteristics_resources`
--
ALTER TABLE `characteristics_resources`
ADD CONSTRAINT `characteristics_resources_ibfk_1` FOREIGN KEY (`ID_Resources`) REFERENCES `resources` (`ID_Resources`),
ADD CONSTRAINT `characteristics_resources_ibfk_2` FOREIGN KEY (`ID_Characteristics`) REFERENCES `characteristics` (`ID_Characteristics`);

--
-- Ограничения внешнего ключа таблицы `killed_monster`
--
ALTER TABLE `killed_monster`
ADD CONSTRAINT `killed_monster_ibfk_1` FOREIGN KEY (`ID_Monster`) REFERENCES `monster` (`ID_Monster`),
ADD CONSTRAINT `killed_monster_ibfk_2` FOREIGN KEY (`ID_Users`) REFERENCES `users` (`ID_Users`);

--
-- Ограничения внешнего ключа таблицы `location_users`
--
ALTER TABLE `location_users`
ADD CONSTRAINT `location_users_ibfk_1` FOREIGN KEY (`ID_Location`) REFERENCES `location` (`ID_Location`),
ADD CONSTRAINT `location_users_ibfk_2` FOREIGN KEY (`ID_Users`) REFERENCES `users` (`ID_Users`);

--
-- Ограничения внешнего ключа таблицы `monster`
--
ALTER TABLE `monster`
ADD CONSTRAINT `monster_ibfk_1` FOREIGN KEY (`ID_Location`) REFERENCES `location` (`ID_Location`);

--
-- Ограничения внешнего ключа таблицы `resources_users`
--
ALTER TABLE `resources_users`
ADD CONSTRAINT `resources_users_ibfk_1` FOREIGN KEY (`ID_Users`) REFERENCES `users` (`ID_Users`),
ADD CONSTRAINT `resources_users_ibfk_2` FOREIGN KEY (`ID_Resources`) REFERENCES `resources` (`ID_Resources`);

--
-- Ограничения внешнего ключа таблицы `reward_assignments`
--
ALTER TABLE `reward_assignments`
ADD CONSTRAINT `reward_assignments_ibfk_1` FOREIGN KEY (`ID_Assignments`) REFERENCES `assignments` (`ID_Assignments`),
ADD CONSTRAINT `reward_assignments_ibfk_2` FOREIGN KEY (`ID_Resources`) REFERENCES `resources` (`ID_Resources`);

--
-- Ограничения внешнего ключа таблицы `reward_monster`
--
ALTER TABLE `reward_monster`
ADD CONSTRAINT `reward_monster_ibfk_1` FOREIGN KEY (`ID_Monster`) REFERENCES `monster` (`ID_Monster`),
ADD CONSTRAINT `reward_monster_ibfk_2` FOREIGN KEY (`ID_Resources`) REFERENCES `resources` (`ID_Resources`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
