import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

//This async function retrieves all items for a specific user from Firestore.
//It takes a userId as a parameter, and uses it to query a subcollection named items
//under a document in the users collection with the same userId.
//It fetches the documents in the items subcollection, and for each document,
//it adds an object to the items array containing the document ID and data.
//It then returns this items array.
export async function dbAddItem(userId, itemObj) {
  try {
    const newItemsReference = collection(db, "users", userId, "items");
    // Add the new item to the subcollection and get the document reference
    const newItemPromise = await addDoc(newItemsReference, itemObj);
    console.log("Item added with ID: ", newItemPromise.id);
    console.log(newItemPromise.id);
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}

//This function adds a new item to a specific user's list of items in Firestore.
//It takes a userId and an item as parameters.
//It uses the userId to reference the items subcollection of a document in the users collection,
//and then adds the item to this subcollection.
//returns the id of the newly created document.
export async function dbGetAllItems(userId) {
  try {
    const collectionReference = collection(db, "users", userId, "items");
    const itemsQuery = query(collectionReference);
    const querySnapshot = await getDocs(itemsQuery);
    let itemsList = [];
    querySnapshot.forEach((doc) => {
      let item = {
        id: doc.id,
        ...doc.data(),
      };
      itemsList.push(item);
    });
    console.log("Items retrieved: ", itemsList);
    return itemsList;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
}

// Delete an item from a user's shopping list
export async function dbDeleteItem(userId, itemId) {
  try {
    const docRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(docRef);
    console.log(`Item ${itemId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting item: ", error);
  }
}
