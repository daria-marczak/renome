import { all } from 'redux-saga/effects';
import { blogSagas } from '../components/blog/logic/blogSagas';

export default function* root() {
  yield all([blogSagas()]);
}
