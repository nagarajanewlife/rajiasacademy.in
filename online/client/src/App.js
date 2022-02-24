import react, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const addEmp = () => {
    console.log(name);
  };
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
    </div>
  );
}

export default App;
