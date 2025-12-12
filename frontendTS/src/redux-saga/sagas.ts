// Redux Saga is a middleware library for Redux that manages side effects, such as asynchronous API calls, in an application. It uses JavaScript generator functions to handle complex asynchronous flows, making them easier to test and manage. Instead of directly performing side effects, sagas use a declarative "effect" to describe them, which can then be orchestrated to create more sophisticated logic. 
// Key concepts
// Side effects: Actions in Redux are typically synchronous, but applications need to handle operations like data fetching or accessing browser storage, which are known as side effects.
// Middleware: Redux Saga acts as middleware, sitting between actions being dispatched and the reducers, allowing it to intercept and handle these side effects.
// Generators: Sagas use JavaScript generators to manage these side effects. By yielding effects (like call for a function or put for dispatching an action), sagas can pause their execution, handle the asynchronous task, and then resume.
// Effects: Sagas use declarative "effects" to describe the desired side effect. For example, yield call(api.fetchUser(userId)) describes a call to an API, while yield put({ type: 'USER_FETCH_SUCCEEDED' }) describes dispatching a new action.
// Testability: This declarative approach with effects makes testing easier. You can test the logic of a saga by simply checking that it yields the correct effect, without having to mock a real API or asynchronous function.
// Comparison to Redux Thunk: Redux Saga is often contrasted with Redux Thunk. While both handle side effects, Redux Thunk typically requires you to write functions that return promises. Redux Saga's generator-based approach is considered more powerful and better suited for complex, long-running asynchronous flows. 
// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from './api'
// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action: { payload: { userId: string | number } }): Generator<any, void, any> {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId)
//     yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: (e as Error).message })
//   }
// }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga(): Generator<any, void, any> {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
// }

// /*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga(): Generator<any, void, any> {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

// export default mySaga

