import "./App.css";
import {useState} from "react";

const App = () => {
  const [action,setAction]=useState("Sign Up");
  return (
    <>
      <div className="maindiv">
        <div className="innerdiv">
          <div className="header">
            <h2>{action}</h2>
            { (action==="Login")?<div></div>:
            <div className="input1">
            
              <input type="text" name="name" placeholder="name"/>
            </div>
}
            <div className="input1">
              <input type="email" name="email" placeholder="email"/>
            </div>
            <div className="input1">
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="button">
              
              <button className={action === "Sign Up" ? "submitgray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</button>
              <button className={action === "Login" ? "submitgray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>

            </div>
            {  (action==="Login")?
            <div className="second">
            <a href="#">forgot password?</a>
          </div>:<div></div>  }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default App;
