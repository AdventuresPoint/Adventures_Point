import React, {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom';
import UserService from "../service/UserService";

const RegisterUserComponent = () => {

    const [customerID, setcustomerID] = useState('')
    const [passwrd, setpasswrd] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailID, setEmailId] = useState('')
    const [mobileNo, setmobileNo] = useState('')
    const [address, setaddress] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateUsers = (e) => {
        e.preventDefault();

        const users = {customerID, passwrd, firstName, lastName, emailID, mobileNo, address}

        //if(id){
            // UserService.updateEmployee(id, employee).then((response) => {
            //     history.push('/')
            // }).catch(error => {
            //     console.log(error)
            // })

        // }else{
            UserService.saveUser(users).then((response) =>{

                 console.log(response.data);
    
                //  history.push('/');
    
             }).catch(error => {
                 console.log(error)
             })
        // }
        
    }

    // useEffect(() => {

    //     UserService.getEmployeeById(id).then((response) =>{
    //         setFirstName(response.data.firstName)
    //         setLastName(response.data.lastName)
    //         setEmailId(response.data.emailId)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    // const title = () => {

    //     if(id){
    //         return <h2 className = "text-center">Update Employee</h2>
    //     }else{
    //         return <h2 className = "text-center">Add Employee</h2>
    //     }
    // }

    return (
        <div>
           <br /><br />
           <div className = "container nav.bg">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {/* {
                           title()
                       } */}
                       <h1>User Registration Form</h1>
                        <div className = "card-body">
                            <form>
                            <div className = "form-group mb-2">
                                    <label className = "form-label"> Customer ID :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Customer ID"
                                        name = "customerID"
                                        className = "form-control"
                                        value = {customerID}
                                        onChange = {(e) => setcustomerID(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                    <input
                                        type = "password"
                                        placeholder = "Enter password"
                                        name = "passwrd"
                                        className = "form-control"
                                        value = {passwrd}
                                        onChange = {(e) => setpasswrd(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailID}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter mobile no"
                                        name = "mobileNO"
                                        className = "form-control"
                                        value = {mobileNo}
                                        onChange = {(e) => setmobileNo(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setaddress(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <br></br>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateUsers(e)} >Submit </button>
                                <Link to="/" className="btn btn-danger" style={{marginLeft: "10px"}}> Cancel </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default RegisterUserComponent;