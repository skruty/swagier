import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        phone,
        password
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token); // Zapisz token w localStorage
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
