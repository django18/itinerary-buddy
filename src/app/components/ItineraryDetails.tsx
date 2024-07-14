import { Itinerary } from "../types";

interface ItineraryDetailsProps {
  itinerary: Itinerary;
}

const ItineraryDetails = ({ itinerary }: ItineraryDetailsProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg mt-10 text text-center">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {itinerary.title}
        </span>
      </h2>
      <p className="text-gray-700 mb-8">{itinerary.description}</p>
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-2 mt-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Activities
          </span>
        </h3>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        {itinerary.activities?.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-6 rounded-lg shadow-md"
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
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-2 mt-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Major Attractions
          </span>
        </h3>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        <div className="flex flex-col items-start md:items-center bg-gray-50 p-6 rounded-lg shadow-md">
          {itinerary.attractions?.map((attraction, index) => (
            <div key={index} className="my-4">
              <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
              <p className="text-gray-600 mb-2">{attraction.location}</p>
              <p className="text-gray-600">{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-2 mt-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Food Recommendations
          </span>
        </h3>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        <div className="flex flex-col items-start md:items-center bg-gray-50 p-6 rounded-lg shadow-md">
          {itinerary.food?.map((attraction, index) => (
            <div key={index} className="my-4">
              <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
              <p className="text-gray-600 mb-2">{attraction.location}</p>
              <p className="text-gray-600">{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
