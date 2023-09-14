import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./NewRegister.css"
// import Navbar from './components/Navbar';
// import Navbarreg from './components/Navbarreg'
import { useHistory, useNavigate } from "react-router-dom";

const Register = () => {
    const {handleChange, values, handleSubmit, errors,setEventid} = useForm(validateInfo);
    const history = useNavigate();
    return(
        
     
        <div className='form-content-right container'>
    
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Welcome To Adventures Point
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='cname' className='form-lable'>
                        Name :  &nbsp;
                    </label>
                    <input id='cname' type='text' name='cname' className='form-input' placeholder='Enter your name'  value={values.name} onChange={handleChange} />
                   
                    <br></br><br></br> {errors.cname && <p>{errors.cname}</p>}  
                </div>

                <div className='form-inputs'>
                    <label htmlFor='username' className='form-lable' >
                        Username : &nbsp;
                    </label>
                    <input id='username' type='text' name='username' className='form-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                    <br></br><br></br> 
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-lable'>
                        Password : &nbsp;
                    </label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='Enter your password' value={values.password} onChange={handleChange}/>
                    <br></br><br></br> 
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password1' className='form-lable'>
                        Confirm your password :&nbsp; 
                    </label>
                    <input id='password1' type='password' name='password1' className='form-input1' placeholder='Re-enter your password' value={values.password1} onChange={handleChange}/>
                    <br></br><br></br> 
                    {errors.password1 && <p>{errors.password1}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='mob_no' className='form-lable'>
                        Mobile No :&nbsp; 
                    </label>
                    <input id='mob_no' type='text' name='mob_no' className='form-input1' placeholder='Enter your mobile no' value={values.mob_no} onChange={handleChange}/>
                    <br></br><br></br> 
                    {errors.mob_no && <p>{errors.mob_no}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email_id' className='form-lable'>
                        Email Id :&nbsp; 
                    </label>
                    <input id='email_id' type='text' name='email_id' className='form-input1' placeholder='Enter your email' value={values.email_id} onChange={handleChange}/>
                    <br></br><br></br> 
                    {errors.email_id && <p>{errors.email_id}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='age' className='form-lable'>
                        Age :&nbsp; 
                    </label>
                    <input id='age' type='number' name='age' className='form-input' placeholder='Enter your age' value={values.age} onChange={handleChange}/>
                    <br></br><br></br> 
                    {errors.age && <p>{errors.age}</p>}
                </div>                

                <div className='form-inputs'>
                    <label htmlFor='gender' className='form-lable'>
                        Gender :&nbsp; 
                    </label>
                    <select id ='gender' name='gender' value={values.gender}  onChange={handleChange}>
                        <option value='select'>select</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div><br></br><br></br> 
                {/* <div>
                    <label htmlFor='gender' className='form-lable'>
                        Gender: 
                    </label>
                    <input  type='radio' name='gender' value='male' value={values.gender} onChange={question1}/>Male
                    <input type='radio' name='gender' value='female' value={values.gender} onChange={question1}/>Female
                    <input  type='radio' name='gender' value='other' value={values.gender} onChange={question1}/>Other
                </div> */}

                <div className='form-inputs'>
                    <label htmlFor='adress' className='form-lable'>
                        Address :&nbsp; 
                    </label>
                    <br/>
                    <textarea rows='4' cols='50' name='address' form='usrform' placeholder='Enter your address' value={values.address} onChange={handleChange}/>
                   
                    <br></br><br></br>  {errors.address && <p>{errors.address}</p>}

                </div>



                <div className='form-inputs'>
                    <label htmlFor='city' className='form-lable'>
                        City :&nbsp; 
                    </label>
                    <select id='city' name='city' value={values.city}  onChange={handleChange}>
                        <option value='Select'>Select</option>
                        <option value='Jalgoan'>Jalgoan</option>
                        <option value='Kolhapur'>Kolhapur</option>
                        <option value='Raigad'>Raigad</option>
                        <option value='Pune'>Pune</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Satara'>Satara</option>
                        <option value='Other'>Other</option>
                    </select>
                </div><br></br>

                <button className='form-input-btn' type='submit' onClick={setEventid}>Register</button><br/>
                {/* <button classname='form-input-btn' type='submit'> <a href='\EvBook'>Proceed to booking</a></button> */}
                 <span className='form-input-login'>Already have an account? <a href='\loginPage'>Login here</a></span><br></br><br></br>
               
            </form>
        </div>
      
    )
}

export default Register