import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class feedbackform extends Component {


    constructor(){
        super();
        // console.log(this);
        // console.log(React);

        this.isSubmit = false

        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
    }
    myfunc(ev){
        // console.log(ev);
        ev.preventDefault();
        // console.log('test');

        console.log(this.x1);
        console.log(this.x2);
        console.log(this.x3);

        var dataForNodejs = {
            comment :this.x3.current.value,
            name :this.x1.current.value,
            rating :this.x2.current.value,

        }
        console.log(dataForNodejs);

        // console.log(axios);

        //  axios.post('http://localhost:8484/feedback' , dataForNodejs)
        // // console.log(ans_axios);

        // .then((res)=>{
        //     console.log("just testing");
        //     console.log(res.data);
        //     this.setState({isSubmit:true})
        // });

        fetch("http://localhost:8484/feedback",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(dataForNodejs)
        }).then(()=>{
            alert("Feedback Submitted")
            console.log("Feedback Submitted")
            alert("Feedback Submitted")
        })
    }

    


  render() {
    let { isSubmit } = this.state;

    return (
        <div className='container'>
            <h1>Add Record to Database</h1>
            <form  onSubmit={(ev)=>{ this.myfunc(ev) }}>
            <div class="mb-3">
                <label  class="form-label">Your Name :</label>
                <input ref={this.x1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div class="mb-3">
                <label  class="form-label">  Rating (out of 5) :</label>
                <input ref={this.x2} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div class="mb-3">
                <label  class="form-label">Feedback :</label>
                <input ref={this.x3} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
    
            
            <button type="submit" class="btn btn-primary">Submit Feedback</button>
            </form>
            {isSubmit && (
  <Navigate to="/AboutEnqPage" replace={true} />
)}

        </div>
        
    )
  }
}


// fid, comment, name, rating