import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const NewClient = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = {
      ...data,
      [name]: value,
    };
    setData(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={data.email}
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          name="password"
        />
      </Form.Group>
      <Button type="submit">Crear</Button>
    </Form>
  );
};

export default NewClient;
