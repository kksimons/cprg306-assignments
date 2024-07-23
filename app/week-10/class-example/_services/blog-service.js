import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../_utils/firebase";

//blogPostObj key-value pair
export default async function dbAddBlogPost(userId, blogPostObj) {
  try {
    //reference to collections only, so no postId in here
    const newBlogPostReference = collection(db, "users", userId, "blog-posts");
    //what's going to autogenerate the id for us
    const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
    //if i can see the id I know it worked
    console.log(newBlogPostPromise.id);
  } catch (error) {
    console.log(error);
  }
}

//get all of the posts from a collection
export async function dbGetAllPosts(userId, updatePostList) {
  try {
    const collectionReference = collection(db, "users", userId, "blog-posts");
    const blogPostQuery = query(collectionReference);
    const querySnapshot = await getDocs(blogPostQuery);
    let blogPostList = [];
    //to get all our blog posts
    querySnapshot.forEach((doc) => {
      let thisPost = {
        id: doc.id,
        //gets all the data from inside the document (since the id is the metadata of the row obj)
        ...doc.data(),
      };
      blogPostList.push(thisPost);
    });
    updatePostList(blogPostList);
  } catch (error) {
    console.log(error);
  }
}

//referencing a document instead of a collection now
export async function dbGetPost(userId, postId, updateBlogPost) {
  try {
    const docRef = doc(db, "users", userId, "blog-posts", postId);
    const documentSnapshot = await getDoc(docRef);
    if (documentSnapshot.exists()) {
      //create an object with the data of that post and putting it into setter
      updateBlogPost(documentSnapshot.data());
    } else {
      console.log("This post does not exist");
    }
  } catch (error) {
    console.log(error);
  }
}
