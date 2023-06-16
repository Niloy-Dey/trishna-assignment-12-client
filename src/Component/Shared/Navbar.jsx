import { Link } from "react-router-dom";
import logo from '../../assets/images/navLogo.png'
import 'react-modern-drawer/dist/index.css'
// import { FaRegUserCircle } from 'react-icons/fa'
import { AuthContext } from "../Pages/Provider/AuthProvider";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Drawer from 'react-modern-drawer'

import logo1 from '../../assets/Screenshot_2023-06-13_230857-removebg-preview.png'
const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        // setIsOpen((prevState) => !prevState)
        setIsOpen(!isOpen);
    }
    const handleLinkClick = () => {
        setIsOpen(false);
    };


    // Get user
    const { user, handleSignOut } = useContext(AuthContext)
    // const { user, handleSignOut } = useContext(AuthContext)
    console.log(user)
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server.onrender.com/users`);
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);
    console.log(users)

    let PresentUser = users?.filter(c => c?.email == user?.email)[0]
    console.log(PresentUser?.category)

    return (
        <div>
            <header className="bg-slate-800 body-font">
                <div className="container mx-auto ">

                    <div>
                        <>
                            <Drawer
                                style={{ backgroundColor: "#0F172A", color: "white" }}
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='left'
                                className='bg-slate-800 text-white pt-4'
                            // className="drawer"
                            >
                                {/* <Link to="/home" className='text-center  font-bold text-xl  flex'> <img className='w-16 mr-2' src={logo} alt="" />Online College</Link> */}
                                <Link onClick={handleLinkClick} to="/home" className='text-center  font-bold text-xl  flex'> <img className='w-16 mr-2' src={logo} alt="" />EduLine</Link>

                                <ul className="menu  px-1">
                                    <li> <Link onClick={handleLinkClick} to='/'><a>Home</a></Link></li>
                                    <li> <Link onClick={handleLinkClick} to='/instructor'><a>Instructors</a></Link></li>
                                    <li> <Link onClick={handleLinkClick} to='/classes'> <a>Classes</a></Link></li>

                                    <div className="collapse">
                                        <input type="checkbox" className="peer" />
                                        <div className="flex collapse-title">
                                            {user && <Link onClick={handleLinkClick} to="/dashboard">Dashboard</Link>}

                                        </div>
                                        <div className="collapse-content text-white">
                                            {/* Student access these routes */}
                                            {PresentUser?.category == "student" && <>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/mySelectedClasses'>My selected classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/myEnrolledCourse'>My Enrolled classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/studentPayment'>Payment</Link></li>
                                            </>}



                                            {/* Instructor access these routes */}
                                            {PresentUser?.category == "instructor" && <>

                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/addClasses'>Add Classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/myClasses'>My Classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/totalEnrolledStudent'>Total Enrolled Student</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/feedback'>Feedback</Link></li>
                                            </>}

                                            {/* Admin access these routes */}
                                            {PresentUser?.category == "admin" && <>

                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/mySelectedClasses'>My selected classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/myEnrolledCourse'>My Enrolled classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/studentPayment'>Payment</Link></li>

                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/addClasses'>Add Classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/myClasses'>My Classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/totalEnrolledStudent'>Total Enrolled Student</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/feedback'>Feedback</Link></li>

                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/manageClasses'>Manage Classes</Link></li>
                                                <li className="text-white"><Link onClick={handleLinkClick} to='/dashboard/manageUsers'>Manage users</Link></li>
                                            </>

                                            }


                                        </div>
                                    </div>
                                </ul>
                            </Drawer>
                        </>










                        <div className="navbar  flex   bg-slate-800 shadow-xl text-white justify-between">
                            <div className="navbar-start">
                                <Link onClick={handleLinkClick} to="/home" className="normal-case text-xl flex justify-center items-center " > <img className='w-16 mr-2' src={logo1} alt="" /> Language Tutor</Link>
                            </div>


                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li><Link onClick={handleLinkClick}  className="text-white" to='/'><a>Home</a></Link></li>
                                    <li><Link onClick={handleLinkClick}  className="text-white" to='/instructor'><a>Instructors</a></Link></li>
                                    <li><Link onClick={handleLinkClick}  className="text-white" to='/classes'> <a>Classes</a></Link></li>
                                    <li><Link onClick={handleLinkClick}   className="text-white" to='/dashboard'><a>Dashboard</a></Link></li>
                                </ul>
                            </div>
                            <div className="navbar-end gap-2 flex justify-center items-center ">
                                <div className="dropdown dropdown-end z-50 bg-slate-800 text-white">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <div className="w-10 rounded-full">
                                            <img src={PresentUser?.photo} />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-slate-800 text-white rounded-box w-52">
                                        <li className="w-full my-2  items-center justify-center  text-center">
                                            <a className="text-center items-center justify-center  w-full ">
                                                {PresentUser?.name}
                                            </a>
                                        </li>



                                        <li className="">
                                            {
                                                user ?
                                                    <Link to='/signup' onClick={() => handleSignOut()} className="btn  btn-primary bg-opacity-70 text-white font-bold px-5 w-full">Sign Out </Link>
                                                    :
                                                    <Link to='/login' className="btn btn-outline w-full btn-primary text-opacity-70 font-bold px-5">Sign in </Link>

                                            }
                                        </li>
                                    </ul>
                                </div>

                              
                            </div>


                            <button className='lg:hidden' onClick={toggleDrawer}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>







          

        </div>
    );
};

export default Navbar;
