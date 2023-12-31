import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminView() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Welcome back, Admin!</h2>
          <form>
          <Link className="btn btn-outline-danger mx-2" to="/usertable"
            style={{ fontSize: '24px', padding: '20px', width: '300px', marginTop: '20px', marginBottom: '20px' }}>
                View User Details
          </Link>


          <Link className="btn btn-outline-success mx-2" to="/part1table"
            style={{ fontSize: '24px', padding: '20px', width: '300px', marginTop: '20px', marginBottom: '20px' }}>
                View Product Details
          </Link>


          <Link className="btn btn-outline-success mx-2" to="/addpart1"
            style={{ fontSize: '24px', padding: '20px', width: '300px', marginTop: '20px', marginBottom: '20px' }}>
                Add New Product
          </Link>

          </form>
        </div>
      </div>
    </div>
  );
}