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
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                                <th className="py-4 px-6 text-left">Date</th>
                                <th className="py-4 px-6 text-left">Arrival Time</th>
                                <th className="py-4 px-6 text-left">Departure Time</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {carDetails.schedule.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-300 hover:bg-blue-100 transition duration-200"
                                >
                                    <td className="py-4 px-6">{item.date}</td>
                                    <td className="py-4 px-6">{item.arrivalTime}</td>
                                    <td className="py-4 px-6">{item.departureTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CarDetailShowPage;
