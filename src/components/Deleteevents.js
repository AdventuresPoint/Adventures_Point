import React ,{useEffect}from 'react';
//http://localhost:3000/deleteProduct/61f28912bd4d33a4d5fc5fe6
//<Route path='/deleteProduct/:xyz' element={<Deleteproduct />} />
import {  useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';
export default function Deleteevents() {
    let navigate = useNavigate();


    let  paramValue  = useParams();
    console.log(paramValue);
    //{xyz:61f28912bd4d33a4d5fc5fe6}
    var proid = paramValue.xyz;
    console.log(proid);

    // pass id in node js route i.e. 
    //.delete('/:pid' , productC.productDelete)

    useEffect(()=>{
        console.log('use effect called');
        console.log(proid);

        axios
        .delete('http://localhost:4000/api/bookevent/'+proid)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate('/book_datalist')
        })
        .catch((err)=>{
            console.log(err);
        })
    } , [])

  return (
      <>
      <h1>test delete</h1>
      </>
  )
}
