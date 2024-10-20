import React from 'react';

const CarDetailShowPage = () => {
    const carDetails = {
        numberPlate: 'XYZ 1234',
        email: 'owner@example.com',
        schedule: [
            { date: '2024-10-20', arrivalTime: '09:00 AM', departureTime: '05:00 PM' },
            { date: '2024-10-21', arrivalTime: '10:00 AM', departureTime: '04:00 PM' },
        ],
    };

    return (
        <div className="container mx-auto mt-5 px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Car Details</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Owner Information</h2>
                    <p className="mt-2">
                        <span className="font-medium">Number Plate:</span> {carDetails.numberPlate}
                    </p>
                    <p className="mt-2">
                        <span className="font-medium">Email:</span> {carDetails.email}
                    </p>
                </div>
                <h2 className="text-xl font-semibold mb-2">Schedule</h2>
                <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 text-left font-medium text-gray-600">Date</th>
                            <th className="py-2 px-4 text-left font-medium text-gray-600">Arrival Time</th>
                            <th className="py-2 px-4 text-left font-medium text-gray-600">Departure Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carDetails.schedule.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4 text-gray-800">{item.date}</td>
                                <td className="py-2 px-4 text-gray-800">{item.arrivalTime}</td>
                                <td className="py-2 px-4 text-gray-800">{item.departureTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CarDetailShowPage;
