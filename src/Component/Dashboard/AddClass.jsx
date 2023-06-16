import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const AddClass = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const Instructor_name = form.Instructor_name.value;
        const Instructor_email = form.Instructor_email.value;
        const Available_seat = form.Available_seat.value;
        const price = form.price.value;
        const chk  = "pending";


        const addClasses = {
            name,
            photo,
            Instructor_name,
            Instructor_email,
            price,
            Available_seat,
            chk

        }

        console.log(addClasses);

        fetch('https://eduline-server.onrender.com/api/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClasses)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            }
            )
    }





    return (
        <div>
            <div className="font-mono">
                <div className="w-2/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full border  lg:w-[600px] shadow-2xl ">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-white text-opacity-70 font-bold font-mono">Add A CLass</h1>
                            <form onSubmit={handleAddToy}>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Class name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Class Image</span>
                                        </label>
                                        <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Instructor name</span>
                                        </label>
                                        <input type="text" name='Instructor_name' placeholder="instructor name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Instructor email</span>
                                        </label>
                                        <input type="email" name='Instructor_email' placeholder="instructor email" className="input input-bordered " />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold'>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available seats</span>
                                        </label>
                                        <input type="number" name='Available_seat' placeholder="Available_seat" className="input input-bordered" />
                                    </div>

                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                                    </div>
                                </div>


                                <button type='submit' className=" my-9 btn btn-block btn-primary bg-opacity-70 text-white font-mono font-bold">
                                    ADD A Class</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;