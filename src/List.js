import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";
function List({ listOfFriends }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Mail</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
      </table>
      {listOfFriends.map((val) => {
        return (
          <table className="table">
            <tbody>
              <tr>
                <td>{val.name}</td>
                <td>{val.dob}</td>
                <td>{val.mail}</td>
                <td>{val.mobile}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default List


