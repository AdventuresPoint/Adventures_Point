import React, { useRef } from "react";

import axios from "axios";


export default function Postdata4() {

     var x1 = useRef();
     var x2 = useRef();
     var x3 = useRef();

     const myfunc = function () {
       console.log("Button click working");
       console.log(x1);
       console.log(x1.current.value);
       console.log(x2);
       console.log(x2.current.value);
       console.log(x3);
       console.log(x3.current.value);

       var recordForNodejs = {
         name: x1.current.value,
         price: x2.current.value,
         discount: x3.current.value,
       };
       console.log(recordForNodejs);

       axios
         .post('http://localhost:4000/api/products/', recordForNodejs)
         .then((res) => {
           console.log(res);
         });
     };

  return (
    <div className="container col-xl-7">
      <h3 className="bookevpage"><b>BOOK YOUR EVENT  </b></h3>
      <form>
        <div className="mb-3">
          <label  className="form-label">
            Trekkersname
          </label>
          <input ref={x1} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
           bookdate
          </label>
          <input ref={x2} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
          Event Name
          </label>
          <input ref={x2} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
          Number Of Person
          </label>
          <input ref={x2} type="text" className="form-control" />
        </div>

        {/* <div className="mb-3">
          <label  className="form-label">
            Product discount
          </label>
          <input ref={x3} type="text" className="form-control" />
        </div> */}
        <button
          type="add"
          class="btn btn-primary"
          onClick={() => {
            myfunc();
          }}
        >
         Book Now
        </button>
      </form>
    </div>
  );
}