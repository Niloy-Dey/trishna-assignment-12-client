import { useState } from "react";
import { useEffect } from "react";

const ManageClasses = () => {




  const [classes, setClasses] = useState([]);
  const [requests, setRequests] = useState([]);
  // const [SelectedClasses, setSelectedClasses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://eduline-server.onrender.com/api/classes`);
      if (response.ok) {
        const data = await response.json();
        setClasses(data);
      } else {
        // Error occurred while fetching data
        console.error('Error fetching data!');
      }
    };

    fetchData();
  }, [classes]);

  console.log(classes)
  // Updating status by function
  const handleUpdatedStatus = (_id) => {
    console.log(_id)
    const url = `https://eduline-server.onrender.com/classRequest/${_id}`;
    const updatedStatus = "approved";
    const updatedClass = { chk: updatedStatus }
    console.log(updatedClass)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedClass)
    })
    alert('updated');
  }



  // Delete
  const handleDelete = (_id) => {
    // const confirm = window.confirm('Do you want to delete?')
    // if (confirm) {
    const url = `https://eduline-server.onrender.com/classRequest/${_id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          alert('deleted seccessfully');
          const remainingRequests = requests.filter(request => request._id !== _id)
          setRequests(remainingRequests);
        }
      })
    // }
  }

  return (
    <div className="overflow-x-auto">
      <p className="text-center text-white font-bold my-3 ">Manage Classes</p>
      <table className="table">


        <thead>
          <tr className="text-white">
            <th>profile pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject name</th>
            <th>pending Classes</th>
            <th>Deny Action</th>

          </tr>
        </thead>


        <tbody>
          {
            classes.map(c =>

              <> 

              <tr>
                <td>
                  <div className="flex items-center space-x-3 text-white">


                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={c.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{c.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-white"> {c.Instructor_name} </td>
                <td className="text-white">{c.Instructor_email}</td>
                <td className="text-white">{c.name}</td>

                <td><button className="btn btn-sm btn-success" onClick={() => handleUpdatedStatus(c._id)}> {c.chk}</button></td>
                <td><button className="btn btn-sm bg-red-500 text-white" onClick={() => handleDelete(c._id)}>Deny</button></td>
              </tr>
              </>
            )
          }




        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;