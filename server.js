//require express and mysql functionality
const express = require("express");
const mysql = require("mysql2");

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
    console.log(`Connection to company_db successful`)
);


//vvvvv anything below this line utilizes functions to update database










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