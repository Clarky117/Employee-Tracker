-- drop database for developement and create from scratch
DROP DATABASE IF EXISTS `employee_db`;
CREATE SCHEMA `employee_db`;

-- select what db to use
USE `employee_db`;

-- create table department
CREATE TABLE `departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

-- create table roles
  CREATE TABLE `roles` (
  `id` INT UNSIGNED NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`));

-- first table reference foreign key
ALTER TABLE `roles` 
ADD INDEX `fk_roles_1_idx` (`department_id` ASC) VISIBLE;
;
ALTER TABLE `roles` 
ADD CONSTRAINT `fk_roles_1`
  FOREIGN KEY (`department_id`)
  REFERENCES `departments` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;

-- create table employees
CREATE TABLE `employees` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  `manager_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));

-- second table reference foreign key
  ALTER TABLE `employees` 
ADD INDEX `fk_employees_1_idx` (`role_id` ASC) VISIBLE,
ADD INDEX `fk_employees_2_idx` (`manager_id` ASC) VISIBLE;
;
ALTER TABLE `employees` 
ADD CONSTRAINT `fk_employees_1`
  FOREIGN KEY (`role_id`)
  REFERENCES `roles` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_employees_2`
  FOREIGN KEY (`manager_id`)
  REFERENCES `employees` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;






