const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const DB = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "password",
  database: "emp",
});
app.post("/create", (req, res) => {
  const Name = req.body.Name;
  const Age = req.body.Age;
  const Country = req.body.Country;
  const Position = req.body.Position;
  const Salary = req.body.Salary;

  DB.query(
    "INSERT INTO emp(empname,Age,country,position,salary)VALUES(?,?,?,?,?)",
    [Name, Age, Country, Position, Salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("vlaue inserted");
      }
    }
  );
});
app.get("/employess", (req, res) => {
  DB.query("select * from emp", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  console.log(req.body);
  const ID = req.body.Id;
  const Name = req.body.Name;
  const Age = req.body.Age;
  const Country = req.body.Country;
  const Position = req.body.Position;
  const Salary = req.body.Salary;
  DB.query(
    `update emp set empname='${Name}',Age=${Age}, country='${Country}' ,position='${Position}', salary=${Salary} where empid=${ID}`,
    [Name, Age, Country, Position, Salary, ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  DB.query("delete from emp where empid=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3003, () => {
  console.log("server Running ...");
});
