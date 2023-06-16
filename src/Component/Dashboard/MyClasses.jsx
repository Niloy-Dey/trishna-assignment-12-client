import { useState } from "react";
import { useEffect } from "react";

const MyClasses = () => {

    const [classes, setClasses] = useState([]);
    const [SelectedClasses, setSelectedClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server.onrender.com/api/classes`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                const filterClasses = data.filter(e => {
                    if (e.chk == "approved") {
                        return e
                    }
                })
                console.log("filter ", filterClasses)
                setClasses(filterClasses);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);



    return (
        <section className="">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Classes</h1>
                </div>
                <div className="flex flex-wrap">
                    {
                        classes.map(c => 
                            <>

                                <div className="card w-96 m-4 border shadow-xl">
                                    <figure className="" >
                                        <img src={c.photo} alt="Shoes" className="p-4 rounded-xl h-60 w-full" />
                                    </figure>
                                    <div className="card-body font-mono">
                                        <h2 className="card-title text-white font-mono font-bold">Place: {c.name}</h2>
                                        <h2 className="card-title text-white font-mono font-bold">Name: {c.Instructor_name}</h2>
                                        <h2 className="card-title text-white font-mono font-bold">{c.Instructor_email}</h2>
                                        <h2 className="card-title  font-mono text-white font-bold">Price: <span className="text-orange-500">{c.price}</span></h2>
                                        <h2 className="card-title  text-white font-mono font-bold">Available: <span className="text-orange-500">{c.Available_seat}</span></h2>


                                    </div>
                                </div>
                            </>
                        

                        )
                    }


                </div>
            </div>
        </section>
    );
};

export default MyClasses;