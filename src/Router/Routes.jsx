
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home";
import Error from "../Component/Pages/Error";
import Login from "../Component/Pages/Login/Login";
import Signup from "../Component/Shared/Signup";
import Dashboard from "../Component/Dashboard/Dashboard";
import MySelectedClasses from "../Component/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Component/Dashboard/MyEnrolledClasses";
import Payment from "../Component/Dashboard/Payment";
import AddClass from "../Component/Dashboard/AddClass";
import Feedback from "../Component/Dashboard/Feedback";
import TotalEnrolledstudent from "../Component/Dashboard/TotalEnrolledstudent";
import MyClasses from "../Component/Dashboard/MyClasses";
import ManageUsers from "../Component/Dashboard/ManageUsers";
import ManageClasses from "../Component/Dashboard/ManageClasses";
import Instructor from "../Component/Pages/Instructor";
import Classes from "../Component/Pages/Classes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/instructor',
                element: <Instructor></Instructor>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    // {
                    //     path: '/dashboard',
                    //     element: ""
                    // },
                    {
                        path: '/dashboard/mySelectedClasses',
                        element:<MySelectedClasses></MySelectedClasses>
                    },
                    {
                        path: '/dashboard/myEnrolledCourse',
                        element:<MyEnrolledClasses></MyEnrolledClasses>
                    },
                    {
                        path: '/dashboard/studentPayment',
                        element:<Payment></Payment>
                    },
                    {
                        path: '/dashboard/addClasses',
                        element:<AddClass></AddClass>
                    },
                    {
                        path: '/dashboard/myClasses',
                        element:<MyClasses></MyClasses>
                    },
                    {
                        path: '/dashboard/totalEnrolledStudent',
                        element:<TotalEnrolledstudent></TotalEnrolledstudent>
                    },
                    {
                        path: '/dashboard/feedback',
                        element:<Feedback></Feedback>
                    },
                    {
                        path: '/dashboard/manageClasses',
                        element:<ManageClasses></ManageClasses>
                    },
                    {
                        path: '/dashboard/manageUsers',
                        element:<ManageUsers></ManageUsers>
                    },
                ]
            },

        ]
    },
]);

