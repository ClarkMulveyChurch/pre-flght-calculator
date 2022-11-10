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
  const [isCreatingPerson, setIsCreatingPerson] = useState(false);
  const [isUpdatingPersons, setIsUpdatingPersons] = useState(false);

  async function fetchData() {
    const result = await dbActions.getPersons();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const calculateIsValid = (name, weight) => {
    return name !== "" && weight > 10 && weight < 600;
  };

  const addNewPerson = () => {
    if (!calculateIsValid(personDetails.name, personDetails.weight)) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
      dbActions.savePerson(personDetails);
      setPersonDetails({ name: "", weight: "" });
      fetchData();
    }
  };

  const deletePerson = (personId) => {
    dbActions.deletePerson(personId);
    fetchData();
  };

  return (
    <>
      <h2 onClick={() => setIsCreatingPerson(!isCreatingPerson)}>
        Create new pilot or passenger
      </h2>
      {isCreatingPerson && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewPerson();
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
                    weight: e.target.valueAsNumber
                      ? e.target.valueAsNumber
                      : "",
                  })
                }
              />
            </label>
            <input type="submit" value="Submit" />
            <>{!isValidData && <div>correct this plz</div>}</>
          </form>
        </>
      )}
      <h2 onClick={() => setIsUpdatingPersons(!isUpdatingPersons)}>Update existing pilot or passenger</h2>
      {isUpdatingPersons && (
        <>
          {data &&
            data.map((d) => (
              <PersonForm
                key={d.key}
                personDetails={{ name: d.name, weight: d.weight }}
                calculateIsValid={calculateIsValid}
                personId={d.key}
                fetchData={fetchData}
                deletePerson={deletePerson}
              />
            ))}
        </>
      )}
    </>
  );
};
export default ManagePersonsForm;
