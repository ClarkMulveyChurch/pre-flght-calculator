import React, { useState, createContext, useEffect } from "react";
import dbActions from "../utils/database/dbActions";

const initialState = {
  personData: [],
  aircraftData: [],
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  console.log("context");
  
  useEffect(() => {
    console.log("useEffect in Context");
    fetchData();
  }, []);

  async function fetchData() {
    console.log("fetchData in Context");
    const aircraftResult = await dbActions.getAircraft();
    const personResult = await dbActions.getPersons();

    localStorage.setItem("aircraftData", JSON.stringify(aircraftResult));
    localStorage.setItem("personData", JSON.stringify(personResult));

    setData({
      aircraftData: JSON.parse(localStorage.getItem("aircraftData")),
      personData: JSON.parse(localStorage.getItem("personData")),
    });
  }

  return (
    <DataContext.Provider
      value={[
        data,
        {
          fetchData: fetchData,
        }, // These are actions
      ]}
    >
      {children}
    </DataContext.Provider>
  );
};
