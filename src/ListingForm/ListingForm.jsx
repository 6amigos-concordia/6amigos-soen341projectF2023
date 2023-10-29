import React from 'react';
import './style.css';

export const ListingForm = () => {
    const [photos, setPhotos] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);

    const handlePhotos = (e) => {
        const uploadedPhotos = Array.from(e.target.files);
        setPhotos(uploadedPhotos);
    };

    return (
        <div className="form-container">
            {!showForm ? (
                <button onClick={() => setShowForm(true)}>Add Listing</button>
            ) : (
                <div className="listing-form">
                    <h1>Add a Listing</h1>

                    <div className="form-group">
                        <label>Property Address:</label>
                        <input type="text" placeholder="Description" />
                        <input type="text" placeholder="Price" />
                    </div>

                    <div className="form-group">
                        <label>Property Description:</label>
                        <textarea placeholder="Description"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="photos">Upload Photos:</label>
                        <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handlePhotos} />
                    </div>

                    <div className="form-group">
                        <label>Property Features:</label>
                        <input type="text" placeholder="Appliances" />
                        <input type="text" placeholder="Interior Features" />
                        <input type="text" placeholder="Flooring" />
                        <input type="text" placeholder="Heating & Cooling" />
                        <input type="text" placeholder="General Features" />
                        <input type="text" placeholder="Exterior Features" />
                        <input type="text" placeholder="View" />
                        <input type="text" placeholder="Amenities Nearby" />
                    </div>

                    <button type="submit">Submit Listing</button>
                </div>
            )}
        </div>
    );
};

