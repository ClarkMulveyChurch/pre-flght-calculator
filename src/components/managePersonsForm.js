import React, { useState, useEffect } from "react";
import dbActions from "../utils/database/dbActions";
import PersonForm from "./personForm";

const ManagePersonsForm = () => {
  const [personDetails, setPersonDetails] = useState({
    name: "",
    weight: "",
  });
  const [isValidData, setIsValidData] = useState(true);
  const [data, setData] = useState([]);

  console.log("data", data);

  async function fetchData() {
    const result = await dbActions.getPersons();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const calculateIsValid = (name, weight) => {
    return (
      name !== "" &&
      weight > 10 &&
      weight < 600
    );
  };

  const handleSubmit = () => {
    if (!calculateIsValid(personDetails.name, personDetails.weight)) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
      dbActions.savePerson(personDetails);
      setPersonDetails({ name: "", weight: "" });
      fetchData();
    }
  };

  return (
    <>
      <h2>Create new pilot or passenger</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>
          Name:
          <input
            type="text"
            value={personDetails.name}
            onChange={(e) => {
              setPersonDetails({ ...personDetails, name: e.target.value });
            }}
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            value={personDetails.weight}
            onChange={(e) =>
              setPersonDetails({
                ...personDetails,
                weight: e.target.valueAsNumber ? e.target.valueAsNumber : "",
              })
            }
          />
        </label>
        <input type="submit" value="Submit" />
        <>{!isValidData && <div>correct this plz</div>}</>
        <input
          type="button"
          value="updateThatGuy"
          onClick={() => dbActions.updatePerson("Clark", 169, 1667804799981)}
        />
      </form>
      <h2>Update existing pilot or passenger</h2>
      <>
        {data &&
          data.map((d) => (
            <PersonForm
              key={d.key}
              personDetails={{ name: d.name, weight: d.weight }}
              calculateIsValid={calculateIsValid}
              personId={d.key}
              fetchData={fetchData}
            />
          ))}
      </>
    </>
  );
};
export default ManagePersonsForm;
