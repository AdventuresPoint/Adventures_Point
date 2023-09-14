import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/layout.css';
import './css/emp.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Pagenotfound from './components/Pagenotfound';
//http://localhost:3000/ -- <Home />
//http://localhost:3000/add_record --<Add /> 
//http://localhost:3000/show_record -- <Show />
//http://localhost:3000/xyz -- <Show />
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


// import roughBookevent2 from './components/roughBookevent2';
import About from './components/About';
import Postdata4 from './components/Postdata4';
import Login from './components/Login';
import NewRegister from './components/NewRegister';
import EventList from './components/EventList';
import TestEnq from './components/TestEnq';
import AboutEnq from './components/AboutEnq';
import TestClassComp from './components/TestClassComp';
import feedbackform2 from './components/feedbackform2';
import Form from './components/Form';
import Info_sandan from './components/Info_sandan';
import Getdata from './components/Getdata';
import Editevents from './components/Editevents';
import Deleteevents from './components/Deleteevents';
import Info_raigad from './components/Info_raigad';
// import VideoPage from './components/VideoPage'; // Make sure the path is correct

// import manoj_class from './components/manoj_class';
import AdvDefaultPage from './components/AdvDefaultPage';
import EMP from './components/EMP';
// import postEv  from './components/roughEvBook';
// import defaulPage from './components/defaulPage'

var content = (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/AboutEnqPage' element={<AboutEnq />} />
        <Route path="/home" element={<Home />} />
        <Route path='/defaultPage' element={<EMP />}  />
        {/* <Route path="/video" element={<VideoPage />} /> */}

        <Route path='/AdventureDefaultPage' element={<AdvDefaultPage/>}/>
        <Route path='/Info_sadan' element={<Info_sandan />} />
        <Route path='/Info_raigad' element={<Info_raigad />} />

        
        {/* <Route path="/aboutPage" element={<About />} /> */}
        <Route path='/book_datalist' element={<Getdata />} />
        <Route path='/editEvent/:xyz' element={<Editevents />} />
        <Route path='/deleteProduct/:xyz' element={<Deleteevents />} />

        {/* Editevents */}
        <Route path="/loginPage" element={<Login />} />

        {/* <Route path="/newRegisterPage" element={<NewRegister />} /> */}

        <Route path="/newRegisterPage" element={<Form />} />


        <Route path="/AllEventList" element={<EventList />} />

        <Route path='/actEnq' element={<TestEnq />} />

        {/* <Route path='/manoj_abcd' element={<manoj_class />} /> */}

        <Route path='/TestClassComp' element={<TestClassComp />} />




        <Route path='/feedbackform2' element={<feedbackform2 />} />

        <Route path='/post-data-node' element={<Postdata4 />} />

        {/* <Route path='/postEv' element={< roughEvBook />} /> */}
       

        {/* manoj_test2 */}

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
)

ReactDOM.render(
  content,
  document.getElementById('root')
)