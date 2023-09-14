import React from 'react';
import { Link } from "react-router-dom";



function Header() {
    return (

        <body>

            {/* from below the code is taken from bootstrap */}
            <div className='container myheader' >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="http://localhost:3000/defaultPage">ADVENTURES POINT</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/AboutEnqPage">AboutUs</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/editEvent/:xyz">Book Event</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/book_datalist">Event List</Link>
                                </li>

                                <li class="nav-item">
                                    {/* <Link class="nav-link active" aria-current="page" to="/AllEventList">EventsList</Link> */}
                                </li>

                                <li class="nav-item dropdown">
                                    {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Eventscomponents
                                    </a> */}
                                    {/* //http://localhost:3000/ -- <Home />
//http://localhost:3000/add_record --<Add /> 
//http://localhost:3000/show_record -- <Show />
//http://localhost:3000/xyz -- <Show /> */}
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item" to="/book_datalist">Get event edit</Link></li>
                                        <li><Link class="dropdown-item" to="/editEvent/:xyz">AddEventData</Link></li>

                                        {/* /editEvent/:xyz */}
                                        <li><Link class="dropdown-item" to="/post-data-node">Post data gag</Link></li>
                                        <li>
                                            <hr class="dropdown-divider" /></li>
                                        <li><Link class="dropdown-item" to="/add_record">activate-2</Link></li>
                                        <li><Link class="dropdown-item" to="/RegCompPage">pr bh reg code</Link></li>

                                    </ul>
                                </li>




                                {/*below are register components have been written  */}
                                <li class="nav-item dropdown">
                                    {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Register
                                    </a> */}
                                    {/* //http://localhost:3000/ -- <Home />
//http://localhost:3000/add_record --<Add /> 
//http://localhost:3000/show_record -- <Show />
//http://localhost:3000/xyz -- <Show /> */}
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item" to="/loginPage">Already having account? login</Link></li>
                                        <li><Link class="dropdown-item" to="/newRegisterPage">New User SignUP</Link></li>
                                        <li><Link class="dropdown-item" to="/">Account</Link></li>

                                        <li>
                                            <hr class="dropdown-divider" /></li>
                                        <li><Link class="dropdown-item" to="/add_record">activate-2</Link></li>
                                        <li><Link class="dropdown-item" to="/AllEventList">test of EventList</Link></li>
                                        <li><Link class="dropdown-item" to="/post-data-node">Post data gag</Link></li>

                                    </ul>
                                </li>


                            </ul>


                            {/* SignUp components will be from here */}






                            {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                            <form class="d-flex logSearch">
                                {/*below are register components have been written  */}
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Login/SignUP
                                    </a>
                                    {/* //http://localhost:3000/ -- <Home />
//http://localhost:3000/add_record --<Add /> 
//http://localhost:3000/show_record -- <Show />
//http://localhost:3000/xyz -- <Show /> */}
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item" to="/loginPage">Already having account? login</Link></li>
                                        <li><Link class="dropdown-item" to="/newRegisterPage">New User SignUP</Link></li>
                                        <li><Link class="dropdown-item" to="/">Account</Link></li>

                                        <li>
                                            <hr class="dropdown-divider" /></li>
                                        {/* <li><Link class="dropdown-item" to="/add_record">activate-2</Link></li> */}
                                        {/* <li><Link class="dropdown-item" to="/AllEventList">test of EventList</Link></li> */}
                                        {/* <li><Link class="dropdown-item" to="/post-data-node">Post data gag</Link></li> */}
                                        {/* <li><Link class="dropdown-item" to="/defaultPage">default page</Link></li> */}
                                    </ul>
                                </li>
                                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                                {/* <button class="btn btn-outline-success" type="submit">Login</button> */}

                            </form>




                        </div>
                    </div>
                </nav>
            </div>

        </body>
    )
}

export default Header;