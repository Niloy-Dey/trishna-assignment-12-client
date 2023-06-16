import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('/public/instructor.json')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);

            })
            .catch(error => console.log(error))
    }, [])
const selectInstructor = instructors?.slice(0,6);

    return (
        <div className="my-12 mx-auto container bg-slate-800 pb-20">
            <div className="font-mono text-center  my-9">
                <h1 className="text-white text-opacity-70 font-bold  text-4xl ">Popular Instructors </h1>
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    selectInstructor?.map(instructor => <>

                        <div>

                            <div className="card w-96 bg-slate-200 shadow-xl">
                                <figure className="">
                                    <img src={instructor.image} alt="Shoes" className="rounded-xl w-full h-60" />
                                </figure>
                                <div className="card-body   font-mono">
                                    <h2 className="card-title text-orange-500 font-mono font-bold">Name: {instructor.name}</h2>
                                    <p>Country: {instructor.country}</p>
                                    <Link className="link-hover "><p>{instructor.email}</p></Link>
                                    <p>classes_taken: {instructor.classes_taken}</p>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>

    );
};

export default PopularInstructor;