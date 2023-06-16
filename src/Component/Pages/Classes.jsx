
import { useContext } from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Classes = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [classes, setClasses] = useState([]);
    // const [SelectedClasses, setSelectedClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server.onrender.com/api/classes`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                const filterClasses = data.filter( e =>{
                    if(e.chk=="approved"){
                        return e
                    }
                })
                console.log("filter ",filterClasses)
                setClasses(filterClasses);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);


    

    const HandleClick = (c) => {
        // console.log("first")
        console.log("data ", c)
        const selectClass = {
            
            "name" : c.name,
            "photo": c.photo,
            "Instructor_name":c.Instructor_name,
            "Instructor_email":c.Instructor_email,
            "price":c.price,
            "Available_seat":c.Available_seat,
            "student_email":user.email
        }
        console.log("HELLO",selectClass)

        fetch('https://eduline-server.onrender.com/selectedClasses', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectClass)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })

    }

    return (

        <div>
            <div className="my-12 mx-auto container">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        classes?.map(c => <>

                            <div>

                                <div className="card w-96 bg-slate-200 shadow-xl">
                                    <figure className="">
                                        <img src={c.photo} alt="Shoes" className="rounded-xl w-full h-60 p-2" />
                                    </figure>
                                    <div className="card-body  font-mono">
                                        <h2 className="card-title text-black-500 font-mono font-bold">Language Place : {c.name}</h2>
                                        <h2 className="card-title  font-mono font-bold">Name: {c.Instructor_name}</h2>
                                        <h2 className="card-title  font-mono font-bold">Email{c.Instructor_email}</h2>
                                        <h2 className="card-title  font-mono font-bold">Price: <span className="text-orange-500">{c.price}</span></h2>
                                        <h2 className="card-title font-mono font-bold">Available: <span className="text-orange-500">{c.Available_seat}</span></h2>


                                    </div>
                                    <button className="btn btn-outline btn-primary m-3" onClick={() => HandleClick(c)}>Select Class</button>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Classes;