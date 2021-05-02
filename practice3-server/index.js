const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: '12345678',
   database: 'CRUD_db'
})

const PORT = 4567;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM movie_reviews";
    connection.query(sqlSelect,(err,result)=> {
        res.send(result);
    });
})

app.post("/api/insert", (req,res) => {
    const movieName = req.body.movie_name;
    const movieReview = req.body.movie_review;

    console.log(movieReview,movieName);

    const sqlInsert = "INSERT INTO movie_reviews (movie_name,movie_review) VALUES (?,?)";
    connection.query(sqlInsert, [movieName,movieReview], (err,result)=> {
        console.log(result);
    })
})











app.listen(PORT, () => console.log(`listening at ${PORT}`));