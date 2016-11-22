import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_ALL_POSTS,
  FETCH_POST,
  FETCH_POST_HERO,
  CREATE_POST,
  DELETE_POST,
  PHOTO_UPLOAD,
  USER_SIGNED_IN,
  SIGN_IN
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_POSTS:
      return { ...state, all: action.payload };

    case FETCH_ALL_POSTS:
      return { ...state, posts: action.payload };

    case FETCH_POST:
      return { ...state, post: action.payload, key: action.key };

    case FETCH_POST_HERO:
      return { ...state, heroItem: action.payload };

    case CREATE_POST:
      return { ...state, ...action.payload };

    case DELETE_POST:
      return _.omit(state, action.payload);

    case PHOTO_UPLOAD:
      return { ...state, image: action.payload };

    case USER_SIGNED_IN:
      return { ...state, auth: action.payload };

    case SIGN_IN:
      return { ...state, auth: action.payload };
  }

  return state;
}
