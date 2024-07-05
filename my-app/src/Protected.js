import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Protected = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            'x-auth-token': token
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default Protected;
