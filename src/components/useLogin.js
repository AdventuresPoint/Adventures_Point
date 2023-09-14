import { useState } from "react";
import validateInfo from "./validateInfo";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';

const useLogin= validateInfo =>{
    const [values, setValues] = useState({
        username : '',
        password : ''
    });
    const history = useNavigate();
    const [errors, setErrors] = useState({});

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleChange = e =>{
        const {name,value}= e.target;

        setValues({
            ...values,
            [name]:value
        });
    };
   

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmiting(true);
        fetch("http://localhost:8484/customer/login/"+values.username+"/"+values.password,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        }).then((Response)=>{
            console.log(Response);
           
            if(Response.status===200){
                alert("Login Succesful")
               
                // toast.success('Login Successful');
              
                console.log("login success");
                history.push("/events");
            }
            else{
                // toast.error('Login unsuccessful')
                alert("Login unsuccesfull")
                console.log("unsuccess");
                history("/newRegisterPage")
            }
           
        })
    }

    return {handleChange, values, handleSubmit, errors};


}
export default useLogin