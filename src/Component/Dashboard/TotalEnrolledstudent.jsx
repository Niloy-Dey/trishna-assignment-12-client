
const TotalEnrolledstudent = () => {
    return (
        <div className="overflow-x-auto">
        <table className="table">

            
          <thead>
            <tr>
              <th>profile Pic</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>


          <tbody>
            <tr> 
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td> Zemlak, Daniel and Leannon </td>
              <td>abcd@gmail.com</td>
            </tr>


         
          </tbody>          
        </table>
      </div>
    );
};

export default TotalEnrolledstudent;