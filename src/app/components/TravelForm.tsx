import { useState } from "react";

export default function TravelForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    travelDays: 3,
    travelDestination: "Goa,India",
    travelType: "adventure",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-2/3 mx-auto bg-white p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex justify-around items-center">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="travelDays"
            >
              Travel Days
            </label>
            <input
              type="number"
              id="travelDays"
              name="travelDays"
              value={formData.travelDays}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="travelDestination"
            >
              Travel Destination
            </label>
            <input
              type="text"
              id="travelDestination"
              name="travelDestination"
              value={formData.travelDestination}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="travelType"
            >
              Travel Type
            </label>
            <select
              id="travelType"
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="cultural">Cultural</option>
              <option value="party">Party</option>
              <option value="adventure">Adventure</option>
              <option value="family">Family</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Generate Itinerary
          </button>
        </div>
      </form>
    </div>
  );
}
