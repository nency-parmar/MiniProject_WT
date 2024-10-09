import { Link } from "react-router-dom";
function Services()
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
                <h1 className="text-center fs-1">
                    Travel Agency Services
                </h1><br/><h2 className="text-center text-bg-light"><b>WE HELP TRAVELERS</b></h2>
                <br/>
                <p className="text-center fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse<br/>
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br/>
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 className="text-center text-bg-light text-primary-emphasis">We Provides You</h2>

                <div class="row mt-5">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card bg-info-subtle text-center">
                        <div class="card-body">
                            <h5 class="card-title">Active Tours</h5>
                            <p class="card-text"><i class="bi bi-suitcase-fill"></i>With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card bg-info-subtle text-center">
                        <div class="card-body">
                            <h5 class="card-title">Flight Research</h5>
                            <p class="card-text"><i class="bi bi-airplane-engines"></i>With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card bg-info-subtle text-center">
                        <div class="card-body">
                            <h5 class="card-title">Awards</h5>
                            <p class="card-text"><i class="bi bi-award"></i>With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card bg-info-subtle text-center">
                        <div class="card-body">
                            <h5 class="card-title">Supports</h5>
                            <p class="card-text"><i class="bi bi-person-arms-up"></i>With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card bg-info-subtle text-center">
                        <div class="card-body">
                            <h5 class="card-title">Guidance</h5>
                            <p class="card-text"><i class="bi bi-person-circle"></i>&nbsp;With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        </>
    );
}

export default Services;