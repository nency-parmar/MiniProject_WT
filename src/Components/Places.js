import { Link } from "react-router-dom";
function Places()
{
    return(
        <>
            <div className="bg-image" 
            style={{ 
                backgroundImage: "url('https://img.freepik.com/premium-photo/soft-blur-nature-background-abstract-modern-website-graphics-with-smooth-gradient-background_532332-40.jpg')", 
                backgroundRepeat: "no-repeat",
                backgroundSize:"100% 100%",
                height: "auto" 
            }}>
                
                <div className="p-4">
                    <h1 className="text-center text-bg-dark"
                        style={{fontFamily:"monospace"}}
                    >Find Your Destination...</h1>
                    <div class="container mt-5">
                        <form class="d-flex" role="search">
                        <input class="form-control me-2 bg-success-subtle" type="search" placeholder="Search Your Destination Here!" aria-label="Search"/>
                        <button class="btn btn-outline-secondary text-light" type="submit">
                            Go To Your Destination
                        </button>
                        </form>
                    </div>

                    <h1 className="mt-5 text-center text-warning-emphasis"
                    style={{fontFamily:"monospace"}}>Our Most Popular Places</h1>

                    <div>
                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.affordableluxurytravel.co.uk/blog/wp-content/uploads/2023/10/visit-goa.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>GOA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/MANALI.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>MANALI</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://cliffhangersindia.com/wp-content/uploads/2024/04/divya-agrawal-qa8VhqvJGIo-unsplash-2-scaled.jpg.webp" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>KASHMIR</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.ghumindiaghum.com/blog/wp-content/uploads/2023/06/Kerala-Tourism.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>KERALA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/LADAKH.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>LADAKH</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/UDAIPUR.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>UDAIPUR</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>ANDAMAN</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/AGRA.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>TAJ MAHAL</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/ALLEPPEY.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>ALLEPPEY</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/DARJEELING.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>DARJEELING</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/AMRITSAR.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>AMRITSAR</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/GULMARG.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>GULMARG</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/SRINAGAR.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>SRINAGAR</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/LAKSHADWEEP-ISLANDS.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>LAKSHADWEEP</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/OOTY.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>OOTY</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/RISHIKESH.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>RISHIKESH</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/SHIMLA.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>SHIMLA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/NAINITAL.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>NAINITAL</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/MUSSOORIE.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>MUSSOORIE</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/PONDICHERRY.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>PONDICHERRY</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/leh/mmt/destination/m_leh-landscape_l_400_640.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>LEH</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/havelock/mmt/destination/m_destination_havelock_landscape_l_400_640.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>HAVELOCK ISLANDS</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_mahabaleshwar_3_l_648_1194.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>MAHABALESHWAR</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Lavasa_2_l_800_1200.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>LAVASA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/m_destination-kasauli-landscape_l_400_640.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>KASAULI</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Assam_landscape_1_l_750_1000.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>ASSAM</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_meghalaya_landscape_1_l_643_964.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>MEGHALAYA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Nagaland_landscape_1_l_750_1000.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>NAGALAND</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/karnataka/mmt/destination/m_destination-karnataka-landscape_l_400_640.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>KARNATAKA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/himachal/mmt/destination/m_destination-himachal-landscape_l_400_640.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>HIMACHAL PRADESH</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div class="d-flex justify-content-between p-5">
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/DELHI.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>DELHI</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/MUMBAI.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>MUMBAI</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://www.holidify.com/images/bgImages/LONAVALA.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>LONAVALA</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://blog.lemontreehotels.com/wp-content/uploads/2018/09/Kankaria-Lake-night-hangout-places-in-ahmedabad.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>AHMEDABAD</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="card m-2" style={{width: '18rem'}}>
                                    <img src="https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/t_ufs/m_Statue_of_Unity_Ahmedabad_1_l_439_640.jpg" style={{height:285}} class="card-img-top" alt="..."/>
                                    <div class="card-body bg-info-subtle">
                                        <h5 class="card-title text-center"><b>STATUE OF UNITY</b></h5>
                                        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center"><Link to="BookNow" class="btn btn-outline-secondary">Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </>
    );
}

export default Places;