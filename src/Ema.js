import React, { useState,useEffect } from "react";
import Axios from "axios";


export default function Ema({ listOfFriends }) {
    // const [mail, setMail] = useState("");

// useEffect(()=>{
   Axios.post("https://vivekappmern.herokuapp.com/mail", {
     name: listOfFriends[listOfFriends.length - 1].name,
     mail: listOfFriends[listOfFriends.length - 1].mail,
     dob: listOfFriends[listOfFriends.length - 1].dob,
     mobile: listOfFriends[listOfFriends.length - 1].mobile,
   }).then((response) => {
     console.log(response);
   });
  // },[listOfFriends]) 

  return (
   


    <div>
      <h1>email has been sent you at </h1>
      <h1>{listOfFriends[listOfFriends.length - 1].mail}</h1>
    </div>
  );
}



