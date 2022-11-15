import React, { useState, useEffect } from "react";

const CalculatorTable = ({
  pilotFrontPassWeight,
  rearPassWeight,
  aircraftData,
}) => {
  const initialState = {
    aircraft: {
      weight: 0,
      arm: 0,
    },
    pilotFrontPass: {
      weight: 0,
      arm: 0,
    },
    rearPass: {
      weight: 0,
      arm: 0,
    },
    aftBagOne: {
      weight: 0,
      arm: 0,
    },
    aftBagTwo: {
      weight: 0,
      arm: 0,
    },
    fuel: {
      weight: 0,
      arm: 0,
    },
    maxGrossWeight: 0,
    cgLimitsForward: 0,
    cgLimitsAft: 0,
  };

  console.log("aircraftData", aircraftData);
  const [tableEntries, setTableEntries] = useState(initialState);

  const getTotalWeight = () => {
    return (
      tableEntries.aircraft.weight * 1 +
      tableEntries.pilotFrontPass.weight * 1 +
      tableEntries.rearPass.weight * 1 +
      tableEntries.aftBagOne.weight * 1 +
      tableEntries.aftBagTwo.weight * 1 +
      tableEntries.fuel.weight * 1
    );
  };

  const getTotalMoment = () => {
    return (
      tableEntries.aircraft.weight * tableEntries.aircraft.arm * 1 +
      tableEntries.pilotFrontPass.weight * tableEntries.pilotFrontPass.arm * 1 +
      tableEntries.rearPass.weight * tableEntries.rearPass.arm * 1 +
      tableEntries.aftBagOne.weight * tableEntries.aftBagOne.arm * 1 +
      tableEntries.aftBagTwo.weight * tableEntries.aftBagTwo.arm * 1 +
      tableEntries.fuel.weight * tableEntries.fuel.arm * 1
    );
  };

  const getCgLimits = () => {
    return getTotalMoment() / getTotalWeight();
  };

  useEffect(() => {
    setTableEntries({
      ...tableEntries,
      pilotFrontPass: {
        weight: pilotFrontPassWeight ? pilotFrontPassWeight : 0,
        arm: tableEntries.pilotFrontPass.arm,
      },
    });
  }, [pilotFrontPassWeight]);

  useEffect(() => {
    setTableEntries({
      ...tableEntries,
      rearPass: {
        weight: rearPassWeight ? rearPassWeight : 0,
        arm: tableEntries.rearPass.arm,
      },
    });
  }, [rearPassWeight]);

  useEffect(() => {
    setTableEntries({
      ...tableEntries,
      aircraft: {
        weight: aircraftData?.weight ? aircraftData?.weight : 0,
        arm: aircraftData?.armAircraftArm ? aircraftData?.armAircraftArm : 0,
      },
      pilotFrontPass: {
        weight: tableEntries.pilotFrontPass.weight,
        arm: aircraftData?.armPilotAndFrontPass
          ? aircraftData?.armPilotAndFrontPass
          : 0,
      },
      rearPass: {
        weight: tableEntries.rearPass.weight,
        arm: aircraftData?.armRearPass ? aircraftData?.armRearPass : 0,
      },
      aftBagOne: {
        weight: tableEntries.aftBagOne.weight,
        arm: aircraftData?.armAftBagOne ? aircraftData?.armAftBagOne : 0,
      },
      aftBagTwo: {
        weight: tableEntries.aftBagTwo.weight,
        arm: aircraftData?.armAftBagTwo ? aircraftData?.armAftBagTwo : 0,
      },
      fuel: {
        weight: tableEntries.fuel.weight,
        arm: aircraftData?.armFuel ? aircraftData?.armFuel : 0,
      },
      maxGrossWeight: aircraftData?.maxGrossWeight
        ? aircraftData?.maxGrossWeight
        : 0,
      cgLimitsForward: aircraftData?.cgLimitsForward
        ? aircraftData?.cgLimitsForward
        : 0,
      cgLimitsAft: aircraftData?.cgLimitsAft
        ? aircraftData?.cgLimitsAft
        : 0,
    });
  }, [aircraftData]);

  const handleChange = (row, prop, e) => {
    setTableEntries({
      ...tableEntries,
      [row]: {
        ...tableEntries[row],
        [prop]: e.target.value,
      },
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Weight</th>
            <th>Arm</th>
            <th>Moment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{"aircraft"}</td>
            <td>
              <input
                type="number"
                id={"aircraftWeight"}
                value={tableEntries["aircraft"]?.weight}
                onChange={(e) => handleChange("aircraft", "weight", e)}
              />
            </td>
            <td>
              <input
                type="number"
                id={"aircraftArm"}
                value={tableEntries["aircraft"]?.arm}
                onChange={(e) => handleChange("aircraft", "arm", e)}
              />
            </td>
            <td>
              {tableEntries["aircraft"]?.weight * tableEntries["aircraft"]?.arm}
            </td>
          </tr>
          <tr>
            <td>{"pilotFrontPass"}</td>
            <td>
              <input
                type="number"
                id={"pilotFrontPassWeight"}
                value={tableEntries["pilotFrontPass"]?.weight}
                onChange={(e) => handleChange("pilotFrontPass", "weight", e)}
              />
            </td>
            <td>
              <input
                type="number"
                id={"pilotFrontPassArm"}
                value={tableEntries["pilotFrontPass"]?.arm}
                onChange={(e) => handleChange("pilotFrontPass", "arm", e)}
              />
            </td>
            <td>
              {tableEntries["pilotFrontPass"]?.weight *
                tableEntries["pilotFrontPass"]?.arm}
            </td>
          </tr>
          <tr>
            <td>{"rearPass"}</td>
            <td>
              <input
                type="number"
                id={"rearPassWeight"}
                value={tableEntries["rearPass"]?.weight}
                onChange={(e) => handleChange("rearPass", "weight", e)}
              />
            </td>
            <td>
              <input
                type="number"
                id={"rearPassArm"}
                value={tableEntries["rearPass"]?.arm}
                onChange={(e) => handleChange("rearPass", "arm", e)}
              />
            </td>
            <td>
              {tableEntries["rearPass"]?.weight * tableEntries["rearPass"]?.arm}
            </td>
          </tr>
          <tr>
            <td>{"aftBagOne"}</td>
            <td>
              <input
                type="number"
                id={"aftBagOneWeight"}
                value={tableEntries["aftBagOne"]?.weight}
                onChange={(e) => handleChange("aftBagOne", "weight", e)}
              />
            </td>
            <td>
              <input
                type="number"
                id={"aftBagOneArm"}
                value={tableEntries["aftBagOne"]?.arm}
                onChange={(e) => handleChange("aftBagOne", "arm", e)}
              />
            </td>
            <td>
              {tableEntries["aftBagOne"]?.weight *
                tableEntries["aftBagOne"]?.arm}
            </td>
          </tr>
          <tr>
            <td>{"aftBagTwo"}</td>
            <td>
              <input
                type="number"
                id={"aftBagTwoWeight"}
                value={tableEntries["aftBagTwo"]?.weight}
                onChange={(e) => handleChange("aftBagTwo", "weight", e)}
              />
            </td>
            <td>
              <input
                type="number"
                id={"aftBagTwoArm"}
                value={tableEntries["aftBagTwo"]?.arm}
                onChange={(e) => handleChange("aftBagTwo", "arm", e)}
              />
            </td>
            <td>
              {tableEntries["aftBagTwo"]?.weight *
                tableEntries["aftBagTwo"]?.arm}
            </td>
          </tr>
          <tr>
            <td>{"fuel"}</td>
            <td>
              <input
                type="number"
                id={"fuelWeight"}
                value={tableEntries["fuel"]?.weight}
                onChange={(e) => handleChange("fuel", "weight", e)}
              />
            </td>
            <td>
              <input
                type="number"
                id={"fuelArm"}
                value={tableEntries["fuel"]?.arm}
                onChange={(e) => handleChange("fuel", "arm", e)}
              />
            </td>
            <td>{tableEntries["fuel"]?.weight * tableEntries["fuel"]?.arm}</td>
          </tr>
          <tr>
            <td>{"total"}</td>
            <td>{getTotalWeight()}</td>
            <td> </td>
            <td>{getTotalMoment()}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>Is Aircraft Within Weight</h3>
        <label>
          Max Gross Weight:
          <input
            type="number"
            value={tableEntries.maxGrossWeight}
            onChange={(e) => {
              setTableEntries({
                ...tableEntries,
                maxGrossWeight: e.target.value,
              });
            }}
          />
        </label>
        <p>Actual Weight: {getTotalWeight()}</p>
        <p>Useful Load: {tableEntries.maxGrossWeight - getTotalWeight()}</p>
      </div>
      <div>
        <h3>Cg Limits</h3>
        <label>
          Forward
          <input
            type="number"
            value={tableEntries.cgLimitsForward}
            onChange={(e) => {
              setTableEntries({
                ...tableEntries,
                maxGrossWeight: e.target.value,
              });
            }}
          />
        </label><br/>
        <label>
          Aft
          <input
            type="number"
            value={tableEntries.cgLimitsAft}
            onChange={(e) => {
              setTableEntries({
                ...tableEntries,
                maxGrossWeight: e.target.value,
              });
            }}
          />
        </label>
        <p>Actual: {getCgLimits() ? getCgLimits() : 0}</p>
      </div>
    </>
  );
};
export default CalculatorTable;
