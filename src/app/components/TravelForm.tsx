import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../types";
import { Rings } from "react-loader-spinner";

interface TravelFormProps {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}

export default function TravelForm({ onSubmit, isLoading }: TravelFormProps) {
  const [formData, setFormData] = useState({
    travelDays: 3,
    travelDestination: "Goa,India",
    travelType: "adventure",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="mx-auto bg-white p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col justify-stretch items-center gap-5 md:flex-row">
          <div className="mb-4 flex-1">
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
              className="shadow-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 flex-1">
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
              className="shadow-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 flex-1">
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
              className="shadow-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
            className="w-48 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <Rings width={25} height={25} color="#fff" />
            ) : (
              "Generate Itinerary"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
