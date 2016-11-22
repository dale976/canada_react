import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
  form: FormReducer,
  posts: postsReducer
});

export default rootReducer;
