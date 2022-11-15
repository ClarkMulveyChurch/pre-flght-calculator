import { getDatabase, ref, set, onValue, get } from "firebase/database";
import _ from "lodash";

const database = getDatabase();

//////////// PERSON
function savePerson(personDetails) {
  const dbRef = ref(database, "persons/" + parseInt(Date.now()));

  set(dbRef, {
    name: personDetails.name,
    weight: personDetails.weight,
  });
}

function updatePerson(name, weight, personId) {
  const dbRef = ref(database, "persons/" + personId);

  set(dbRef, {
    name: name,
    weight: weight,
  });
}

async function deletePerson(personId) {
  const dbRef = ref(database, "persons/" + personId);

  set(dbRef, null);
}

async function getPersons() {
  const snapshot = await get(ref(database, "persons"));
  var persons = [];
  snapshot.forEach((d) => {
    var value = d.val();
    persons.push({ key: d.key, name: value.name, weight: value.weight });
  });
  return persons;
}

//////////// AIRCRAFT
function saveAircraft(aircraftDetails) {
  const dbRef = ref(database, "aircraft/" + parseInt(Date.now()));

  set(dbRef, aircraftDetails);
}

function updateAircraft(aircraftDetails, aircraftId) {
  const dbRef = ref(database, "aircraft/" + aircraftId);

  set(dbRef, aircraftDetails);
}

async function deleteAircraft(aircraftId) {
  const dbRef = ref(database, "aircraft/" + aircraftId);

  set(dbRef, null);
}

async function getAircraft() {
  const snapshot = await get(ref(database, "aircraft"));
  var aircraft = [];
  snapshot.forEach((d) => {
    var value = d.val();
    aircraft.push({ key: d.key, aircraft: value });
  });
  return aircraft;
}

const dbActions = {
  savePerson: savePerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
  getPersons: getPersons,
  saveAircraft: saveAircraft,
  updateAircraft: updateAircraft,
  deleteAircraft: deleteAircraft,
  getAircraft: getAircraft,
};

export default dbActions;
