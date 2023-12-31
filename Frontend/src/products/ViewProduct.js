import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewProduct() {
    return (
        <div>

            {/* 1st row */}

            <div className='container my-3' style={{display:'flex'}}>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228141812/ezgif.com-gif-mak-1160x653.jpg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2019/07/li2377584steering_wheel.jpg?w=827&h=465" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2023/05/Generic1.jpg?w=827&h=465" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                </div>

            </div>

            {/* 2nd row */}

            <div className='container my-3' style={{display:'flex'}}>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228141812/ezgif.com-gif-mak-1160x653.jpg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2019/07/li2377584steering_wheel.jpg?w=827&h=465" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2023/05/Generic1.jpg?w=827&h=465" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                </div>

            </div>

            {/* 3rd row */}

            <div className='container my-3' style={{display:'flex'}}>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228141812/ezgif.com-gif-mak-1160x653.jpg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2019/07/li2377584steering_wheel.jpg?w=827&h=465" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col" style={{padding:'30px'}}>
                        <div className="card h-55">
                            <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2023/05/Generic1.jpg?w=827&h=465" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                <div className="card-footer">
                                    <Link className='btn btn-primary mx-2' to={'#'}>View</Link>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
