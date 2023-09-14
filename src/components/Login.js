import React from "react";
import useLogin from "./useLogin";
import validateInfo from "./validateInfo";
// import Navbar from "./components/Navbarhome";
import { useHistory, useNavigate } from "react-router-dom";
import "./Login.css";

//import { LinkContainer } fom 'react-router-bootstrap'
// import Home from "./components/pages/Home";

const Login = () => {
    const {handleChange, values, handleSubmit, errors} = useLogin(validateInfo);

    const history = useNavigate();
  
    // async function handleSubmit(event) {
    //     event.preventDefault();
      
    //     try {
    //       await Auth.signIn(username, password);
    //       userHasAuthenticated(true);
    //       history.push("/Evtable");
    //     } catch (e) {
    //       alert(e.message);
    //     }
    //   }
    return(
        <div className="images1">
            
            {/* <Navbar/> */}
            <div className='login-container container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>
                    Welcome To Adventure Point
                </h1><br></br>
                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Username :  &nbsp;
                    </lable>
                    <input id='username' type='text' name='username' className='login-text-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Password :  &nbsp;
                    </lable>
                    <input id='password' type='password' name='password' className='login-text-input' placeholder='Enter your password' value={values.password} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                    <br></br>
                    <br></br>
                </div>
                
                
                <button className='login-input-btn' type='submit'>Login</button> <br/>
                <span className='form-input-register'>Do not have Account? <a href='newRegisterPage'>Register Now</a><br></br><br></br>
        
             </span>
            </form>
        </div>
        </div>
        
)
}

export default Login