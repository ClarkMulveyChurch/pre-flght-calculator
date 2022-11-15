import React, { useState, useEffect } from "react";
import dbActions from "../utils/database/dbActions";
import CalculatorTable from "./calculatorTable";

const SelectPilotFrontPass = (setSelectedAircraft, personData) => {
  return (
    <select
      name="Persons"
      id="persons"
      onChange={(e) => {
        if (e.target.value === "default") {
          setSelectedAircraft(null);
        } else {
          setSelectedAircraft(
            personData.filter((a) => a.key === e.target.value)[0]
          );
        }
      }}
    >
      <option value="default">Default (No selected person)</option>
      {personData &&
        personData.map((e) => <option value={e.key}>{e.name}</option>)}
    </select>
  );
};
export default SelectPilotFrontPass;
