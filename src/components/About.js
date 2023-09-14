// import React, { useRef } from "react";

// import axios from "axios";

// export default function About() {

//     var x1 = useRef();
//     var x2 = useRef();
//     var x3 = useRef();
//     var x4 = useRef();
//     var x5 = useRef();

//     const myfunc = function () {
//         // console.log("Button click working");
//         // console.log(x1);
//         // console.log(x1.current.value);
//         // console.log(x2);
//         // console.log(x2.current.value);
//         // console.log(x3);
//         // console.log(x3.current.value);
//         // console.log(x4);
//         // console.log(x4.current.value);
//         // console.log(x5);
//         // console.log(x5.current.value);


//         var recordForNodejs = {
//             enquiryid: x1.current.value,
//             phone: x2.current.value,
//             emailid: x3.current.value,
//             fullname: x4.current.value,
//             message: x5.current.value

//         };
//         console.log(recordForNodejs);

//         axios
//             .post('http://localhost:8484/enquiry/enpost', recordForNodejs)
//             .then((res) => {
//                 console.log(res);
//             })
//     }





//     return (
//         <body>

//             <div className='container ABOUT'>

//                 <h2 ><b>ADVENTURES POINT JOURNEY</b></h2>

//                 {/* for information content */}
//                 <p class="aboutP">

//                     It is a platform for travel enthusiasts. Bring out your passion and love for travel. Connect with travel lovers, share your experiences and inspire others.Trekking is an outdoor activity of walking for more than a day. It is a form of walking, undertaken with the specific purpose of exploring and enjoying the scenery. Trekking could be a motive, It could be a commitment, an aim, an objective, a mission, a party, a social gathering. It could be a place where you find friends, and it could be a journey. It could be a slightest chance to save our future generation from losing the nature lovers, mother earth holding within. <br />
//                     It can be shortened or extended as per the desire of trekkers. Trekking is more challenging than hiking since it tests one's ability, endurance and their mental as well as psychological capacity. There are many different ways to do a trek and trekking culture often varies from country to country. It usually takes place on trails in areas of relatively unspoiled wilderness. In Nepal, trekking is very popular among national and international tourist due to the privilege of being in the home of Himalayas. Most of the famous trekking areas make an amazing experience of the Himalaya.Most of the people they want to trek in the Mountain side of the area here you will see the most of the trekking area and more detail of the Nepal trekking for foreign and local tourist
//                 </p>

//             </div>

//             <div className="container">
//                 <h5 className="text-left "><b>FOUNDED BY </b></h5>
//                 <div className="row">
//                     <div className="col-xl-3">
//                         <h4><b>Samarth Khade</b></h4>
//                         <p>9856752345</p>
//                         <p>khadesamarth@gmail.com</p>
//                     </div>

//                     <div className="col-xl-3">
//                         <h4><b>Minal Mahajan</b></h4>
//                         <p>8698570943</p>
//                         <p>mahajanminal@gmail.com</p>
//                     </div>

//                     <div className="col-xl-3">
//                         <h4><b>Rohit Maskar</b></h4>
//                         <p>7020124098</p>
//                         <p>rohitmaskar@gmail.com</p>
//                     </div>

//                     <div className="col-xl-3">
//                         <h4><b>Dhanraj Ghorpade</b></h4>
//                         <p>7058057300</p>
//                         <p>ghorpadedhanraj@gmail.com</p>
//                     </div>


//                 </div>

//                 {/* now below will be the enquiry form */}

//                 <div className='container' >
//                     <div className='col-xx-6 EnqForm'>
//                         <h3><b>FOR ENQUIRY FILL THE FOLLOWING FORM </b></h3>

//                         {/*data posting will be done from below code  */}<div className="container">




//                         </div>


//                     </div>

//                 </div>




//             </div>

//         </body>
//     )
// }
