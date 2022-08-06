-- create seed file
USE `employee_db`;

INSERT INTO departments (name)
VALUES ('Owner'),
       ('Management'),
       ('Lifestyles'),
       ('In The Home'),
       ('Builders');

INSERT INTO roles (title, salary, department_id)
VALUES ('CEO', '160000', '1'),
       ('Lifestyles Manager', '80000', '2'),
       ('In The Home Manager', '80000', '2'),
       ('Builders Manager', '80000', '2'),
       ('Lifestyles Worker', '50000', '3'),
       ('In The Home Worker', '50000', '4'),
       ('Builders Worker', '55000', '5');

INSERT INTO employees (first_name, last_name, role_id)
VALUES ('Mister', 'Executice', '1');   

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Blogs', '2', '1'),
       ('Jane', 'Doe', '3', '1'),
       ('Harry', 'Potter', '4', '1'),
       ('Angus', 'Young', '5', '2'),
       ('Shamus', 'Black', '5', '2'),
       ('Andrew', 'Nelson', '6', '3'),
       ('James', 'Iterus', '6', '3'),
       ('Michael', 'Rogers', '7', '4'),
       ('Harry', 'Nunes', '7', '4');