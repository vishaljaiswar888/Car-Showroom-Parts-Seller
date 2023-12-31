import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function UserTable() {

    const[part1s, setPart1]=useState([]);

    useEffect(() => {
        loadPart1();
    },[]);

    const loadPart1=async()=>{
        const result = await axios.get("http://localhost:8082/part1s");
        setPart1(result.data);
    }



// frontend code for deleting

    const{id} = useParams();

    const deleteUser = async(id)=>{
        await axios.delete(`http://localhost:8082/part1/${id}`);
        loadPart1();
    }


    return (
        <div className='container'>
            <div className='py-5'>

                <table className="table border shadow table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">PartName</th>
                            <th scope="col">PartBrand</th>
                            <th scope="col">PartPrice</th>
                            <th scope="col">PartDetails</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                            {
                                part1s.map((part1, index)=>(
                                    <tr>
                                        <th scope="row" key={index}>{index+1}</th>
                                        <td>{part1.part1Name}</td>
                                        <td>{part1.part1Brand}</td>
                                        <td>{part1.part1Price}</td>
                                        <td>{part1.part1Detail}</td>

                                        <td>
                                            <Link className='btn btn-primary mx-2' to={`/viewpart1/${part1.id}`}>View</Link>
                                            <Link className='btn btn-outline-primary mx-2' to={`/editpart1/${part1.id}`}>Edit</Link>
                                            <button className='btn btn-danger mx-2' onClick={()=>deleteUser(part1.id)}>Delete</button>
                                        </td>

                                    </tr>

                                ))
                            }

                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}
