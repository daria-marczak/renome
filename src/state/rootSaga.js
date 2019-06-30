import { all } from 'redux-saga/effects';
import { blogSagas } from '../components/blog/logic/blogSagas';
import { shopSagas } from '../components/shop/logic/shopSagas';

export default function* root() {
  yield all([blogSagas(), shopSagas()]);
}
