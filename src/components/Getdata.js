import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Getdata() {
    /*
        constructor(){
            this.state = {count:100}
        }
        setState({count:101})
    */
    const[count,setCount]=useState(100);
    // console.log(count);
    // console.log(setCount);

    const[nodeData,SetnodeData] = useState([]);

    //useEffect as componentDidMount --- it can be loaded once
    useEffect(()=>{
        console.log('Use Effect Hook Called');
        console.log('call API from axios');
        console.log(nodeData , "==");

        axios
        .get("http://localhost:4000/api/bookevent/")
        .then((resFromNodejs)=>{
            // console.log(resFromNodejs);
            console.log(resFromNodejs.data);
            SetnodeData(resFromNodejs.data);
            console.log(nodeData , "==");
        });

    } ,[]);

  return (
    <div className='container'>
        <div className='row'>
            {/* <p>{count}</p>
            <button onClick={()=>{ setCount(count+1) }}> Enter </button> */}

            {
                nodeData.map((obj)=>
                    <div className='col-xl-3 text-center'>
                    {/* //bookid, bookdate, eventname, noofperson, trekkersname */}

                        <p2>{obj.bookdate} </p2>
                        <p2>{obj.eventname} </p2>
                        <p>{obj.noofperson}</p>
                        <p>{obj.trekkersname}</p>
                        <p>{obj._id}</p>
                        <p><button>Add to Cart</button></p>
                        <p><Link to={"/editEvent/"+obj._id}>Edit Event </Link></p>
                        <p><Link to={"/deleteProduct/"+obj._id} > Delete Event </Link></p>
                    </div>
                )
            }
        </div>
    </div>
  );
}
