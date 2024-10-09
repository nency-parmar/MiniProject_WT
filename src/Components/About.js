function About()
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
                <div class="d-flex">
                    <div>
                        <p class="text-secondary-emphasis fst-italic">
                            <h1 class="text-center">About Us</h1>
                            Welcome to WanderWaves, your one-stop destination for all things travel! Whether you're an adventurous solo traveler, a family planning a vacation, or a couple looking for a romantic getaway, we’re here to make your travel dreams a reality.
                            At WanderWaves, we believe in exploring the world without limits. From tropical beaches to bustling cities, we’re passionate about helping travelers discover new places, cultures, and experiences. Our goal is to provide seamless travel solutions by leveraging the power of technology, making trip planning easy and fun for everyone.
                            <br/><br/>
                            <h1>Why Choose Us?</h1>
                                <ul>
                                    <li><p> <b>Curated Destinations</b> : We handpick destinations based on your interests, whether you're a thrill-seeker, a history buff, or just looking for some relaxation.</p></li>
                                    <li><p> <b>Real-Time Booking</b> : Book flights, hotels, and tours instantly. Our platform is powered by JavaScript technology, ensuring fast, secure, and reliable bookings.</p></li>
                                    <li><p> <b>Personalized Travel Experiences</b> : Get tailored recommendations based on your preferences and travel history.</p></li>
                                    <li><p> <b>Expert Travel Guides</b> : From locals' favorite spots to hidden gems, we partner with expert guides to offer authentic travel experiences.</p></li>
                                </ul>
                            <br/>
                            <h1>OUR MISSION</h1>
                            &nbsp;&nbsp;&nbsp;We strive to inspire wanderlust and make global exploration accessible to everyone. Whether it's your first trip or your hundredth, we’re here to help you every step of the way with innovative solutions that simplify planning and enhance your travel experience.
                            <br/><br/>
                            <h1>QUICK LINKS</h1>
                            &nbsp;&nbsp;&nbsp;Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights, Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata 
                            <br/><br/>
                            <h1>IMPORTANT LINKS</h1>
                            &nbsp;&nbsp;&nbsp;Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo
                            </p>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/736x/57/d9/12/57d912449af2ec54bb79f46780854abb.jpg" 
                            style={{width: "850px", height: "100vh", marginTop: "40px", borderRadius: "2000px", filter: "blur(10px);"}}
                            class="opacity-75"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;