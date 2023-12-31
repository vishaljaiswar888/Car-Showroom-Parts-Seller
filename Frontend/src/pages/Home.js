import React from 'react'

export default function Home() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/1280x420/?bugatti" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Book you car now!</h1>
                            <p>Now in Mumbai...</p>
                            <p><a class="btn btn-danger" href="#" role="button">View More</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1280x420/?ferrari" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Newly Launched</h1>
                            <p>Now in Pune...</p>
                            <p><a class="btn btn-danger" href="#" role="button">View More</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1280x420/?lamborghini" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Hyper Cars</h1>
                            <p>Now in Delhi...</p>
                            <p><a class="btn btn-danger" href="#" role="button">View More</a></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className='container my-5' style={{ display: 'flex' }}>

                <div className="col-lg-4" style={{ padding: '30px' }}>
                    <img className="rounded-circle" src="https://source.unsplash.com/random/300x300/?mercedes" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Stylish</h2>
                    <p>Step into our showroom, where every car is a masterpiece of sleek sophistication.</p>
                    <p><a className="btn btn-danger" href="#" role="button">View details »</a></p>
                </div>

                <div className="col-lg-4" style={{ padding: '30px' }}>
                    <img className="rounded-circle" src="https://source.unsplash.com/random/300x300/?lexus" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Speed</h2>
                    <p>In our showroom, speed is not just a feature.</p>
                    <p><a className="btn btn-danger" href="#" role="button">View details »</a></p>
                </div>

                <div className="col-lg-4" style={{ padding: '30px' }}>
                    <img className="rounded-circle" src="https://source.unsplash.com/random/300x300/?supra" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Performance</h2>
                    <p>At our showroom, performance isn't an option; it's a standard. </p>
                    <p><a className="btn btn-danger" href="#" role="button">View details »</a></p>
                </div>

            </div>


            <div className='container'>
                <div className="row featurette">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2 className="featurette-heading">Royalty Redefined</h2>
                            <p className="lead text-left">Welcome to a world where each ride is an exquisite journey tailored for those who demand nothing but the finest.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://source.unsplash.com/random/1280x1280?rollsroyce" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row featurette">

                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://source.unsplash.com/random/1280x1280?supra" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
                    </div>

                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2 className="featurette-heading">Supra Elegance: A Symphony of Speed</h2>
                            <p className="lead text-left">The Supra stands as a paragon of automotive elegance, blending sleek design with unbridled speed. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row featurette">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2 className="featurette-heading">Precision in Motion</h2>
                            <p className="lead text-left">Experience the thrill of the road with BMW, where precision engineering meets dynamic performance.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://source.unsplash.com/random/1280x1280?bmw" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. Q: What is the significance of horsepower in a car?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Horsepower is a measure of an engine's power, determining the vehicle's ability to accelerate and maintain speed. Higher horsepower generally correlates with increased performance.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. Q: How does ABS (Anti-lock Braking System) enhance driving safety?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                ABS prevents wheel lock-up during braking, maintaining steering control and preventing skidding. This technology improves braking performance on slippery surfaces and in emergency situations.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. Q: What role does the transmission play in a car?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The transmission transfers power from the engine to the wheels. Automatic and manual transmissions control how a vehicle shifts gears, influencing fuel efficiency, acceleration, and overall driving experience.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            4. Q: What is the purpose of the catalytic converter in a car?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The catalytic converter reduces harmful emissions by converting toxic gases from the engine into less harmful substances. It plays a crucial role in minimizing environmental impact.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            5. Q: How does aerodynamics impact a car's fuel efficiency?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Aerodynamics refers to the way air interacts with a vehicle. Streamlined designs reduce air resistance, enhancing fuel efficiency. Cars with better aerodynamics experience less drag, requiring less energy to move through the air.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
