import React,{useState} from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";

const Enter = () => {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [datauser, Setuserdata] = useState(User);
  const navigate = useNavigate();
  
  const submitform =(event)=>{
    event.preventDefault()
    const upadeitem =datauser.filter((curr,index)=>{
      if(curr.username===username && curr.password===password){
        alert("You have login");
        navigate("/home");
      }
    });
  }
  return (
    <div className="container">
      <form onSubmit={submitform}>
        <div className="form-row">
          <div className="col-md-8 mb-3 mt-5">
            <label htmlFor="validationDefault01">User Name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="First name"
              value={username}
              onChange={(e)=> setusername(e.target.value)}
              required
            />
          </div>
          <div className="col-md-8 mb-3 ">
            <label htmlFor="validationDefault01">User password</label>
            <input
              type="password"
              className="form-control"
              id="validationDefault02"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=> setpassword(e.target.value)}
              required
              required
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default Enter;
