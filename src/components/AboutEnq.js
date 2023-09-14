import React, { Component } from 'react';
import axios from 'axios';
import './AboutEnq.css';

import { Navigate } from 'react-router-dom';

export default class AboutEnq extends Component {

    constructor() {
        super();
        // console.log(this);
        // console.log(React);
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
        this.x4 = React.createRef();
        this.x5 = React.createRef();

        this.state = { ischange: false };



    }
    myfunc(ev) {
        // console.log(ev);
        ev.preventDefault();
        // console.log('test');

        console.log(this.x1);
        console.log(this.x2);
        console.log(this.x3);
        console.log(this.x4);
        console.log(this.x5);

        var springbt_enq_data = {
            enquiryid: this.x1.current.value,
            phone: this.x2.current.value,
            emailid: this.x3.current.value,
            fullname: this.x4.current.value,
            message: this.x5.current.value,

        }
        console.log(springbt_enq_data);

        // console.log(axios);

        var ans_axios = axios.post('http://localhost:8484/enquiry/', springbt_enq_data)
            // console.log(ans_axios);

            .then((res) => {
                console.log(res.data);
                this.setState({ ischange: true })
            });
    }
    render() {
        const { ischange } = this.state
        console.log('112', ischange)
        if (ischange) {

            <Navigate to="/defaultPage" />

        }
        return (
            <body>
                {/*  About us page data will be rendered below*/}
                <div className='container ABOUT'>

                    <h2 ><b>ADVENTURES POINT JOURNEY</b></h2>

                    {/* for information content */}
                    <p class="aboutP">

                        It is a platform for travel enthusiasts. Bring out your passion and love for travel. Connect with travel lovers, share your experiences and inspire others.Trekking is an outdoor activity of walking for more than a day. It is a form of walking, undertaken with the specific purpose of exploring and enjoying the scenery. Trekking could be a motive, It could be a commitment, an aim, an objective, a mission, a party, a social gathering. It could be a place where you find friends, and it could be a journey. It could be a slightest chance to save our future generation from losing the nature lovers, mother earth holding within. <br />
                        It can be shortened or extended as per the desire of trekkers. Trekking is more challenging than hiking since it tests one's ability, endurance and their mental as well as psychological capacity. There are many different ways to do a trek and trekking culture often varies from country to country. It usually takes place on trails in areas of relatively unspoiled wilderness. In Nepal, trekking is very popular among national and international tourist due to the privilege of being in the home of Himalayas. Most of the famous trekking areas make an amazing experience of the Himalaya.Most of the people they want to trek in the Mountain side of the area here you will see the most of the trekking area and more detail of the Nepal trekking for foreign and local tourist
                    </p>



                    <div className="container">
                        <h5 className="text-left "><b>FOUNDED BY </b></h5>
                        <div className="row">
                            <div className="col-xl-3">
                                <h4><b>Samarth Khade</b></h4>
                                <p>9856752345</p>
                                <p>khadesamarth@gmail.com</p>
                            </div>

                            <div className="col-xl-3">
                                <h4><b>Minal Mahajan</b></h4>
                                <p>8698570943</p>
                                <p>mahajanminal@gmail.com</p>
                            </div>

                            <div className="col-xl-3">
                                <h4><b>Rohit Maskar</b></h4>
                                <p>7020124098</p>
                                <p>rohitmaskar@gmail.com</p>
                            </div>

                            <div className="col-xl-3">
                                <h4><b>Dhanraj Ghorpade</b></h4>
                                <p>7058057300</p>
                                <p>ghorpadedhanraj@gmail.com</p>
                            </div>

                        </div>
                    </div>



                </div>







                {/* info and table data over here */}

                {/* below is a enquiry form positing */}
                <div className='container  EnqForm'>
                    <h3 ><b>ENQUIRY NOW</b></h3>
                    <form className='col-xl-6' onSubmit={(ev) => { this.myfunc(ev) }}>
                        <div class="mb-3">
                            <label class="form-label">Enquiryid</label>
                            <input ref={this.x1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input ref={this.x2} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email-id</label>
                            <input ref={this.x3} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>

                        <div class="mb-3">
                            <label class="form-label">Fullname</label>
                            <input ref={this.x4} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Ask your question</label>
                            {/* <input ref={this.x5} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                            <textarea ref={this.x5} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                        </div>

                        <button type="submit" class="btn btn-warning">Submit</button>
                    </form>
                </div>



            </body>
        )
    }
}


// enquiryid, phone, emailid, fullname, message