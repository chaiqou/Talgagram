import { firebase, FieldValue } from "../lib/firebase";

// tu arsebobs username daabrune romelis lengthic metia 0_ze

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}
