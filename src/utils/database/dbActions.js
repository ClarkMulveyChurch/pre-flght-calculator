import { getDatabase, ref, set, onValue, get } from "firebase/database";
import _ from 'lodash';

const database = getDatabase();

function savePerson(personDetails) {
  const dbRef = ref(database, "persons/" + parseInt(Date.now()));

  set(dbRef, {
    name: personDetails.name,
    weight: personDetails.weight,
  })
}

function updatePerson(name, weight, personId) {
  const dbRef = ref(database, "persons/" + personId);

  set(dbRef, {
    name: name,
    weight: weight,
  })
}

async function getPersons() {
  const snapshot = await get(ref(database, "persons"));
  var persons = [];
  snapshot.forEach((d) => {
    var value = d.val();
    persons.push({key: d.key, name: value.name, weight: value.weight});
  })
  return persons;
}

const dbActions = {
  savePerson: savePerson,
  updatePerson: updatePerson,
  getPersons: getPersons,
};

export default dbActions;
