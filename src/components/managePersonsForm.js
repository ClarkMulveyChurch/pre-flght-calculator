import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/dataContext";
import dbActions from "../utils/database/dbActions";
import PersonForm from "./personForm";

const ManagePersonsForm = () => {
  const [personDetails, setPersonDetails] = useState({
    name: "",
    weight: "",
  });
  const [data, actions] = useContext(DataContext);
  const [isValidData, setIsValidData] = useState(true);
  const [isCreatingPerson, setIsCreatingPerson] = useState(false);
  const [isUpdatingPersons, setIsUpdatingPersons] = useState(false);

  useEffect(() => {
    actions.fetchData();
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
      if (!navigator.onLine) {
        actions.addOfflinePerson(personDetails);
      } else {
        actions.fetchData();
      }
    }
  };

  const deletePerson = (personId) => {
    dbActions.deletePerson(personId);
    actions.fetchData();
  };

  return (
    <>
      <h2
        onClick={() => {
          setIsValidData(true);
          setIsCreatingPerson(!isCreatingPerson);
        }}
      >
        Create new pilot or passenger
      </h2>
      {isCreatingPerson && (
        <>
          <div className="formContainer">
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
                    setPersonDetails({
                      ...personDetails,
                      name: e.target.value,
                    });
                  }}
                />
              </label>
              <br />
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
              <br />
              <input type="submit" value="Submit" className="formAddButton" />
              <>{!isValidData && <div>Please enter correct information</div>}</>
            </form>
          </div>
        </>
      )}
      {navigator.onLine && (
        <>
          <h2 onClick={() => setIsUpdatingPersons(!isUpdatingPersons)}>
            Update existing pilot or passenger
          </h2>
          {isUpdatingPersons && (
            <div className="formContainer">
              {data.personData &&
                data.personData.map((d) => (
                  <div className="editContainer">
                    <PersonForm
                      key={d.key}
                      personDetails={{ name: d.name, weight: d.weight }}
                      calculateIsValid={calculateIsValid}
                      personId={d.key}
                      fetchData={actions.fetchData}
                      deletePerson={deletePerson}
                    />
                  </div>
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default ManagePersonsForm;
