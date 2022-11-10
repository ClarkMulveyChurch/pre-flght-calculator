import React, { useState } from "react";
import dbActions from "../utils/database/dbActions";

const AircraftForm = ({
  aircraftDetails,
  calculateIsValid,
  aircraftId,
  fetchData,
  deleteAircraft,
  aircraftValuesString,
  aircraftValuesNumber,
}) => {
  const [updateAircraftDetails, setUpdateAircraftDetails] =
    useState(aircraftDetails);
  const [isValidData, setIsValidData] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  async function editAircraft() {
    if (!calculateIsValid(updateAircraftDetails)) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
      await dbActions.updateAircraft(updateAircraftDetails, aircraftId);
      setIsEditing(false);
      fetchData();
    }
  }

  return (
    <>
      {isEditing ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editAircraft();
            }}
          >
            {aircraftValuesString.map((v) => {
              return (
                <>
                  <label key={aircraftValuesString.indexOf(v)}>
                    {v}:
                    <input
                      type="text"
                      value={updateAircraftDetails[v]}
                      onChange={(e) => {
                        setUpdateAircraftDetails({
                          ...updateAircraftDetails,
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
                      value={updateAircraftDetails[v]}
                      onChange={(e) => {
                        setUpdateAircraftDetails({
                          ...updateAircraftDetails,
                          [v]: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <br />
                </>
              );
            })}
            <input type="submit" value="Submit" />
            <>{!isValidData && <div>correct this plz</div>}</>
          </form>
          <input
            type="button"
            value="Cancel"
            onClick={() => {
              setUpdateAircraftDetails(aircraftDetails);
              setIsEditing(false);
              setIsValidData(true);
            }}
          />
        </>
      ) : (
        <>
          <div>{aircraftDetails.nickname}</div>
          <input
            type="button"
            value="Edit"
            onClick={() => setIsEditing(true)}
          />
        </>
      )}
      <input
        type="button"
        value="Delete"
        onClick={() => deleteAircraft(aircraftId)}
      />
    </>
  );
};
export default AircraftForm;
