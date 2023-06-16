// import React from 'react';

import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
// import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  
    const { user } = useContext(AuthContext)

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
        <div className="container mx-auto flex  md:flex-row flex-col items-center">

            <div className="hidden px-3 py-4 w-80   lg:block shadow-lg">
                <ul>
                    {/* student access these routes */}
                    {PresentUser?.category == "student" && <>
                        <li> <Link className="btn   text-white btn-outline  my-1 w-full " to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1 w-full " to="/dashboard/myEnrolledCourse">My Enrolled Course</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/studentPayment">Payment</Link></li>
                    </>

                    }

                    {/* Instructor access these routes */}
                    {PresentUser?.category == "instructor" && <>
                        <li> <Link className="btn text-white btn-outline  my-1  w-full" to="/dashboard/addClasses">Add Classes</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/myClasses">My Classes</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/totalEnrolledStudent">Total Enrolled Student</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/feedback">Feedback</Link></li>
                    </>
                    }

                    {/* Admin access these routes */}
                    {PresentUser?.category == "admin" && <>
                        <li> <Link className="btn text-white btn-outline  my-1 w-full " to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1 w-full " to="/dashboard/myEnrolledCourse">My Enrolled Course</Link></li>
                        <li> <Link className="btn  text-white btn-outline   my-1  w-full" to="/dashboard/studentPayment">Payment</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/addClasses">Add Classes</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/myClasses">My Classes</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/totalEnrolledStudent">Total Enrolled Student</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/feedback">Feedback</Link></li>
                        <li> <Link className="btn  text-white btn-outline  my-1  w-full" to="/dashboard/manageClasses">Manage Classes</Link></li>
                        <li> <Link className="btn   text-white btn-outline  my-1  w-full" to="/dashboard/manageUsers">Manage Users</Link></li>
                    </>}



                </ul>


            </div>
            
            
            
            
                        <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
                    <ul className="menu p-4 w-80 bg-slate-800 text-white text-lg">
                        <div className="avatar mx-auto online my-5">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt="" />
                            </div>
                        </div>

                        {PresentUser?.category == "admin" && <>
                            <li> <Link className="btn my-1 w-full " to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
                            <li> <Link className="btn my-1 w-full " to="/dashboard/myEnrolledCourse">My Enrolled Course</Link></li>
                            <li> <Link className="btn my-1  w-full" to="/dashboard/studentPayment">Payment</Link></li>
                            <li> <Link className="btn my-1  w-full" to="/dashboard/addClasses">Add Classes</Link></li>
                        </>

                        }


                    </ul>
                </div>
            </div>
        </div>

    );
};
export default Dashboard;