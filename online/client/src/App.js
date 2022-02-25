import react, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Tag,
  Space,
  Form,
  Input,
  InputNumber,
  Button,
  Modal,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./App.css";
function App() {
  const [form] = Form.useForm();

  const [name, setName] = useState("");

  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [employess, setEmployess] = useState([]);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [selectValue, setSelectValue] = useState({});
  useEffect(() => {
    console.log("use effect", Object.keys(selectValue).length);
    {
      Object.keys(selectValue).length !== 0 &&
        form.setFieldsValue({
          name: selectValue.data.empname,
          age: selectValue.data.Age,
          position: selectValue.data.position,
          country: selectValue.data.country,
          salary: selectValue.data.salary,
        });
    }
  }, [selectValue]);

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
  // edit

  const handleCancel = () => {
    setUpdateVisible(false);
  };
  const onEdit = (data) => {
    setUpdateVisible(true);
    setSelectValue({ data });
    console.log("selectValue", selectValue);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log("values", values.user.name);
    setName(values.user.name);
    setAge(values.user.Age);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
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
              style={{
                color: "red",
                cursor: "pointer",
                fontSize: 23,
                marginRight: 20,
              }}
            />
            <EditOutlined
              onClick={() => {
                onEdit(record);
              }}
              style={{ color: "gray", cursor: "pointer", fontSize: 23 }}
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
      <Modal
        title="Update Employess Details"
        visible={updateVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          form={form}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            value={age}
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="country" label="Country">
            <Input />
          </Form.Item>
          <Form.Item name="position" label="Position">
            <Input />
          </Form.Item>
          <Form.Item name="salary" label="Salary">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
