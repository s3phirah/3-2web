CREATE TABLE `topic` (
  `id` int NULL,
  `title` varchar(100) COLLATE utf8mb3_bin NOT NULL,
  `description` text COLLATE utf8mb3_bin NOT NULL,
  `author` varchar(30) COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='test';
