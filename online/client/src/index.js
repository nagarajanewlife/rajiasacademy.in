import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import AddStaff from "./pages/AddStaff";
import Exam from "./pages/Exam";
import Block from "./pages/Block";
import Login from "./pages/frontpage/login";
import OnlinTest from "./pages/frontpage/Exam.jsx";
import NoPage from "./pages/NoPage";
import "antd/dist/antd.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/exam" element={<OnlinTest />} />

        <Route path="/Admin" element={<Layout />}>
          <Route path="/Admin/AddStudent" element={<AddStudent />} />
          <Route path="/Admin/AddStaff" element={<AddStaff />} />
          <Route path="/Admin/Exam" element={<Exam />} />
          <Route path="/Admin/Block" element={<Block />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
