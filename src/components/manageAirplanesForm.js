import React, { useState } from "react";

const ManageAirplanesForm = () => {
  const [airplaneDetails, setAirplaneDetails] = useState({
    type: "",
    number: "",
    nickname: "",
    maxGrossWeight: "",
    weight: "",
    arm: {
      aftBagOne: "",
      aftBagTwo: "",
      aircraftArm: "",
      fuel: "",
      pilotAndFrontPass: "",
      rearPass: "",
    },
    cgLimits: {
      aft: "",
      forward: "",
    },
  });

  const airplaneValues = [
    "type",
    "number",
    "nickname",
    "massGrossWeight",
    "weight",
    "armAftBagOne",
    "armAftBagTwo",
    "armAircraftArm",
    "armFuel",
    "armPilotAndFrontPass",
    "armRearPass",
    "cgLimitsAft",
    "cgLimitsForward",
  ];

  const handleSubmit = () => {
    console.log(airplaneDetails);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <>
          {airplaneValues.map((v) => {
            return (
              <label key={airplaneValues.indexOf(v)}>
                {v}:
                <input
                  type="text"
                  value={airplaneDetails[v]}
                  onChange={(e) => {
                    setAirplaneDetails({
                      ...airplaneDetails,
                      // airplaneValues[v]: e.target.value,
                    });
                  }}
                />
              </label>
            );
          })}
        </>
        {/* <label>
          Type:
          <input
            type="text"
            value={airplaneDetails.type}
            onChange={(e) => {
              setAirplaneDetails({ ...airplaneDetails, type: e.target.value });
            }}
          />
        </label>
        <label>
          Number:
          <input
            type="text"
            value={airplaneDetails.number}
            onChange={(e) => {
              setAirplaneDetails({
                ...airplaneDetails,
                number: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Nickname:
          <input
            type="text"
            value={airplaneDetails.nickname}
            onChange={(e) => {
              setAirplaneDetails({
                ...airplaneDetails,
                nickname: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Max Gross Weight:
          <input
            type="text"
            value={airplaneDetails.maxGrossWeight}
            onChange={(e) => {
              setAirplaneDetails({
                ...airplaneDetails,
                maxGrossWeight: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            value={airplaneDetails.weight}
            onChange={(e) => {
              setAirplaneDetails({
                ...airplaneDetails,
                weight: e.target.value,
              });
            }}
          />
        </label> */}

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default ManageAirplanesForm;
