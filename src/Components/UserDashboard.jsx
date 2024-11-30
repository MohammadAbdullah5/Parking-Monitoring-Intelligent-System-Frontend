import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Replace with your API endpoint to fetch user's cars
        axios.get('http://localhost:8080/api/user/cars')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the cars!', error);
            });
    }, []);

    return (
        <div>
            <h1>User's Cars</h1>
            <div className="car-list">
                {cars.length > 0 ? (
                    cars.map(car => (
                        <div key={car.id} className="car-item">
                            <h2>{car.make} {car.model}</h2>
                            <p>Year: {car.year}</p>
                            <p>Color: {car.color}</p>
                        </div>
                    ))
                ) : (
                    <p>No cars found.</p>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;