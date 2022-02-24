import react, { useState } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [employess, setEmployess] = useState([]);

  const addEmp = () => {
    axios
      .post("http://127.0.0.1:3003/create", {
        Name: name,
        Age: age,
        Country: country,
        Position: position,
        Salary: salary,
      })
      .then(() => {
        console.log("sucess ");
      });
  };
  const getEmployess = () => {
    axios.get("http://127.0.0.1:3003/employess").then((response) => {
      setEmployess(response.data);
      console.log(response.data);
    });
  };
  const onDelete = (id) => {
    console.log(id);
    axios.delete(`http://127.0.0.1:3003/delete/${id}`).then((response) => {
      setEmployess(
        employess.filter((row) => {
          return row.empid !== id;
        })
      );
    });
  };

  const columns = [
    {
      title: "Emp ID",
      dataIndex: "empid",
      key: "empid",
    },
    {
      title: "Name",
      dataIndex: "empname",
      key: "empname",
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Action",
      key: "Action",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              onClick={() => {
                onDelete(record.empid);
              }}
              style={{ color: "red", cursor: "pointer", fontSize: 23 }}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="info">
      <form onSubmit={addEmp}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="age"
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            name="country"
            placeholder="Enter country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="position"
            placeholder="Enter position"
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="salary"
            placeholder="Enter salary"
            onChange={(e) => setSalary(e.target.value)}
          />
        </label>

        <button type="submit"> Add Employee</button>
      </form>
      <button onClick={getEmployess}>Show Emp</button>
      <Table dataSource={employess} columns={columns} />;
    </div>
  );
}

export default App;
