import React, { } from "react";

const Row = ({rowName}) => {
  return (
    <tr>
      <td>{rowName}</td>
      <td><input type="number"/></td>
      <td><input type="number"/></td>
      <td><input type="number"/></td>
    </tr>
  );
};

const calculatorTable = () => {

  const rows = [
    "Aircraft",
    "Pilot & Front Pass",
    "Mid Passengers",
    "Rear Passengers",
    "Aft Bag #1",
    "Aft Bag #2",
    "Fuel (6 lbs per Gal)",
  ];

  const handleSubmit = () => {
    console.log("YESSIR");
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
          <table>
            <tr>
              <th></th>
              <th>Weight</th>
              <th>Arm</th>
              <th>Moment</th>
            </tr>
            {rows.map(r => <Row key={1} rowName={r}/>)}
          </table>
        </>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default calculatorTable;
