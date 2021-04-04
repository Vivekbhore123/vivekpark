import React from 'react'
import "./App.css";
function List({ listOfFriends }) {
  return (
    <div className="listOfFriends">
        {listOfFriends.map((val) => {
          return (
            <div className="friendContainer">
              <div className="friend">
                <h5>Name: {val.name}</h5>
                 <h5> Date of birth: {val.dob}</h5>
                 <h5> E-mail: {val.mail}</h5>
                 <h5> Mobile: {val.mobile}</h5>
              </div>
            
              
            </div>
          );
        })}
      </div>

  );
}

export default List
