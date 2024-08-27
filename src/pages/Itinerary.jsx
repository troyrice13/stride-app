import React, { useState } from "react";
import AddTripForm from "../components/AddTripForm";

export default function Itinerary() {
const [trips, setTrips] = useState([]);
const [isFormVisible, setIsFormVisible] = useState(false)

const handleAddTrip = (newTrip) => {
    setTrips([...trips, { ...newTrip, id: Date.now() }])
    setIsFormVisible(!isFormVisible)
}

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options)
}


    return (
        <div className="flex flex-col items-center justify-center mt-6">
          {/* Heading */}
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Trips Page</h1>
    
          {/* Add Trip Button */}
          {!isFormVisible && (
            <button
              onClick={() => setIsFormVisible(true)}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
            >
              Add Trip
            </button>
          )}
    
          {/* Form for Adding Trip */}
          {isFormVisible && <AddTripForm onSubmit={handleAddTrip} />}
    
          {/* List of Trips */}
          <ul className="flex flex-col divide-y divide-gray-200 mt-6 w-full text-center">
            {trips.map((trip) => (
              <li key={trip.id} className="pb-3 sm:pb-4 font-medium  hover:bg-gray-50">
                {trip.title} ({formatDate(trip.startDate)} to {formatDate(trip.endDate)})
              </li>
            ))}
          </ul>
        </div>
      );
}