import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class feedbackform extends Component {


    constructor(props) {
        super(props);
        // console.log(this);
        // console.log(React);
        this.state = { isSubmit: false };


        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
    }
    myfunc(ev) {
        // console.log(ev);
        ev.preventDefault();
        // console.log('test');

        console.log(this.x1);
        console.log(this.x2);
        console.log(this.x3);

        var dataForNodejs = {
            comment: this.x3.current.value,
            name: this.x1.current.value,
            rating: this.x2.current.value,

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

        fetch("http://localhost:8484/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataForNodejs)
        }).then(() => {
            alert("Feedback Submitted")
            console.log("Feedback Submitted")
            this.setState({ isSubmit: true })

            // alert("Feedback Submitted")
        })
    }




    render() {
        let { isSubmit } = this.state;

        return (
            <div className='container test_enform col-xl-9'>
                <h1><b>Join the Adventure to receive our best vacation deals</b></h1>

               
                <form onSubmit={(ev) => { this.myfunc(ev) }}>
                    <div class="mb-3">
                        <label class="form-label">Your Name :</label>
                        <input ref={this.x1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        {/* below two lines are my origintal tested code */}
                        {/* <label class="form-label">  Rating (out of 5) :</label>

                        <input ref={this.x2} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        {/* above code ends here */}

                        {/* testing code for select box */}
                        <div class="mb-3">
                        <label class="form-label">Rating(Out of 5) :</label>

                    </div>

                        <div class="form-check form-check-inline">
                            <input ref={this.x2} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1" />
                            <label class="form-check-label" for="inlineCheckbox1">1</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input ref={this.x2} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="2" />
                            <label class="form-check-label" for="inlineCheckbox1">2</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input ref={this.x2} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="3" />
                            <label class="form-check-label" for="inlineCheckbox1">3</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input ref={this.x2} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="4" />
                            <label class="form-check-label" for="inlineCheckbox1">4</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input ref={this.x2} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="5" />
                            <label class="form-check-label" for="inlineCheckbox1">5</label>
                        </div>

                        {/* testing finished for select box */}

                    </div>
                    <div class="mb-3">
                        <label class="form-label">Feedback :</label>
                        <input ref={this.x3} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>


                    <button type="submit" class="btn btn-primary">Submit Feedback</button>
                    <h4>You can unsubscribe at any time.</h4>
                </form>
                {isSubmit && (
                    <Navigate to="/defaultPage" replace={true} />
                )}

            </div>

        )
    }
}


// fid, comment, name, rating


