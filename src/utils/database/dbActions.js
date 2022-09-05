import { getDatabase, ref, set, onValue } from "firebase/database";

const database = getDatabase();

function writeUserData(userId, name, email, phone) {
  const ref = ref(database, "users/" + userId);

  set(ref, {
    username: name,
    email: email,
    phone: phone,
  });
}

function getUserById (userId) {
    const userRef = ref(database, "users/" + userId);
    
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        console.log('data', data);
        console.log('email', data.email);
        console.log('phone', data.phone);
        console.log('username', data.username);
    })
}

const dbActions = {
  writeUserData: writeUserData,
  getUserById: getUserById,
};

export default dbActions;
