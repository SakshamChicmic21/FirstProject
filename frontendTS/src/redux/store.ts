
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer/index.ts';

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware: any) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

export default store;