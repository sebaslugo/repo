import React from "react";
import { Table } from "react-bootstrap";
import "./client.css";

const Clientes = [
  {
    firstName: "carlos",
    lastName: "ramiro",
    id: 1,
    userName: "gdsfg",
  },
  {
    firstName: "andres",
    lastName: "Lugo",
    id: 2,
    userName: "sfsdf",
  },
];

const Client = () => {
  return (
    <Table striped bordered hover variant="dark" className="tableClient">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {Clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.firstName}</td>
            <td>{cliente.lastName}</td>
            <td>{cliente.userName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Client;
