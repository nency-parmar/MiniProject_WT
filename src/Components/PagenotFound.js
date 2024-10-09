import React from 'react'

const PageNotFound = () => {
	return (
		<>
        <div className="bg-image" 
                style={{ 
                    backgroundImage: "url('https://img.freepik.com/premium-photo/soft-blur-nature-background-abstract-modern-website-graphics-with-smooth-gradient-background_532332-40.jpg')", 
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    height: "120vh" 
                }}
            >
                <div className='text-center'>
                    <h1>
                        <b>Error 404!</b>
                    </h1><br/>
                    <h1>
                    <b>Page Not Found!</b>
                    </h1>
                </div>
            </div>
        </>
	)
}

export default PageNotFound