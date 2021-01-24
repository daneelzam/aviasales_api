import { call, put, takeEvery } from 'redux-saga/effects';
import { authSucsessAC } from '../Redux/actionCreators/authAC';
import { FETCH_USERS } from '../Redux/types';

async function fetchJSON(payload) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const serverData = await res.json();
  if (serverData.email === payload.email && serverData.name === payload.password) {
    return serverData;
  }
  return false;
}

function* authWorker({ payload }) {
  const serverData = yield call(fetchJSON, payload);
  if (serverData) yield put(authSucsessAC(serverData));
}

function* authWatcher() {
  yield takeEvery(FETCH_USERS, authWorker);
}

export default authWatcher;
