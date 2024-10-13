import React, { useEffect, useState } from 'react'

const ResultPage = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-md">
          <button
            className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            onClick={() => navigate('/dashboard')}
          >
            Go Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
