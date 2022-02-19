import react, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  return (
    <div className="info">
      <form onSubmit={console.log(name)}>
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
    </div>
  );
}

export default App;
