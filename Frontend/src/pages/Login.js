import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/login', user);

      if (response.data === 'Login successful') {
        // Redirect to the homepage or any protected route
        navigate('/');
      } else {
        // Handle login failure (e.g., show an error message)
        alert("Invalid Credentials!")
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">LogIn</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail"
                name="email"
                required
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                required
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary my-4">
              LogIn
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/adduser">
              SignUp
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}


{/* 

import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/login", user);
      
      if (response.data === "Login successful") {
        // Redirect to the homepage or any protected route
        navigate('/');
      } else {
        // Handle login failure (e.g., show an error message)
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">LogIn</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail"
                name="email"
                required
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                required
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary my-4">
              LogIn
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/signup">
              SignUp
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
*/}