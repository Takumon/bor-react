import { takeEvery, call, put } from "redux-saga/effects"
import {
  LOGIN_START_EVENT,
  loginFailureEvent,
  loginSuccessEvent,
  SIGNUP_START_EVENT,
  signUpSuccessEvent,
  signUpFailureEvent,
  LOGOUT_START_EVENT,
  logoutSuccessEvent,
  logoutFailureEvent,
  UPDATE_LOGIN_USER_START_EVENT,
  updateLoginUserFailureEvent,
  updateLoginUserSuccessEvent,
  LIST_USERS_START_EVENT,
  listUsersSuccessEvent,
  listUsersFailureEvent,
  GIFT_PRIZE_STRART_EVENT,
  giftPrizeSuccessEvent,
  giftPrizeFailureEvent,
  GET_PRIZE_STRART_EVENT,
  getPrizeSuccessEvent,
  getPrizeFailureEvent,
  
} from "../actions"
import UserService from "../libs/services/userService"
import PrizeBcService from "../libs/services/prizeBcService"



function* handleLogin() {
  yield takeEvery(LOGIN_START_EVENT, login)
}

function* login(action) {
  const payload = action.payload
  const { user, error } = yield call(UserService.loginAsync, payload.name, payload.password)
  if (!error) {
    yield put(loginSuccessEvent(user))
  } else {
    yield put(loginFailureEvent(error))
  }
}

function* handleSignUp() {
  yield takeEvery(SIGNUP_START_EVENT, signUp)
}

function* signUp(action) {
  const payload = action.payload
  const { user, error } = yield call(UserService.createAsync, payload.userCreateRequest)
  if (!error) {
    yield put(signUpSuccessEvent(user))
  } else {
    yield put(signUpFailureEvent(error))
  }
}

function* handleLogout() {
  yield takeEvery(LOGOUT_START_EVENT, logout)
}

function* logout(/*action*/) {
  const { error } = yield call(UserService.logoutAsync)
  if (!error) {
    yield put(logoutSuccessEvent())
  } else {
    yield put(logoutFailureEvent(error))
  }
}

function* handleUpdateLoginUser() {
  yield takeEvery(UPDATE_LOGIN_USER_START_EVENT, updateLoginUser)
}

function* updateLoginUser(action) {
  const payload = action.payload
  const { user, error } = yield call(UserService.updateAsync, payload.user)
  if (!error) {
    yield put(updateLoginUserSuccessEvent(user))
  } else {
    yield put(updateLoginUserFailureEvent(error))
  }
}


function* handleListUsers() {
  yield takeEvery(LIST_USERS_START_EVENT, listUsers)
}

function* listUsers(/*action*/) {
  const { users, error } = yield call(UserService.listAsync)
  if (!error) {
    yield put(listUsersSuccessEvent(users))
  } else {
    yield put(listUsersFailureEvent(error))
  }
}

function* handleGiftPrize() {
  yield takeEvery(GIFT_PRIZE_STRART_EVENT, giftPrize)
}

function* giftPrize(action) {
  const payload = action.payload

  const { error } = yield call(PrizeBcService.updateAsync, payload.user, payload.prize, payload.note)
  if (!error) {
    yield put(giftPrizeSuccessEvent())
  } else {
    yield put(giftPrizeFailureEvent(error))
  }
}

function* handleGetPrize() {
  yield takeEvery(GET_PRIZE_STRART_EVENT, getPrize)
}

function* getPrize(action) {
  const payload = action.payload

  const { prize, error } = yield call(PrizeBcService.getAsync, payload.getPrizeRequest)
  if (!error) {
    yield put(getPrizeSuccessEvent(prize))
  } else {
    yield put(getPrizeFailureEvent(error))
  }
}



export default class UserSagas {
  static sagaFunctions = () => {
    return [
      handleLogin,
      handleSignUp,
      handleLogout,
      handleUpdateLoginUser,
      handleListUsers,
      handleGiftPrize,
      handleGetPrize,
    ]
  }
}

