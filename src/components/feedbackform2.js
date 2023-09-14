import React, { Component } from 'react'
import axios from 'axios';


export default class feedbackform2 extends Component {

//below main objects mapped
constructor(){
    super();
    // console.log(this);
    // console.log(React);
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
        name:this.x1.current.value,
        price:this.x2.current.value,
        discount:this.x3.current.value
    }
    console.log(dataForNodejs);

    // console.log(axios);

    var ans_axios = axios.post('http://localhost:4000/api/products/' , dataForNodejs)
    console.log(ans_axios);

    ans_axios.then((res)=>{
        console.log(res.data);
    });
}

//mapping ends out

  render() {
    return (
        <div className='container'>
            <h1>Add Record to Database</h1>
            <form  onSubmit={(ev)=>{ this.myfunc(ev) }}>
            <div class="mb-3">
                <label  class="form-label">Name</label>
                <input ref={this.x1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div class="mb-3">
                <label  class="form-label">price</label>
                <input ref={this.x2} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div class="mb-3">
                <label  class="form-label">Discount</label>
                <input ref={this.x3} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
  }
}
