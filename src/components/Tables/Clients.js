import { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";


const Clients = () => {
  const client =[
      {Id:"1",name:"Ali",cinc:"123456789",ph:"123546484"},
      {Id:"2",name:"david",cinc:"123456789",ph:"123546484"},
      {Id:"3",name:"watson",cinc:"123456789",ph:"123546484"},
      {Id:"4",name:"miller",cinc:"123456789",ph:"123546484"},
  ]
  const renderclients =(client,index) =>
  {
      return
      (
          <tr key={index}>
              <td>{client.Id}</td>
              <td>{client.name}</td>
              <td>{client.cinc}</td>
              <td>{client.ph}</td>
          </tr>
      )
  }
  return (
    <div >
        <ReactBootStrap.Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cnic</th>
            <th>PH</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </ReactBootStrap.Table >
    </div>
  );
};

export default Clients;
