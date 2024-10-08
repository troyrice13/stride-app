import React, { useState, useEffect } from "react";

export default function AddTripForm({ onSubmit, currentTrip }) {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (currentTrip) {
      setFormData({
        title: currentTrip.title,
        startDate: currentTrip.startDate,
        endDate: currentTrip.endDate,
      });
    }
  }, [currentTrip]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", startDate: "", endDate: "" });
  };

  return (
    <div>
      <h2 className="text-center text-lg">
        {currentTrip ? "Edit Trip" : "Add a New Trip"}
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Trip Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter trip title"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label>Start Date: </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label>End Date: </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="flex justify-center">
            <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            >
            {currentTrip ? "Update Trip" : "Save Trip"}
            </button>
        </div>
      </form>
    </div>
  );
}
