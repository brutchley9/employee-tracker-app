--removes database and all entries if it already exists, then creates it again
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

--all necessary tables below

CREATE TABLE department (
    --creates primary key for 'department' to be referenced in 'role'
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    --creates primary key for 'role' to be referenced in 'employee'
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    --records salary with length of 9 total possible integers (including decimals), and goes to 2 decimal places
    salary DECIMAL(9, 2),
    --creating foreign key connection to department primary key called "department_id"
    FOREIGN KEY (department_id)
    --this below is where it references the id from "department" itself
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    --creates primary key for 'employee' to be referenced by manager_id within same table
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,

    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,

    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);