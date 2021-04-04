import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from "axios";

import "./App.css";
import List from "./List";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";
import Ema from "./Ema"; 
function App() {  

  const [llst,setLlst]=useState([]);
  const [fix,setFix]=useState(true);

return (
  <div>
    {fix ? (
      <Form llst={llst} setLlst={setLlst} setFix={setFix} fix={fix} />
    ) : (
      <div>
        <Ema listOfFriends={llst} />
        <List listOfFriends={llst} />
      </div>
    )}
    {/* <Ema /> */}
  </div>
);
 
}



export default App;
