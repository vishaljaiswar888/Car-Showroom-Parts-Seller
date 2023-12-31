import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewPart1() {

    const [part1, setPart1] = useState({
        part1Name: "",
        part1Brand: "",
        part1Price: "",
        part1Detail:"",
      });
    
      const { id } = useParams();
    
      useEffect(() => {
        loadPart1();
      }, []);
    
      const loadPart1 = async () => {
        const result = await axios.get(`http://localhost:8082/part1/${id}`);
        setPart1(result.data);
      };

    return (

            <div className='container'>

                <div className='row'>

                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>

                        <h2 className="text-center m-4">Part1 Details</h2>

                            <div className='card'>
                                <div className='card-header'>

                                    <b>Details of part1 id : {part1.id}</b>
                                    <ul className='list-group list-group-flush'>

                                        <li className='list-group-item'>

                                            <b>Part Name : </b>
                                            {part1.part1Name}
                                        </li>


                                        <li className='list-group-item'>

                                            <b>Part Brand : </b>
                                            {part1.part1Brand}

                                        </li>


                                        <li className='list-group-item'>

                                            <b>Part Price: </b>
                                            {part1.part1Price}

                                        </li>


                                        <li className='list-group-item'>

                                            <b>Part Description: </b>
                                            {part1.part1Detail}

                                        </li>

                                    </ul>

                                </div>
                            </div>

                            <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                    </div>
                </div>

            </div>

    )
}
