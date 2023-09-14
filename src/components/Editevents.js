
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// -- bookid, trekkersname, bookdate, eventname, noofperson

export default function Editevents() {
    let navigate = useNavigate();

    const[bookid,setbookid] = useState()
    const[trekkersname,settrekkersname] = useState()
    const[bookdate,setbookdate] = useState()
    const[eventname,seteventname] = useState()
    const[noofperson,setnoofperson] = useState()

    let paramValue=useParams();
    console.log(paramValue); //{xyz:fdgdf536546d6465}
   
    useEffect(()=>{
        axios.get("http://localhost:4000/api/bookevent/"+paramValue.xyz)
        .then(res=>{
            console.log("From Node js");
            console.log(res.data);//[{}]
            console.log(res.data[0].bookid);
            console.log(res.data[0].trekkersname);
            console.log(res.data[0].bookdate);
            console.log(res.data[0].eventname);
            console.log(res.data[0].noofperson);
            //lets update state variable
            setbookid(res.data[0].bookid)
            settrekkersname(res.data[0].settrekkersname)
            setbookdate(res.data[0].setbookdate)
            seteventname(res.data[0].seteventname)
            setnoofperson(res.data[0].setnoofperson)

        })
    } , []);

    const handlebookid = function(ev){
        console.log(ev.target.value);
        setbookid(ev.target.value);
    }
    const handletrekkersname = function(ev){
        console.log(ev.target.value);
        settrekkersname(ev.target.value);
    }

    const handlebookdate = function(ev){
        console.log(ev.target.value);
        setbookdate(ev.target.value);
    }

    const handleeventname = function(ev){
        console.log(ev.target.value);
        seteventname(ev.target.value);
    }

    const handlenoofperson = function(ev){
        console.log(ev.target.value);
        setnoofperson(ev.target.value);
    }
    const handleForm = (ev)=>{
        ev.preventDefault();
        var dataForNodejs = {
            // -- bookid, trekkersname, bookdate, eventname, noofperson

            bookid:bookid,
            trekkersname:trekkersname,
            bookdate:bookdate,
            eventname : eventname,
            noofperson : noofperson
        }
        console.log(dataForNodejs);
        console.log(paramValue);

        axios
        .put("http://localhost:4000/api/bookevent/"+paramValue.xyz , dataForNodejs)
        .then((res)=>{
            console.log(res.data);
            navigate('/book_datalist')
        })
    }

  return (
  <div className='container'>
      <form onSubmit={(ev)=>{handleForm(ev)}}>
      {/*  bookid, trekkersname, bookdate, eventname, noofperson */}

        {/* <input type="text" placeholder='bookid' value={bookid} onChange={(ev)=>{ handlebookid(ev)}} /> <br /> */}
        <label>Name :&nbsp;</label>
        <input type="text" placeholder='Trekkers Name' value={trekkersname} onChange={(ev)=>{ handletrekkersname(ev)}} /> <br /><br/>
        <label>Booking Date :&nbsp;</label>
        <input type="date" placeholder='Book date' value={bookdate} onChange={(ev)=>{ handlebookdate(ev)}} /> <br /><br/>
        <label>Event Name :&nbsp;</label>
        <input type="text" placeholder='Event name' value={eventname} onChange={(ev)=>{ handleeventname(ev)}} /> <br /><br/>
        <label>No of person :&nbsp;</label>
        <input type="text" placeholder='No of Person' value={noofperson} onChange={(ev)=>{ handlenoofperson(ev)}} /> <br /><br/>

      
        <input type="submit" value="Submit"  />
        {/* {bookid}
        {trekkersname}
        {bookdate}
        {eventname}
        {noofperson} */}
      </form>
  </div>
  )
}
