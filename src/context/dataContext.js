import React, { useState, createContext, useEffect, useContext } from "react";
import dbActions from "../utils/database/dbActions";

const initialState = {
  personData: [],
  aircraftData: [],
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    async function addStoredData() {
      await dbActions.addStoredPersons(
        JSON.parse(localStorage.getItem("personData"))
      );
      await dbActions.addStoredAircraft(
        JSON.parse(localStorage.getItem("aircraftData"))
      );
      fetchData();
    }

    if (navigator.onLine) {
      addStoredData();
    } else {
      fetchData();
    }
  }, []);

  async function fetchData() {
    if (navigator.onLine) {
      const aircraftResult = await dbActions.getAircraft();
      const personResult = await dbActions.getPersons();

      localStorage.setItem("aircraftData", JSON.stringify(aircraftResult));
      localStorage.setItem("personData", JSON.stringify(personResult));
    }

    setData({
      aircraftData: JSON.parse(localStorage.getItem("aircraftData")),
      personData: JSON.parse(localStorage.getItem("personData")),
    });
  }

  async function addOfflinePerson(personDetails) {
    personDetails.key = "";
    localStorage.setItem(
      "personData",
      JSON.stringify([...data.personData, personDetails])
    );
    fetchData();
  }

  function addOfflineAircraft(aircraftDetails) {
    var newAircraft = {};
    newAircraft.key = "";
    newAircraft.aircraft = aircraftDetails;
    localStorage.setItem(
      "aircraftData",
      JSON.stringify([...data.aircraftData, newAircraft])
    );
    fetchData();
  }

  return (
    <DataContext.Provider
      value={[
        data,
        {
          fetchData: fetchData,
          addOfflinePerson: addOfflinePerson,
          addOfflineAircraft: addOfflineAircraft,
        }, // These are actions
      ]}
    >
      {children}
    </DataContext.Provider>
  );
};
