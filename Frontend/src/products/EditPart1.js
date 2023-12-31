import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPart1() {


    // for id
    const {id} = useParams();



    let navigate=useNavigate();


    const [part1, setPart1] = useState({
        part1Name: "",
        part1Brand: "",
        part1Price: "",
        part1Detail:""
    });

    const { part1Name, part1Brand, part1Price, part1Detail } = part1;

    const onInputChange = (e) => {
        setPart1({ ...part1, [e.target.name]: e.target.value })
    }


    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8082/part1/${id}`, part1);
        navigate('/part1table');
    }



    // useParams

    useEffect(()=>{
        loadUser();
    },[]);



    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8082/part1/${id}`);
        setPart1(result.data);
    };


    return (
        <div className='container'>

            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>

                    <h2 className="text-center m-4">Edit part detail</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>

                        <div className='mb-3'>
                            <label htmlFor="part1Name" className='form-label'>Part name</label>
                            <input type={"text"} className='form-control' placeholder='Enter part name' name='part1Name' required value={part1Name} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="part1Brand" className='form-label'>Part Brand</label>
                            <input type={"text"} className='form-control' placeholder='Enter part brand' name='part1Brand' required value={part1Brand} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="part1Price" className='form-label'>Part Price</label>
                            <input type={"text"} className='form-control' placeholder='Enter part price' name='part1Price' required value={part1Price} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="part1Detail" className='form-label'>Part Detail</label>
                            <input type={"text"} className='form-control' placeholder='Enter part detail' name='part1Detail' required value={part1Detail} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type="submit" className='btn btn-outline-primary my-4'>Submit</button>

                    </form>
                </div>

            </div>


        </div>
    )
}
