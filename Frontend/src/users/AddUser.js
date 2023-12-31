import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password:""
    });

    const { name, username, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8082/user", user);
        navigate('/usertable');
    }


    return (
        <div className='container'>

            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>

                    <h2 className="text-center m-4">Sign Up</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>

                        <div className='mb-3'>
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input type={"text"} className='form-control' placeholder='Enter your name' name='name' required value={name} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Username" className='form-label'>Username</label>
                            <input type={"text"} className='form-control' placeholder='Enter your username' name='username' required value={username} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Email" className='form-label'>E-mail</label>
                            <input type={"text"} className='form-control' placeholder='Enter your e-mail' name='email' required value={email} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Password" className='form-label'>Password</label>
                            <input type={"password"} className='form-control' placeholder='Enter your password' name='password' required value={password} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type="submit" className='btn btn-outline-primary my-4'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to='/login'>Login</Link>
                    </form>
                </div>

            </div>


        </div>
    )
}
