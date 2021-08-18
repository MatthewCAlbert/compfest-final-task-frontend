import { fork } from 'redux-saga/effects';
import watchers from './watchers';

export default function* startForeman() {
  yield fork(watchers);
}