//require express and mysql functionality
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

//allow accessibility to localport and Heroku if necessary
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//create connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Thisismypassword86!',
        database: 'company_db'
    },
    console.log(`Welcome to the Employee Tracker App! One moment please...`),
    runInquirer()
);


//vvvvv anything below this line utilizes functions to update database

function displayDepartments() {
    const departmentTable = "SELECT * FROM department;";
    db.query(departmentTable, (err, res) => {
        console.table(res),
        runInquirer();
    });
};

function displayTasks() {
    const taskTable = "SELECT * FROM task;";
    db.query(taskTable, (err, res) => {
        console.table(res),
        runInquirer();
    });
};

function displayEmployee() {
    const employeeTable = "SELECT* FROM employee;";
    db.query(employeeTable, (err, res) => {
        console.table(res),
        runInquirer();
    });
};

function addDepartment() {
    console.log("Sorry! Future development.")
    runInquirer();
};

function addTask() {
    console.log("Sorry! Future development.")
    runInquirer();
};

function addEmployee() {
    console.log("Sorry! Future development.")
    runInquirer();
};

function updateEmployee() {
    console.log("Sorry! Future development.")
    runInquirer();
};





//vvvv anything below this line is where functions utilizing MySQL are passed into Inquirer

function runInquirer() {
    inquirer
    .prompt( [
        {
            name: "companyinfo",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        },
    ])
    .then((answer) => {
        //console.log("Selected '" + answer.companyinfo + "'!");
        switch(answer.companyinfo) {
            case ("View all departments"):
                console.log("Can do. Here is a list of departments:")
                displayDepartments()
                break;
        }
        switch(answer.companyinfo) {
            case ("View all roles"):
                console.log("Can do. Here is a list of roles:")
                displayTasks()
                break;
        }
        switch(answer.companyinfo) {
            case ("View all employees"):
                console.log("Can do. Here is a list of employees:")
                displayEmployee()
                break;
        }
        switch(answer.companyinfo) {
            case ("Add a department"):
                //console.log("Can do. Here is a list of employees:")
                addDepartment()
                break;
        }
        switch(answer.companyinfo) {
            case ("Add a role"):
                //console.log("Can do. Here is a list of employees:")
                addTask()
                break;
        }
        switch(answer.companyinfo) {
            case ("Add an employee"):
                //console.log("Can do. Here is a list of employees:")
                addEmployee()
                break;
        }
        switch(answer.companyinfo) {
            case ("Update an employee role"):
                //console.log("Can do. Here is a list of employees:")
                updateEmployee()
                break;
        }

})
};


//vvvv nested below inquirer logic within a function to allow prompts to repeat


/*inquirer
    .prompt( [
        {
            name: "companyinfo",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        },
    ])
    .then((answer) => {
        //console.log("Selected '" + answer.companyinfo + "'!");
        switch(answer.companyinfo) {
            case ("View all departments"):
                console.log("Can do. Here is a list of departments:")
                displayDepartments()
                break;
        }
        switch(answer.companyinfo) {
            case ("View all roles"):
                console.log("Can do. Here is a list of roles:")
                displayTasks()
                break;
        }
        switch(answer.companyinfo) {
            case ("View all employees"):
                console.log("Can do. Here is a list of employees:")
                displayEmployee()
                break;
        }
        return;
});*/








//^^^^^ anything above this line utilizes functions to update database



//404 response for page not loading correctly / invalid URL
app.use((req, res) => {
    res.status(404).end();
});

//app is now listening locally/globally
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});




//Remember to remove password upon submission