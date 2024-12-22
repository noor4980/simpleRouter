import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductDetails({ list = []}) {
  const navigate = useNavigate();

  if(list.length === 0){
      return(
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl mb-4">No User Details Available</h1>
          <button
          className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <button
          className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => navigate("/account")}
        >
          next page
        </button>
      </div>
      )
  }
  return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
         <h1 className="text-3xl mb-4">User Details</h1>
         <ul className="space-y-4">
        {list.map((user, index) => (
          <li key={index} className="p-4 bg-gray-300 rounded-lg shadow-lg w-80">
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Confirm Password:</strong> {user.confirmPassword}</p>
          </li>
        ))}
      </ul>
      <button className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => navigate(-1)}
      >Go Back</button>
      <button
          className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => navigate("/account")}
        >
          next page
        </button>
    </div>
    </div>
  )
}

export default ProductDetails