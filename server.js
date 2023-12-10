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
    console.log(`Welcome to the Employee Tracker App! One moment please...`)
);


//vvvvv anything below this line utilizes functions to update database

function displayDepartments() {
    const departmentTable = "SELECT * FROM department;";
    db.query(departmentTable, (err, res) => {
        console.log(res);
    });
};









//vvvv anything below this line is where functions utilizing MySQL are passed into Inquirer

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
                console.log("Does THIS work?")
                break;
        }
        switch(answer.companyinfo) {
            case ("View all employees"):
                console.log("Does THIS work?")
                break;
        }
});








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