import React, { useState } from "react";

const PreflightChecklist = () => {
  const [checkboxState, setCheckboxState] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
  });

  const areAllValid = () => {
    return (
      checkboxState.question1 &&
      checkboxState.question2 &&
      checkboxState.question3 &&
      checkboxState.question4 &&
      checkboxState.question5 &&
      checkboxState.question6 &&
      checkboxState.question7 &&
      checkboxState.question8 &&
      checkboxState.question9
    );
  };

  return (
    <>
      {areAllValid(checkboxState) ? <div>Valid</div> : <div>Not Valid</div>}
      <input
        type="checkbox"
        checked={checkboxState.question1}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question1: e.target.checked });
        }}
      ></input>
      <label>Have you Checked NOTAM's and TFR's today?</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question2}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question2: e.target.checked });
        }}
      ></input>
      <label>Do you have the current and forecasted Weather?</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question3}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question3: e.target.checked });
        }}
      ></input>
      <label>Have you completed the PAVE and IMSAFE checklist?</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question4}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question4: e.target.checked });
        }}
      ></input>
      <label>Is the Aircraft in an Airworthy Condition?</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question5}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question5: e.target.checked });
        }}
      ></input>
      <label>Are all the required documents on board the aircraft you intend to fly? (ARROW)</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question6}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question6: e.target.checked });
        }}
      ></input>
      <label>Are you in compliance with FAR91.103? (Runway Length)</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question7}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question7: e.target.checked });
        }}
      ></input>
      <label>Have you checked the Local Safety Board?</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question8}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question8: e.target.checked });
        }}
      ></input>
      <label>Do you have enough Fuel and Fuel reserve for the intended flight?</label>
      <br />

      <input
        type="checkbox"
        checked={checkboxState.question9}
        onChange={(e) => {
          setCheckboxState({ ...checkboxState, question9: e.target.checked });
        }}
      ></input>
      <label>Are all required endorsements current?</label>
      <br />
    </>
  );
};
export default PreflightChecklist;
