import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientManagement() {
    const [formData, setFormData] = useState({
        patientID: '',
        patientName: '',
        phoneNumber: '',
        patientAge: '',
        patientBloodGroup: '',
        gender: '',
        consultDoctor: ''
    });

    const [patients, setPatients] = useState([]); // To store the list of patients
    const [showForm, setShowForm] = useState(false); // To toggle the form visibility

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5005/Patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setPatients([...patients, formData]); // Add new patient to the list
                setFormData({
                    patientID: '',
                    patientName: '',
                    phoneNumber: '',
                    patientAge: '',
                    patientBloodGroup: '',
                    gender: '',
                    consultDoctor: ''
                });
                setShowForm(false); // Hide form after successful submission
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering the patient');
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Patient Management</h2>

            {/* Add Patient Button */}
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>Add Patient</button>

            {/* Conditionally Render the Form */}
            {showForm && (
                <form className="row g-3 p-3" style={{ maxWidth: "600px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }} onSubmit={handleSubmit}>
                    <h3 className="text-center mb-4">Patient Registration Form</h3>
                    <div className="col-md-12">
                        <label htmlFor="patientID" className="form-label">Patient's ID</label>
                        <input type="text" className="form-control" id="patientID" value={formData.patientID} onChange={handleChange} placeholder="Enter Patient's ID" required />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="patientName" className="form-label">Patient's Name</label>
                        <input type="text" className="form-control" id="patientName" value={formData.patientName} onChange={handleChange} placeholder="Enter Patient's Name" required />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="patientAge" className="form-label">Patient's Age</label>
                        <input type="text" className="form-control" id="patientAge" value={formData.patientAge} onChange={handleChange} placeholder="Enter Patient's Age" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="patientBloodGroup" className="form-label">Blood Group</label>
                        <select id="patientBloodGroup" className="form-select" value={formData.patientBloodGroup} onChange={handleChange} required>
                            <option value="">Choose</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="genderMale" value="Male" onChange={handleChange} required />
                            <label className="form-check-label" htmlFor="genderMale">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="Female" onChange={handleChange} required />
                            <label className="form-check-label" htmlFor="genderFemale">Female</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="consultDoctor" className="form-label">Consulting Doctor</label>
                        <input type="text" className="form-control" id="consultDoctor" value={formData.consultDoctor} onChange={handleChange} placeholder="Enter Doctor's Name" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
            )}

            {/* List of Patients */}
            <h3 className="text-center mt-4">Registered Patients</h3>
            <ul className="list-group">
                {patients.map((patient, index) => (
                    <li key={index} className="list-group-item">
                        <strong>ID:</strong> {patient.patientID}, 
                        <strong>Name:</strong> {patient.patientName}, 
                        <strong>Phone:</strong> {patient.phoneNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatientManagement;