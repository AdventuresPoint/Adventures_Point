import React, { useRef } from "react";
import "./NewRegister.css"
import axios from "axios";


export default function NewRegister() {

    var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();

    const myfunc = function () {
        console.log("Button click working");
        console.log(x1);
        console.log(x1.current.value);
        console.log(x2);
        console.log(x2.current.value);


        var recordForNodejs = {
            name: x1.current.value,
            price: x2.current.value,
        };
        console.log(recordForNodejs);

        //    axios
        //      .post('http://localhost:4000/api/products/', recordForNodejs)
        //      .then((res) => {
        //        console.log(res);
        //      });
    };

    return (
        <div className="container">
            <h1><b>Welcome to Adventure Point</b></h1>
            <form>
                <div className="mb-3 col-xl-8" >
                    <label className="form-label">
                        name
                    </label>
                    <input ref={x1} type="text" className="form-control" />
                </div>

                <div className="mb-3 col-xl-8">
                    <label className="form-label">
                        Username
                    </label>
                    <input ref={x1} type="text" className="form-control" />
                </div>

                <div className="mb-3 col-xl-8">
                    <label className="form-label ">
                        Password
                    </label>
                    <input ref={x2} type="password" className="form-control" />
                </div>

                <div className="mb-3 col-xl-8">
                    <label className="form-label">
                        Confirm Password
                    </label>
                    <input ref={x2} type="password" className="form-control" />
                </div>

                <div className="mb-3 col-xl-8">
                    <label className="form-label">
                        ContactNo
                    </label>
                    <input ref={x1} type="text" className="form-control" />
                </div>

                <div className="mb-3 col-xl-8">
                    <label className="form-label">
                        Address
                    </label>
                    <input ref={x1} type="text-area" className="form-control" />
                </div>


                <div className="mb-3 col-xl-8">
                    <label className="form-label">
                        Age
                    </label>
                    <input ref={x1} type="text" className="form-control" />
                </div>

               




                <button
                    type="add"
                    class="btn btn-primary"
                    onClick={() => {
                        myfunc();
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
}