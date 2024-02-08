import React, { useContext } from "react";
import { eventContext } from "../utils/Context";
import { useParams } from "react-router-dom";

const Events = () => {
  const { eventData } = useContext(eventContext);
  console.log(eventData);
  const { id } = useParams();
  const event = eventData.find((obj) => obj.id == id);
  return (
    <div className="w-full min-h-screen bg-purple-700 text-white">
      <div className="container max-w-screen-lg mx-auto px-4 pt-6 md:pt-0 lg:px-0">
        <div className="h-[40vh] pb-6">
          <img
            className="w-full h-full object-cover object-center"
            src={event.image}
            alt=""
          />
        </div>
        <h1 className="text-xl mb-4">{event.name}</h1>
        <h3 className="text-md">Event Details</h3>
        <ul className="mb-4 list-inside list-disc">
          {event.details.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Events;
