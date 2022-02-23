const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "password",
  database: "emp",
});

app.post("/create", (req, res) => {
  const name = req.body.name;

  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const salary = req.body.salary;

  db.query(
    "INSERT INTO emp (empname,Age,country,position,salary) VALUES (?,?,?,?,?)",
    [name, age, country, position, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("valuse insert successfully");
      }
    }
  );
});
app.get("/employes", (req, res) => {
  db.query("select * from emp", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3003, () => {
  console.log("backend server running");
});
