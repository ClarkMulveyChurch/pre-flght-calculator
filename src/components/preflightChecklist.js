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
      <h3>Safety Assessment Questionnaire</h3>
      <div className="summaryContainer">
        {areAllValid(checkboxState) ? (
          <h4 className="validHeader">Valid</h4>
        ) : (
          <h4 className="invalidHeader">Not Valid</h4>
        )}
        <input
          type="checkbox"
          checked={checkboxState.question1}
          onChange={(e) => {
            setCheckboxState({ ...checkboxState, question1: e.target.checked });
          }}
        ></input>
        <label>
          Have you Checked{" "}
          <span className="tooltip">
            NOTAM's
            <span className="tooltiptext">
              Notice to airman - notams.aim.faa.gov
            </span>
          </span>{" "}
          and{" "}
          <span className="tooltip">
            TFR's today?
            <span className="tooltiptext">
              Temporary Flight Restrictions - tfr.faa.gov
            </span>
          </span>
        </label>
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
        <label>
          Have you completed the{" "}
          <span className="tooltip">
            PAVE
            <span className="tooltiptext">
              Pilot
              <br />
              Aircraft
              <br />
              enVironment
              <br />
              External Pressures
            </span>
          </span>{" "}
          and{" "}
          <span className="tooltip">
            IMSAFE
            <span className="tooltiptext">
              Illness
              <br />
              Medication: 24 hours bottle x5
              <br />
              Stress
              <br />
              Alcohol: 8 hours bottle to throttle
              <br />
              Fatigue
              <br />
              Eating: good diet
            </span>
          </span>{" "}
          checklist?
        </label>
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
        <label>
          Are all the required documents on board the aircraft you intend to
          fly? (
          <span className="tooltip">
            ARROW
            <span className="tooltiptext">
              Airworthiness Certificate
              <br />
              Registration
              <br />
              Radio Operator Licence
              <br />
              Operating Limitations
              <br />
              Weight and Balance Data
            </span>
          </span>
          )
        </label>
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
        <label>
          Do you have enough Fuel and Fuel reserve for the intended flight?
        </label>
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
      </div>
    </>
  );
};
export default PreflightChecklist;
