import React, { useEffect, useState } from 'react';

const BookNow = () => {
    const [data, setData] = useState([]);
    const [isFormUpdating, setIsFormUpdating] = useState(false);
    const [Bookings, setBookings] = useState({
        id: "",
        name: "",
        email: "",
        destination: "",
        date: ""
    });

    // Get All Bookings
    useEffect(() => { 
        getAllData();
    }, []);

    const getAllData = async () => {
        await fetch("http://localhost:8000/bookings")
            .then((res) => { return res.json() })
            .then((res) => { setData(res) })
    }


    // Add Bookings
    const addBookings = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8000/bookings", {
                method: "POST",
                body: JSON.stringify(Bookings),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res);
            if (res.ok) {
                const result = await res.json();
                alert("Booking Added Successfully!");
                console.log(result);
            } else {
                console.error("Error:", res.statusText);
            }
            getAllData();
        } catch (err) {
            console.error("Error On Booking:", err);
        }
    };

    const handleChange = (e) => {
        setBookings({
            ...Bookings,
            [e.target.name]: e.target.value
        });
    };
    

    // Delete Bookings
    const deleteBookings = async (id) => {
        try {
            const res = await fetch("http://localhost:8000/bookings/" + id, {
                method: "DELETE"
            });
    
            if (res.ok) {
                alert("Booking Deleted Successfully!");
                getAllData();
            } else {
                console.error("Error:", res.statusText);
            }
        } catch (err) {
            console.error("Error On Deleting Booking:", err);
        }
    };
    


    // Update Bookings
    const updateBookings = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8000/bookings/" + Bookings.id, {
                method: "PUT",
                body: JSON.stringify(Bookings),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res.ok) {
                alert("Booking Updated successfully!");
            } else {
                console.error("Error:", res.statusText);
            }
            getAllData();
            setIsFormUpdating(false);  // Reset update mode
            setBookings({ id: "", name: "", email: "", destination: "", date: "" });  // Clear form after update
        } catch (err) {
            console.error("Error On Updating booking:", err);
        }
    };
    

    // const updateBookings = async() =>{
	// 	await fetch("http://localhost:8000/bookings/" + Bookings.id, {
	// 		method: "PUT",
	// 		body: JSON.stringify(Bookings),
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		}
	// 	});
	// 	getAllData();
	// }


    return (
        <>
            <div className="bg-image"
                style={{
                    backgroundImage: "url('https://img.freepik.com/premium-photo/soft-blur-nature-background-abstract-modern-website-graphics-with-smooth-gradient-background_532332-40.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    height: "auto"
                }}>
                <div className='bg-image opacity-50'
                    style={{
                        backgroundImage: "url('https://media.istockphoto.com/id/1097481110/photo/passenger-plane-business-trip-travel-concept-flying-evening-sunset.jpg?s=612x612&w=0&k=20&c=f2itQWoW1ObaBI0wCQsaT2s7cpo5a_CIqEQItDW8g90=')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        height: "40vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <h1 className='text-center text-dark' style={{ fontWeight: "bold", fontSize: "4rem"}}>
                        <b>Arrived</b>
                    </h1>
                    <p className='text-center text-dark' style={{ fontWeight: "bold", fontSize: "2rem"}}>
                        <i>Unlock the best in Travel!</i>
                    </p>
                </div>
                <div className="container">
                    <h1 className="text-center text-dark"><b>Book Your Destination</b></h1>
                    <form className="mt-4" onSubmit={addBookings}>
                        <div className="mb-3">
                            <label className="form-label">Booking ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="id"
                                placeholder='Enter Booking ID'
                                value={Bookings.id}
                                onChange={handleChange}
                                required
                                disabled={isFormUpdating}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder='Please Enter Your Full Name'
                                value={Bookings.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder='Please Enter Your E-mail'
                                value={Bookings.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Destination</label>
                            <input
                                type="text"
                                className="form-control"
                                name="destination"
                                placeholder='Please Enter Your Dream Place'
                                value={Bookings.destination}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Travel Date</label>
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={Bookings.date}
                                onChange={handleChange}
                                required
                            />
                        </div><br />
                        {
                            isFormUpdating ? <button className="btn btn-outline-warning text-light"
                                style={{ marginTop: "20px", marginLeft: "600px", width: "200px", fontSize: "20px" }}
                                onClick={updateBookings}>Update</button> : <button type="submit" className="btn btn-outline-secondary text-light"
                                    style={{ marginTop: "20px", marginLeft: "600px", width: "200px", fontSize: "20px" }}>
                                Submit
                            </button>
                        }
                    </form>

                    <h2 className='text-center mt-5 text-light fs-1'><b>Bookings That Are Already Done!</b></h2>

                    <table className="table mt-4 border-4 border-dark bg-success">
                        <thead className='text-center'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Destination</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((Bookings) => {
                                    return (
                                        <tr className='mt-3 rounded-4 text-center' key={Bookings.id}>
                                            <td>{Bookings.id}</td>
                                            <td>{Bookings.name}</td>
                                            <td>{Bookings.email}</td>
                                            <td>{Bookings.destination}</td>
                                            <td>{Bookings.date}</td>
                                            <td>
                                            <button
                                                className='btn btn-outline-warning text-dark-emphasis'
                                                onClick={() => {
                                                    setIsFormUpdating(true);
                                                    setBookings(Bookings);
                                                }}>
                                                Update
                                            </button>
                                            <button className='btn btn-outline-danger ms-3 text-dark-emphasis'
                                                onClick={() => deleteBookings(Bookings.id)}>
                                                Delete
                                            </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default BookNow;