import Firebase from 'firebase';
import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_ALL_POSTS,
  FETCH_POST_HERO,
  FETCH_POST,
  DELETE_POST,
  CREATE_POST,
  PHOTO_UPLOAD,
  SIGN_IN,
  USER_SIGNED_IN
} from './types';

const config = {
  apiKey: 'AIzaSyDlxJniGokOhwnjDM1wJ2kFw7Z433mBN9E',
  authDomain: 'aradventures-2016.firebaseapp.com',
  databaseURL: 'https://aradventures-2016.firebaseio.com/',
  storageBucket: 'gs://aradventures-2016.appspot.com'
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const Posts = app.database().ref('/posts');
const Storage = app.storage();

// function to fetch all posts from the database. This will only return the last 6.
export function fetchPosts() {
  return dispatch => {
    Posts.limitToLast(11).on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

// function to fetch all blog posts
export function fetchAllPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
        dispatch({
          type: FETCH_ALL_POSTS,
          payload: snapshot.val()
        });
    });
  };
}

// function to fetch a single post based on post key
export function fetchPost(key) {
  return dispatch => {
    Posts.child(key).once('value', snapshot => {
      dispatch({
        type: FETCH_POST,
        payload: snapshot.val(),
        key: key
      });
    });
  };
}

// function to fetch the last post entered
export function fetchPostHeroItem() {
  return dispatch => {
    Posts.limitToLast(1).once('value', snapshot => {
      dispatch({
        type: FETCH_POST_HERO,
        payload: snapshot.val()
      });
    });
  };
}

// function to create a post. This will store any attached image into the database if one is attached.
export function createPost(post) {
  let storageRef;
  let image;
  let rdm = Math.round(Math.random() * 1000);

  if (post.image) {
    image = post.image[0];
    storageRef = Storage.ref('/pics/' + image.name + rdm);

    return dispatch => storageRef.put(image).then(snapshot => {
      post.img = snapshot.downloadURL;
      Posts.push(post);
    });

  } else {
    delete post.image;
    return dispatch => Posts.push(post).catch(function(error){
        alert('You must be logged in to create a post!');
    });
  }
}

// function to delete a post from the data base.
// todo - This might need to delete any assosiated image with the post?
export function deletePost(key) {
  return dispatch => Posts.child(key).remove().catch(function(error){
    alert('You must be logged in to delete a post!');
  });
}

// function to upload a single file into the storage. This will return a
// download url for that location
function uploadFile(file) {
  const storageRef = Storage.ref('/pics/' + file.name);
  return dispatch => storageRef.put(file).then(snapshot => {
    dispatch({
      type: PHOTO_UPLOAD,
      payload: snapshot.downloadURL
    });
  });
}

// function to check to see if a user is currently signed into the app
export function isSignedIn() {
  return dispatch => auth.onAuthStateChanged(function(user) {
    if (user) {
      dispatch({
        type: USER_SIGNED_IN,
        payload: user
      });
    } else {
      dispatch({
        type: USER_SIGNED_IN,
        payload: null
      });
    }
  });

}

// function to sign a user into the app
export function signIn(details) {
  return dispatch => auth.signInWithEmailAndPassword(details.email, details.password).catch(function(error){
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log('error signing in: code: ' + errorCode + ' message: ' + errorMessage);
    alert('Incorrect email or password');
  });
}

// function to sign out a user
export function signOut() {
  return dispatch => auth.signOut()
}