import React, { useRef } from "react";

import axios from "axios";


export default function TestEnq() {

     var x1 = useRef();
     var x2 = useRef();
     var x3 = useRef();
     var x4 = useRef();
     var x5 = useRef();

     const myfunc = function () {
    //    console.log("Button click working");
    //    console.log(x1);
    //    console.log(x1.current.value);
    //    console.log(x2);
    //    console.log(x2.current.value);
    //    console.log(x3);
    //    console.log(x3.current.value);
    //    console.log(x4);
    //    console.log(x4.current.value);
    //    console.log(x5);
    //    console.log(x5.current.value);

       var recordForNodejs = {
        enquiryid: x1.current.value,
        fullname: x2.current.value,
        phone: x3.current.value,
        emailid: x4.current.value,
        message: x5.current.value,
    



       };
    //    console.log(recordForNodejs);
    // http://localhost:8484/enquiry
       axios
         .post("http://localhost:8484/enquiry/enpost", recordForNodejs)
         .post("http://localhost:8484/enquiry", recordForNodejs)

         .then((res) => {
        //    console.log(res);
         });
     };

  return (
    <div className="container">
      <h1>Add Employee Details</h1>
      <form>
        <div className="mb-3">
          <label  className="form-label">
          enquiryid
          </label>
          <input ref={x1} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
          phone
          </label>
          <input ref={x2} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
          emailid
          </label>
          <input ref={x3} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
          fullname
          </label>
          <input ref={x4} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label  className="form-label">
          message
          </label>
          <input ref={x5} type="text" className="form-control" />
        </div>
        <button
          type="add"
          class="btn btn-primary"
          onClick={() => {
            myfunc();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

// enquiryid, phone, emailid, fullname, message