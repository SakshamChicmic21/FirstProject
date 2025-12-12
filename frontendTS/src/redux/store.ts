import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";
// import createSagaMiddleware from 'redux-saga'
// import mySaga from '../redux-saga/sagas.ts';

// const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  // middleware: (getDefaultMiddleware: any) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// sagaMiddleware.run(mySaga)
export default store;
