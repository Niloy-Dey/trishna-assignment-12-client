import { useState } from "react";
import { useEffect } from "react";

const ManageUsers = () => {
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


    const handleUpdatedStatus = (_id,c) => {
        console.log(_id)
        const url = `https://eduline-server.onrender.com/userRequest/${_id}`;
        const updatedStatus = c;
        const updatedClass = { category: updatedStatus }
        console.log(updatedClass)
        fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedClass)
        })
        .then(alert('updated'));
      }
    
    return (
        <div className="overflow-x-auto">
            <p className="text-center font-bold my-3 text-white ">Manage Users</p>
            <table className="table">


                <thead>
                    <tr className="text-white">
                        <th>profile pic</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                        <th>Make Student</th>

                    </tr>
                </thead>


                <tbody className="text-white">
                    {
                        users.map(u =>

                            <> 
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={u.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            {/* <div className="font-bold">{u.name}</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td> {u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.category}</td>
                                {/* <td><button className="btn btn-sm btn-success" onClick={() => handleUpdatedStatus(u._id)}> {c.chk}</button></td> */}
                                {/* <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleDelete(c._id)}>Deny</button></td> */}
                                {u.category =="admin"&& <>
                                <td><button className="btn btn-sm btn-success " onClick={() => handleUpdatedStatus(u._id,"admin")} disabled> Admin</button></td>
                                <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleUpdatedStatus(u._id,"instructor")}>Instructor</button></td>
                                <td><button className="btn btn-sm bg-cyan-500 text-white" onClick={() => handleUpdatedStatus(u._id,"student")}>Student</button></td>
                                </>

                                }
                                {u.category =="student"&& <>
                                <td><button className="btn btn-sm btn-success " onClick={() => handleUpdatedStatus(u._id,"admin")}> Admin</button></td>
                                <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleUpdatedStatus(u._id,"instructor")}>Instructor</button></td>
                                <td><button className="btn btn-sm bg-cyan-500 text-white" onClick={() => handleUpdatedStatus(u._id,"student")} disabled>Student</button></td>
                                </>

                                }
                                {u.category =="instructor"&& <>
                                <td><button className="btn btn-sm btn-success " onClick={() => handleUpdatedStatus(u._id,"admin")}> Admin</button></td>
                                <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleUpdatedStatus(u._id,"instructor")} disabled>Instructor</button></td>
                                <td><button className="btn btn-sm bg-cyan-500 text-white" onClick={() => handleUpdatedStatus(u._id,"student")} >Student</button></td>
                                </>

                                }
{/* 
                                <td><button className="btn btn-sm btn-success" onClick={() => handleUpdatedStatus(u._id,"admin")}> Admin</button></td>
                                <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleUpdatedStatus(u._id,"instructor")}>Instructor</button></td>
                                <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleUpdatedStatus(u._id,"student")}>Student</button></td> */}
                            </tr>
                            </>
                        )
                    }




                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;