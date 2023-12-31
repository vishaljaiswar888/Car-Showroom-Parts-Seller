import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-gradient">
        <div className="container-fluid">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <Link className="navbar-brand" to="/">
              <b style={{ fontSize: '20px' }}>King Of Cars</b>
            </Link>
            <Link className='btn mx-2 border-0' to="/viewproduct">Spare Parts</Link>
          </div>

          <div>
            {isLoggedIn ? (
              <>
                <Link className='btn btn-outline-light mx-2' to="/adduser">Add Product</Link>
                <button className='btn btn-outline-light mx-2' onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link className='btn btn-outline-light mx-2' to="/adminview">Admin</Link>
                <Link className='btn btn-outline-light mx-2' to="/adduser">SignUp</Link>
                <Link className='btn btn-outline-light mx-2' to="/login">LogIn</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}











{/*

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark custom-gradient">
                <div className="container-fluid">
                    <div style={{diplay:'flex', alignContent:'center'}}>

                    <Link className="navbar-brand" to="/"><b style={{fontSize:'20px'}}>King Of Cars</b></Link>
                    <Link className='btn mx-2 border-0' to="/usertable">User Table</Link>
                    <Link className='btn mx-2 border-0' to="/viewproduct">Gallery</Link>

                    </div>
                   
                <div>

                    <Link className='btn btn-outline-light mx-2' to="/adduser">Add Product</Link>
                    <Link className='btn btn-outline-light mx-2' to="/adduser">SignUp</Link>
                    <Link className='btn btn-outline-light mx-2' to="/login">LogIn</Link>

                </div>

                </div>
            </nav>

        </div>
    )
}
*/}