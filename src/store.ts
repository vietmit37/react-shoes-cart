import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import app from './redux/app.slice';

export const store = configureStore({
  reducer: {
    app,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/*
app: {
  isSpinner: false
}

todo: {
  todos: [],
}

state: {
  app: {
    isSpinner: false
  },
  todo: {
    todos: [],
  }
}

const isSpinner = state.app.isSpinner;

*/
