import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
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
                <div className="">
                    <div style={{ position: "relative", textAlign: "center", color: "white" }}>
                        <img 
                            src="https://km.visamiddleeast.com/content/dam/VCOM/regional/cemea/generic-cemea/travel-with-visa/images/deserted-beach-travel-800x450.jpg" 
                            style={{ width: "1700px", height: "50vh", objectFit: 'cover' }} 
                            className="opacity-50 z-0" 
                            alt="Travel Beach"
                        />
                        <div style={{ 
                            position: "absolute", 
                            top: "50%", 
                            left: "50%", 
                            transform: "translate(-50%, -50%)" 
                        }}>
                            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Make Your Tour Amazing With Us!</h1>
                            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Get in Touch</p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <p className="text-secondary-emphasis">
                            <h1 className="text-center">Contact Us</h1>
                            Welcome to WanderWaves, your one-stop destination for all things travel! Whether you're an adventurous solo traveler, a family planning a vacation, or a couple looking for a romantic getaway, we’re here to make your travel dreams a reality.
                            At WanderWaves, we believe in exploring the world without limits. From tropical beaches to bustling cities, we’re passionate about helping travelers discover new places, cultures, and experiences. Our goal is to provide seamless travel solutions by leveraging the power of technology, making trip planning easy and fun for everyone.
                        </p>
                        <Link to="/help">How Can I Help You?</Link>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        {/* Contact Information with Icons */}
                        <div className="call mt-4">
                            <h5>Phone Number</h5>
                            <i className="bi bi-telephone"></i> 1234567890
                        </div>

                        <div className="mail mt-4">
                            <h5>E-Mail</h5>
                            <i className="bi bi-envelope"></i> asdf123@asdf.com
                        </div>

                        <div className="location mt-4">
                            <h5>Locate us at</h5>
                            <i className="bi bi-geo-alt"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.B/H sadWfedsa....
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;