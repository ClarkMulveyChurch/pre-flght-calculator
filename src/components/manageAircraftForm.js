import React, { useState, useEffect } from "react";
import dbActions from "../utils/database/dbActions";
import AircraftForm from "./aircraftForm";

const ManageAircraftForm = () => {
  const initialDetailState = {
    type: "",
    number: "",
    nickname: "",
    maxGrossWeight: "",
    weight: "",
    armAftBagOne: "",
    armAftBagTwo: "",
    armAircraftArm: "",
    armFuel: "",
    armPilotAndFrontPass: "",
    armRearPass: "",
    cgLimitsAft: "",
    cgLimitsForward: "",
  };

  const [aircraftDetails, setAircraftDetails] = useState(initialDetailState);
  const [isValidData, setIsValidData] = useState(true);
  const [data, setData] = useState([]);
  const [isCreatingAircraft, setIsCreatingAircraft] = useState(false);
  const [isUpdatingAircraft, setIsUpdatingAircraft] = useState(false);
  const aircraftValuesString = ["nickname", "type", "number" ];

  const aircraftValuesNumber = [
    "maxGrossWeight",
    "weight",
    "armAircraftArm",
    "armPilotAndFrontPass",
    "armRearPass",
    "armAftBagOne",
    "armAftBagTwo",
    "armFuel",
    "cgLimitsForward",
    "cgLimitsAft",
  ];

  async function fetchData() {
    const result = await dbActions.getAircraft();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const isValidNumber = (num) => {
    return num === "" ? true : num > 0;
  };

  const calculateIsValid = (aircraftDetails) => {
    return (
      aircraftDetails.number !== "" &&
      aircraftDetails.nickname !== "" &&
      isValidNumber(aircraftDetails.maxGrossWeight) &&
      isValidNumber(aircraftDetails.weight) &&
      isValidNumber(aircraftDetails.armAftBagOne) &&
      isValidNumber(aircraftDetails.armAftBagTwo) &&
      isValidNumber(aircraftDetails.armAircraftArm) &&
      isValidNumber(aircraftDetails.armFuel) &&
      isValidNumber(aircraftDetails.armPilotAndFrontPass) &&
      isValidNumber(aircraftDetails.armRearPass) &&
      isValidNumber(aircraftDetails.cgLimitsAft) &&
      isValidNumber(aircraftDetails.cgLimitsForward)
    );
  };

  const addNewAircraft = () => {
    if (!calculateIsValid(aircraftDetails)) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
      dbActions.saveAircraft(aircraftDetails);
      setAircraftDetails(initialDetailState);
      fetchData();
    }
  };

  const deleteAircraft = (aircraftId) => {
    dbActions.deleteAircraft(aircraftId);
    fetchData();
  };

  return (
    <>
      <h2 onClick={() => setIsCreatingAircraft(!isCreatingAircraft)}>
        Create new Aircraft
      </h2>
      {isCreatingAircraft && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNewAircraft();
          }}
        >
          <>
            {aircraftValuesString.map((v) => {
              return (
                <>
                  <label key={aircraftValuesString.indexOf(v)}>
                    {v}:
                    <input
                      type="text"
                      value={aircraftDetails[v]}
                      onChange={(e) => {
                        setAircraftDetails({
                          ...aircraftDetails,
                          [v]: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <br />
                </>
              );
            })}
            {aircraftValuesNumber.map((v) => {
              return (
                <>
                  <label key={aircraftValuesNumber.indexOf(v)}>
                    {v}:
                    <input
                      type="number"
                      value={aircraftDetails[v]}
                      onChange={(e) => {
                        setAircraftDetails({
                          ...aircraftDetails,
                          [v]: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <br />
                </>
              );
            })}
          </>
          <input type="submit" value="Submit" />
          <>{!isValidData && <div>correct this plz</div>}</>
        </form>
      )}
      <h2 onClick={() => setIsUpdatingAircraft(!isUpdatingAircraft)}>Update existing Aircraft</h2>
      {isUpdatingAircraft && (
        <>
          {data &&
            data.map((d) => (
              <AircraftForm
                key={d.key}
                aircraftDetails={d.aircraft}
                calculateIsValid={calculateIsValid}
                aircraftId={d.key}
                fetchData={fetchData}
                deleteAircraft={deleteAircraft}
                aircraftValuesString={aircraftValuesString}
                aircraftValuesNumber={aircraftValuesNumber}
              />
            ))}
        </>
      )}
    </>
  );
};
export default ManageAircraftForm;
