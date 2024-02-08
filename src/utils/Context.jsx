import React, { createContext, useState } from "react";

export const eventContext = createContext();

const Context = (props) => {
  const events = [];

  const [eventData, setEventData] = useState(events);

  return (
    <eventContext.Provider value={{ eventData, setEventData }}>
      {props.children}
    </eventContext.Provider>
  );
};

export default Context;
