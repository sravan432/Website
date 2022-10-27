// import './App.css';
import React, { useState } from 'react';
import { Card, Pagination, Table } from 'react-bootstrap';
import data from './Data/users_data.json'
import PaginationComp from './Pagination/pagination';
function App() {
  const total = data;
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState(total.slice((currentPage * recordsPerPage) - recordsPerPage, currentPage * recordsPerPage));
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPosts(total.slice((pageNumber * recordsPerPage) - recordsPerPage, pageNumber * recordsPerPage));
  };

  return (
    <div>
      <Card>
        <div>
          <Card.Body>
            <Table
              striped
              bordered
              hover
              variant="dark"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th><b >First Name</b></th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Date Of Birth</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Postal Code</th>
                  <th>Mobile Number</th>
                  <th>About Me</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.length !== 0 &&
                  currentPosts.map((info) => {
                    return (
                      <tr >
                        <td>{info.id}</td>
                        <td>{info.firstName}</td>
                        <td>{info.lastName}</td>
                        <td>{info.email} </td>
                        <td>{info.dob} </td>
                        <td>{info.gender} </td>
                        <td>{info.address} </td>
                        <td>{info.state} </td>
                        <td>{info.district} </td>
                        <td>{info.postalCode} </td>
                        <td>{info.mobileNumber} </td>
                        <td>{info.aboutMe} </td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>
            <PaginationComp
              recordsPerPage={recordsPerPage}
              totalRecords={total.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Card.Body>
        </div>
      </Card>
    </div>

  );
}

export default App;
