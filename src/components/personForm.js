import React, { useState } from "react";
import dbActions from "../utils/database/dbActions";

const PersonForm = ({
  personDetails,
  calculateIsValid,
  personId,
  fetchData,
  deletePerson,
}) => {
  const [updatePersonDetails, setUpdatePersonDetails] = useState(personDetails);
  const [isValidData, setIsValidData] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  async function editPerson() {
    if (
      !calculateIsValid(updatePersonDetails.name, updatePersonDetails.weight)
    ) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
      await dbActions.updatePerson(
        updatePersonDetails.name,
        updatePersonDetails.weight,
        personId
      );
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
              editPerson();
            }}
          >
            <label>
              Name:
              <input
                type="text"
                value={updatePersonDetails.name}
                onChange={(e) => {
                  setUpdatePersonDetails({
                    ...updatePersonDetails,
                    name: e.target.value,
                  });
                }}
              />
            </label>
            <label>
              Weight:
              <input
                type="number"
                value={updatePersonDetails.weight}
                onChange={(e) =>
                  setUpdatePersonDetails({
                    ...updatePersonDetails,
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
          <input
            type="button"
            value="Cancel"
            onClick={() => {
              setUpdatePersonDetails(personDetails);
              setIsEditing(false);
              setIsValidData(true);
            }}
          />
        </>
      ) : (
        <>
          <div>{personDetails.name}</div>
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
        onClick={() => deletePerson(personId)}
      />
    </>
  );
};
export default PersonForm;
