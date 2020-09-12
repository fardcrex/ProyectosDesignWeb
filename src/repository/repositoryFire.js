import firebase from "../fire";
let db = firebase.firestore();
console.log(db);

export async function getNotes() {
  let querySnapshot = await db.collection("notas").get();
  let array = [];
  querySnapshot.forEach(doc => {
    array.push({ _id: doc.id, ...doc.data() });
  });
  console.log(array);
  array.forEach(nota => {
    nota.createdAt = nota.createdAt.toDate();
    nota.updatedAt = nota.updatedAt.toDate();
  });
  return array;
}

export function deleteNote(id) {
  return db
    .collection("notas")
    .doc(id)
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
    })
    .catch(err => Promise.reject(err.message));
}
export async function createNote(data) {
  const dataToSend = { createdAt: new Date(), updatedAt: new Date(), ...data };
  const response = await db.collection("notas").add(dataToSend);
  return {
    note: {
      _id: response.id,
      ...dataToSend
    }
  };
}

export async function updateNote(data, id) {
  console.log(data);
  const dataToSend = {
    updatedAt: new Date(),
    ...data
  };

  return db
    .collection("notas")
    .doc(id)
    .update(dataToSend)
    .then(function() {
      console.log("Document successfully updated!");
      return {
        note: {
          ...dataToSend
        }
      };
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}
