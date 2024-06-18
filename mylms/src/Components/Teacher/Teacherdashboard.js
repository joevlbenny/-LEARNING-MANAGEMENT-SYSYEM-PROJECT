import axios from 'axios';
import React, { useEffect, useState } from 'react';

const baseurl = 'http://127.0.0.1:8000/api/';

function TeacherDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('teacherToken');
      try {
        const response = await axios.get(baseurl + 'teacherdashboard/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      {data ? (
        <div>
         <div className='container mt-4'>
                <div className='row'>
                    < aside className='col-md-3'>
                        <Teachersidebar />
                    </aside>
                    Dashboard
                </div>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TeacherDashboard;
