import react, { useState } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [listemp, setListemp] = useState([]);

  const columns = [
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
      title: "country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (recard) => {
        return (
          <>
            <span
              onClick={() => {
                onDelete(recard);
              }}
            >
              Delete
            </span>
          </>
        );
      },
    },
  ];
  const addEmployee = () => {
    axios
      .post("http://127.0.0.1:3003/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary,
      })
      .then(() => console.log("success"));
  };
  const listEmployes = () => {
    console.log("list emp");
    axios.get("http://127.0.0.1:3003/employes").then((response) => {
      console.log(response.data);
      setListemp(response.data);
    });
  };
  const onDelete = (recard) => {
    console.log(recard);
  };
  return (
    <div className="info">
      <form onSubmit={addEmployee}>
        <label> Name </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label> Age </label>
        <input
          type="text"
          name="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label> Country </label>
        <input
          type="text"
          name="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <label> Position </label>
        <input
          type="text"
          name="Position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <label> Salary </label>
        <input
          type="text"
          name="Salary"
          onChange={(e) => setSalary(e.target.value)}
        />
        <button type="submit">Add Emp</button>
      </form>
      <div className="listemp">
        <button onClick={listEmployes}>show employes</button>
      </div>
      <Table dataSource={listemp} columns={columns} />;
    </div>
  );
}

export default App;
