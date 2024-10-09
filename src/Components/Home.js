import { Link } from "react-router-dom";

function Home() 
{
    return (
        <>
            <div className="bg-image" 
                style={{ 
                    backgroundImage: "url('https://img.freepik.com/premium-photo/soft-blur-nature-background-abstract-modern-website-graphics-with-smooth-gradient-background_532332-40.jpg')", 
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    height: "auto" 
                }}
            >
                <h1 className="text-center text-subtle-info"
                    style={{
                        fontFamily: "Poppins, sans-serif", 
                        fontWeight: "bold", 
                        fontSize: "3rem", 
                        padding: "50px 0"
                    }}
                >Explore The World With Us!</h1>
                
                <div className="container">
                    

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-3">
                            <div className="card shadow-lg bg-info-subtle" style={{ borderRadius: "20px", transition: "transform 0.3s", overflow: "hidden" }}>
                                <img src="https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D" 
                                    style={{ height: 250, objectFit: "cover" }} className="card-img-top" alt="Beach Destination"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Beach Destinations</h5>
                                    <p className="card-text">Explore serene beach locations around the world.</p>
                                    <Link to="#" className="btn btn-outline-primary">Explore More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow-lg bg-info-subtle" style={{ borderRadius: "20px", transition: "transform 0.3s", overflow: "hidden" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB45S3hNJZJeltmo_3E28mT6tuZ9KGY2GVCExf13bYFQCRQE8pOWiF5bqU3VXaylMb5I&usqp=CAU" 
                                    style={{ height: 250, objectFit: "cover" }} className="card-img-top" alt="Road Trips"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Road Trips</h5>
                                    <p className="card-text">Discover new places with exciting road trips.</p>
                                    <Link to="#" className="btn btn-outline-primary">Explore More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow-lg bg-info-subtle" style={{ borderRadius: "20px", transition: "transform 0.3s", overflow: "hidden" }}>
                                <img src="https://cdn.pixabay.com/photo/2016/11/21/17/02/adventure-1846482_640.jpg" 
                                    style={{ height: 250, objectFit: "cover" }} className="card-img-top" alt="Adventure Tours"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Adventure Tours</h5>
                                    <p className="card-text">Get your adrenaline rush with thrilling adventures.</p>
                                    <Link to="#" className="btn btn-outline-primary">Explore More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow-lg bg-info-subtle" style={{ borderRadius: "20px", transition: "transform 0.3s", overflow: "hidden" }}>
                                <img src="https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg" 
                                    style={{ height: 250, objectFit: "cover" }} className="card-img-top" alt="Adventure Tours"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Hill Stations</h5>
                                    <p className="card-text">Escape to serene hilltops,
                                    Where nature meets tranquility.</p>
                                    <Link to="#" className="btn btn-outline-primary">Explore More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                        <div className="col-md-6 text-center">
                            <h2 className="mb-4" style={{ fontFamily: "Lato, sans-serif", fontWeight: "bolder" }}>Travel With Us</h2>
                            <p style={{ lineHeight: "1.7", color: "#555" }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link to="#" className="btn btn-outline-secondary rounded-2 mt-3 px-5 py-3">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    </div>

                    {/* Carousel Section */}
                    <div className="carousel-container mt-5 p-4">
                        <div id="carouselExampleCaptions" className="carousel slide shadow-lg" data-bs-ride="carousel" style={{ borderRadius: "20px", overflow: "hidden" }}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbmUlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>Time to Travel!</h2>
                                        <p>We travel not to escape life, but for life not to escape us.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1666993407939-f0b51bdfc116?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fHww" className="d-block w-100" alt="Second slide" 
                                         style={{height:"80vh"}}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>Time to Travel!</h2>
                                        <p>Discover the world, one destination at a time.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://sunseatravelmaldives.com/wp-content/uploads/2024/07/maldives_honeymoon_romance_paradise-720x575.jpg" className="d-block w-100" alt="Second slide" 
                                        style={{height:"80vh"}}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>Time to Travel!</h2>
                                        <p>Discover the world, one destination at a time.</p>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;