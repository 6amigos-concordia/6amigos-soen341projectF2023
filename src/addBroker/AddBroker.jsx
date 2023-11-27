import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed
import './style.css';

export const AddBroker = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const brokerData = { name, dob, education, experience };
            const response = await axios.post('http://localhost:8080/api/brokers/add', brokerData);
            console.log('Broker added:', response.data);
            // Handle success (e.g., show a success message, clear form, etc.)
        } catch (error) {
            console.error('Error adding broker:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="broker-form">
                <h1>Add a Broker</h1>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Education:</label>
                    <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Experience:</label>
                    <input type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
                </div>
                <button type="submit">Add Broker</button>
            </form>
        </div>
    );
};
