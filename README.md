# Employee Tracker

![None](https://img.shields.io/badge/license-None-blue)
  
## Table of Contents
1. [Description](#description)
2. [Skills Used](#skills-used)
3. [Readme Visual](#visuals)
4. [Installation](#installation)
5. [Repository and Youtube Video](#links-to-repository-and-deployed-video)
  
## Description

In week 12 of the UWA coding bootcamp we have been tasked with building a command line application that allows non-developers to easily view and interact with information stored in databases.

In this instance, as a business owner who isn't a developer, it is very important to be able to view and manage the departments, roles, and employees within the company so planning and organisation within the business becomes an easier part of the role.

## Skills Used

After runnning npm init, installing all required packages such as Inquirer and MySQL2, and setting up a .gitignore, it is time to identify how to lay out the folders/files within our app.

Using MySQL workbench allows us to be able to create the code easily that creates our 3 tables, and linking the foreign keys between tables. We can then take that code generated via the workbench and past that into our schema.sql file. Now that the tables are there, we can write a seeds.sql file to populate the tables for testing purposes.

Next is using inquirer via an index.js file to provide the user with the list of options to choose from, view all departments, add a department, etc. Using the when keyword allows us to ask relevent questions that correspond to choices like add and employee, update an employees role, etc. We create a switch/case statement to handle all choices and pass in the functions that are now to be written for each individual case.

As we are updating the MySQL database, we create a connection.js file to handle the connections and export the function so you don't repeat yourself over and over again writing each function. As we don't want to share our password with everyone, a .env file is created where we can hide our sensitive information. The functions are split up into 3 different files, to keep the application neat and easy to follow, department.js, employee.js, and roles.js.

Given everything is now talking to each other how it should, we should have a working command line application.

# Installation

- Clone the repository
- Open terminal at root level, run 'npm i'
- Create a .env file on the root level and enter;
    - DB_HOST=localhost
    - DB_USER='your mysql username'
    - DB_PASSWORD='your mysql password'
- Right click on db file and open integrated terminal or run 'cd db' on the already open terminal
- Now that terminal is on db, run 'mysql -u root -p', if your username is something other than root, substitute it there, enter password when prompted
- You should now be logged into MySQL, run 'source schema.sql'
- Now that the tables are created, run 'source seeds.sql'
- Type in 'exit' to log out of MySQL, then type in 'cd ..' to return the terminal to root level of app
- App should now be up and running, run 'node index.js' and choose what options you would like

## Visuals

Inquirer and Switch Case
![Code Sample](/assets/images/code-sample.png)

Connection and List
![List](/assets/images/list.png)

Tables
![Tables](/assets/images/tables.png)

## Links to Repository and Deployed Video

- Repository - [Clarky's Repo](https://github.com/Clarky117/Employee-Tracker)
- Live Video - [Employee Tracker](https://www.youtube.com/watch?v=U5KXLzqG16o&t=17s)