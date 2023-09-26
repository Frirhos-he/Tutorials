-- create an empty database.
SET storage_engine=InnoDB;
SET FOREIGN_KEY_CHECKS=1;
CREATE DATABASE IF NOT EXISTS prascorsano;
USE prascorsano;

-- drop tables if they already exist
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS timesheet;


-- create tables

CREATE TABLE `role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `role` (`id`, `role`)
VALUES
	(1,'Employee'),
	(2,'Supervisor');


CREATE TABLE account (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` int(11) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_account_role` (`role_id`),
  CONSTRAINT `fk_account_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `account` (`id`, `first_name`, `last_name`, `email`, `password`, `role_id`, `status`)
VALUES
	(1,'James','Chocolatey','employee@test.com','*********',1,'active'),
	(2,'Boss','Truman','supervisor@test.com','*********',2,'active'),
	(3,'Joe','Thyme','employee2@test.com','*********',1,'active');


CREATE TABLE `timesheet` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) unsigned DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `date_submitted` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_hour_account` (`employee_id`),
  CONSTRAINT `fk_hour_account` FOREIGN KEY (`employee_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `timesheet` (`id`, `employee_id`, `date`, `time_from`, `time_to`, `comments`, `date_submitted`)
VALUES
	(1,1,'2018-01-10','09:00:00','16:00:00','','2018-01-13'),
	(2,1,'2018-01-11','01:46:00','05:38:00','','2018-01-11'),
	(3,1,'2018-01-12','12:30:00','22:12:00','','2018-01-13'),
	(4,3,'2018-01-10','12:00:00','18:22:00','','2018-01-11'),
	(5,3,'2018-01-11','14:12:00','16:23:00','','2018-01-12'),
	(6,3,'2018-01-12','08:00:00','17:00:00','','2018-01-14');




