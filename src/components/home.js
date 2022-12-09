import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";
import CalculatorTable from "./calculatorTable";
import PreflightChecklist from "./preflightChecklist";
import "./styles/calculator.css";

const Home = () => {
  const defaultPerson = { key: "", name: "", weight: "" };
  const [data, actions] = useContext(DataContext);
  console.log("data", data);

  useEffect(() => {
    actions.fetchData();
  }, []);

  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [personsPilotFrontPass, setPersonsPilotFrontPass] = useState([]);
  const [personsRear, setPersonsRear] = useState([]);

  const getSelector = (e, i, arr, set) => {
    return (
      <>
        <br />
        <select
          name="Persons"
          id="persons"
          value={e.key}
          onChange={(e) => {
            if (e.target.value === "default") {
              let newArray = arr.slice();
              newArray[i] = defaultPerson;
              set(newArray);
            } else {
              let person = data.personData.filter(
                (p) => p.key === e.target.value
              )[0];
              let newArray = arr.slice();
              newArray[i] = {
                key: person.key,
                name: person.name,
                weight: person.weight,
              };
              set(newArray);
            }
          }}
        >
          <option value="default">Default (No selected person)</option>
          {data.personData &&
            data.personData.map((p) => <option value={p.key}>{p.name}</option>)}
        </select>
        <input
          type="button"
          value="Remove"
          onClick={() => {
            let newArray = arr.slice();
            newArray.splice(i, 1);
            set(newArray);
          }}
          className="homeDeleteButton"
        ></input>
      </>
    );
  };

  const addPerson = (set) => {
    set((current) => [...current, defaultPerson]);
  };

  const getTotalWeight = (personsArray) => {
    return personsArray.reduce(
      (accumulator, p) => accumulator + p.weight * 1,
      0
    );
  };
  return (
    <>
      <div>
        <h3>Select Pilot/Passengers</h3>
        <div>
          <h4>Pilot & Front Pass</h4>
          <div className="presetContainer">
            <input
              type="button"
              value="Add"
              onClick={() => addPerson(setPersonsPilotFrontPass)}
              className="homeAddButton"
            ></input>
            {personsPilotFrontPass &&
              personsPilotFrontPass.map((e, i) =>
                getSelector(
                  e,
                  i,
                  personsPilotFrontPass,
                  setPersonsPilotFrontPass
                )
              )}
            <div>Total weight: {getTotalWeight(personsPilotFrontPass)}</div>
          </div>
        </div>
        <div>
          <h4>Rear Pass</h4>
          <div className="presetContainer">
            <input
              type="button"
              value="Add"
              onClick={() => addPerson(setPersonsRear)}
              className="homeAddButton"
            ></input>
            {personsRear &&
              personsRear.map((e, i) =>
                getSelector(e, i, personsRear, setPersonsRear)
              )}
            <div>Total weight: {getTotalWeight(personsRear)}</div>
          </div>
        </div>
      </div>
      <div>
        <h3>Select Aircraft</h3>
        <select
          name="Aircraft"
          id="aircraft"
          onChange={(e) => {
            if (e.target.value === "default") {
              setSelectedAircraft(null);
            } else {
              setSelectedAircraft(
                data.aircraftData.filter((a) => a.key === e.target.value)[0]
              );
            }
          }}
        >
          <option value="default">Default (No selected aircraft)</option>
          {data.aircraftData &&
            data.aircraftData.map((e) => (
              <option value={e.key}>{e.aircraft.nickname}</option>
            ))}
        </select>
      </div>
      <CalculatorTable
        pilotFrontPassWeight={getTotalWeight(personsPilotFrontPass)}
        rearPassWeight={getTotalWeight(personsRear)}
        aircraftData={selectedAircraft?.aircraft}
      />
      <PreflightChecklist />
    </>
  );
};
export default Home;
