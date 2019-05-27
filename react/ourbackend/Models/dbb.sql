-- MySQL Workbench Synchronization
-- Generated: 2019-05-22 16:20
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Utilisateur

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `cinema` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;

CREATE TABLE IF NOT EXISTS `cinema`.`all_performance_seats` (
  `all_performance_seats_id` INT(11) NOT NULL AUTO_INCREMENT,
  `all_performance_seats_date` DATETIME NULL DEFAULT NULL,
  `cinema_id` INT(11) NULL DEFAULT NULL,
  `room_id` INT(11) NULL DEFAULT NULL,
  `booking_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`all_performance_seats_id`),
  INDEX `cinema_id2_idx` (`cinema_id` ASC) VISIBLE,
  INDEX `room_id2_idx` (`room_id` ASC) VISIBLE,
  INDEX `booking_id_idx` (`booking_id` ASC) VISIBLE,
  CONSTRAINT `booking_id`
    FOREIGN KEY (`booking_id`)
    REFERENCES `cinema`.`bookings` (`booking_id`),
  CONSTRAINT `cinema_id2`
    FOREIGN KEY (`cinema_id`)
    REFERENCES `cinema`.`cinemas` (`cinema_id`),
  CONSTRAINT `room_id2`
    FOREIGN KEY (`room_id`)
    REFERENCES `cinema`.`room` (`room_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`booked_performance_seats` (
  `booked_performance_id` INT(11) NOT NULL AUTO_INCREMENT,
  `booked_performance_number` INT(11) NULL DEFAULT NULL,
  `cinema_id` INT(11) NULL DEFAULT NULL,
  `room_id` INT(11) NULL DEFAULT NULL,
  `booking_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`booked_performance_id`),
  INDEX `cinema_id_idx` (`cinema_id` ASC) VISIBLE,
  INDEX `room_id3_idx` (`room_id` ASC) VISIBLE,
  INDEX `booking_id3_idx` (`booking_id` ASC) VISIBLE,
  CONSTRAINT `booking_id3`
    FOREIGN KEY (`booking_id`)
    REFERENCES `cinema`.`bookings` (`booking_id`),
  CONSTRAINT `cinema_id4`
    FOREIGN KEY (`cinema_id`)
    REFERENCES `cinema`.`cinemas` (`cinema_id`),
  CONSTRAINT `room_id3`
    FOREIGN KEY (`room_id`)
    REFERENCES `cinema`.`room` (`room_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`bookings` (
  `booking_id` INT(11) NOT NULL AUTO_INCREMENT,
  `booking_for_date` VARCHAR(45) NULL DEFAULT NULL,
  `booking_made_date` VARCHAR(45) NULL DEFAULT NULL,
  `booking_seat_count` VARCHAR(45) NULL DEFAULT NULL,
  `customer_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `customer_id2_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `customer_id2`
    FOREIGN KEY (`customer_id`)
    REFERENCES `cinema`.`customers` (`customer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`cinemas` (
  `cinema_id` INT(11) NOT NULL AUTO_INCREMENT,
  `cinema_name` VARCHAR(45) NULL DEFAULT NULL,
  `cinema_manager` VARCHAR(45) NULL DEFAULT NULL,
  `cinema_adress` VARCHAR(45) NULL DEFAULT NULL,
  `cinema_phone` VARCHAR(45) NULL DEFAULT NULL,
  `cinema_seat_capacity` VARCHAR(45) NULL DEFAULT NULL,
  `customers_other_details` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`cinema_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`customers` (
  `customer_id` INT(11) NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(45) NULL DEFAULT NULL,
  `customer_phone_number` VARCHAR(45) NULL DEFAULT NULL,
  `customer_card_details` VARCHAR(45) NULL DEFAULT NULL,
  `customer_other_details` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`movie_category` (
  `movie_category_id` INT(11) NOT NULL AUTO_INCREMENT,
  `movie_category_type` VARCHAR(45) NULL DEFAULT NULL,
  `movie_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`movie_category_id`),
  INDEX `movie_id5_idx` (`movie_id` ASC) VISIBLE,
  CONSTRAINT `movie_id5`
    FOREIGN KEY (`movie_id`)
    REFERENCES `cinema`.`movies` (`movie_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`movie_showing` (
  `movie_showing_id` INT(11) NOT NULL AUTO_INCREMENT,
  `showing_from_date` DATETIME NULL DEFAULT NULL,
  `showing_to_date` DATETIME NULL DEFAULT NULL,
  `room_id` INT(11) NULL DEFAULT NULL,
  `movie_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`movie_showing_id`),
  INDEX `room_id1_idx` (`room_id` ASC) VISIBLE,
  INDEX `movie_id3_idx` (`movie_id` ASC) VISIBLE,
  CONSTRAINT `movie_id3`
    FOREIGN KEY (`movie_id`)
    REFERENCES `cinema`.`movies` (`movie_id`),
  CONSTRAINT `room_id1`
    FOREIGN KEY (`room_id`)
    REFERENCES `cinema`.`room` (`room_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`movies` (
  `movie_id` INT(11) NOT NULL AUTO_INCREMENT,
  `movie_name` VARCHAR(45) NULL DEFAULT NULL,
  `movie_synopsis` VARCHAR(600) NULL DEFAULT NULL,
  `movie_trailer` VARCHAR(45) NULL DEFAULT NULL,
  `movie_actor` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`movie_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`movies_comments` (
  `movie_comment_id` INT(11) NOT NULL AUTO_INCREMENT,
  `movie_comment_description` VARCHAR(300) NULL DEFAULT NULL,
  `movie_id` INT(11) NULL DEFAULT NULL,
  `customer_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`movie_comment_id`),
  INDEX `movie_id_idx` (`movie_id` ASC) VISIBLE,
  INDEX `customer_id1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `cinema`.`customers` (`customer_id`),
  CONSTRAINT `movie_id1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `cinema`.`movies` (`movie_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`performances_numbers` (
  `performances_number_id` INT(11) NOT NULL,
  `performances_start_time` VARCHAR(45) NULL DEFAULT NULL,
  `performances_end_time` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`performances_number_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`ref_movie_rating` (
  `movie_rating` INT(11) NOT NULL AUTO_INCREMENT,
  `movie_rating_description` VARCHAR(300) NULL DEFAULT NULL,
  `movie_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`movie_rating`),
  INDEX `movie_id_idx` (`movie_id` ASC) VISIBLE,
  CONSTRAINT `movie_id`
    FOREIGN KEY (`movie_id`)
    REFERENCES `cinema`.`movies` (`movie_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cinema`.`room` (
  `room_id` INT(11) NOT NULL AUTO_INCREMENT,
  `room_name` VARCHAR(45) NULL DEFAULT NULL,
  `room_seat_capacity` INT(11) NULL DEFAULT NULL,
  `cinema_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`room_id`),
  INDEX `cinema_id_idx` (`cinema_id` ASC) VISIBLE,
  CONSTRAINT `cinema_id`
    FOREIGN KEY (`cinema_id`)
    REFERENCES `cinema`.`cinemas` (`cinema_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
