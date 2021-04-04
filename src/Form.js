import React,{useState,useEffect} from 'react'
import Axios from "axios";


const Form = ({ llst, setLlst, setFix, fix }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [listOfFriends, setListOfFriends] = useState([]);

  const addFriend = () => {
    Axios.post("https://vivekappmern.herokuapp.com/addfriend", {
      name: name,
      mail: mail,
      dob: dob,
      mobile: mobile,
    })
      .then((response) => {
        console.log(response);
        setListOfFriends([
          ...listOfFriends,
          {
            _id: response.data.id,
            name: name,
            mail: mail,
            dob: dob,
            mobile: mobile,
          },
        ]);
        setLlst(listOfFriends);
        setName("");
        setMail("");
        setDob("");
        setMobile("");
      })
      .then(() => {
        setFix(false);
      });
   
   
  };

  useEffect(() => {
    Axios.get("https://vivekappmern.herokuapp.com/read")
      .then((response) => {
        setListOfFriends(response.data);
        setLlst(listOfFriends);
      })
      .catch(() => {
        console.log("ERR");
      });
      
  }, [listOfFriends,setLlst]);

  return (
    <div className="App">
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home">
                <h3 className="register-heading">made by vivek bhore</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name *"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date of birth *"
                        value={dob}
                        onChange={(event) => {
                          setDob(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        value={mail}
                        onChange={(event) => {
                          setMail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        minLength="10"
                        maxLength="10"
                        name="txtEmpPhone"
                        className="form-control"
                        placeholder="Your Phone *"
                        value={mobile}
                        onChange={(event) => {
                          setMobile(event.target.value);
                        }}
                      />
                    </div>

                    <input
                      type="submit"
                      className="btnRegister"
                      value="Submit"
                      onClick={addFriend}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default Form
