/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  isSpinner: boolean,
  modalError: {
    isOpen: boolean,
    content: string
  }
}

const initialState: IAppState = {
  isSpinner: false,
  modalError: {
    isOpen: false,
    content: '',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isSpinner = action.payload;
    },
    showError(state, action: PayloadAction<{ isOpen: boolean, content: string }>) {
      state.modalError.isOpen = action.payload.isOpen;
      state.modalError.content = action.payload.content;
    },
  },
});

export const { setLoading, showError } = appSlice.actions;
export default appSlice.reducer;
