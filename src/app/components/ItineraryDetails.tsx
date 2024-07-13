import PropTypes from "prop-types";
import { Itinerary, ItineraryDetailsType } from "../types";

interface ItineraryDetailsProps {
  itinerary: Itinerary;
}

const ItineraryDetails = ({ itinerary }: ItineraryDetailsProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6">{itinerary.title}</h2>
      <p className="text-gray-700 mb-8">{itinerary.description}</p>
      <div className="space-y-6">
        {itinerary.activities?.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center bg-gray-100 p-6 rounded-lg shadow-md"
          >
            {/* <img
              src={activity.img}
              alt={activity.name}
              className="w-full md:w-48 h-48 object-cover rounded-lg md:mr-6 mb-4 md:mb-0"
            /> */}
            <div>
              <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
              <p className="text-gray-600 mb-2">{activity.location}</p>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryDetails;
