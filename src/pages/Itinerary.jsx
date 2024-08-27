import React, { useState } from "react";
import AddTripForm from "../components/AddTripForm";

export default function Itinerary() {
  const [trips, setTrips] = useState([
    {
      title: "Japan",
      startDate: "2024-08-23",
      endDate: "2024-08-24",
      id: 1,
    },
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);

  const handleAddTrip = (newTrip) => {
    if (isEditing) {
      setTrips(
        trips.map((trip) =>
          trip.id === currentTrip.id ? { ...newTrip, id: currentTrip.id } : trip
        )
      );
      setIsEditing(false);
      setCurrentTrip(null);
      setConfirmationMessage("Trip updated successfully!");
    } else {
      setTrips([...trips, { ...newTrip, id: Date.now() }]);
      setConfirmationMessage("Trip added successfully!");
    }

    setIsFormVisible(false);
    setTimeout(() => setConfirmationMessage(""), 3000);
  };

  const handleDeleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      {/* Heading */}
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Trips Page
      </h1>

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
      {isFormVisible && (
        <div>
          <AddTripForm onSubmit={handleAddTrip} currentTrip={currentTrip} />
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => {
                setIsFormVisible(false);
                setIsEditing(false);
                setCurrentTrip(null);
              }}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* List of Trips */}
      {trips.length === 0 ? (
        <div className="text-gray-500 my-6">
          No trips added yet. Click "Add Trip" to create one.
        </div>
      ) : (
        <ul className="flex flex-col divide-y divide-gray-200 my-6 w-full text-center">
          {trips.map((trip) => (
            <li
              key={trip.id}
              className="pb-3 sm:pb-4 font-medium hover:bg-gray-50 flex justify-between items-center px-4 pt-4"
            >
              <span className="flex-1 text-left p-2 rounded-lg">
                {trip.title} ({formatDate(trip.startDate)} to{" "}
                {formatDate(trip.endDate)})
              </span>
              <div className="flex space-x-2 items-center">
                {/* Edit Trip Button */}
                <button
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-2"
                  onClick={() => {
                    setCurrentTrip(trip);
                    setIsEditing(true);
                    setIsFormVisible(true);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
                {/* Delete Trip Button */}
                <button
                  className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-lg p-1.5"
                  aria-label="Delete trip"
                  onClick={() => handleDeleteTrip(trip.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {confirmationMessage && (
        <div className="text-green-500 mt-4">{confirmationMessage}</div>
      )}
    </div>
  );
}
