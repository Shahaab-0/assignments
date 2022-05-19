import {configureStore} from '@reduxjs/toolkit';
import ProfileSlice, {profileSlice} from './ProfileSlice';

export const store = configureStore({
  reducer: {
    profile: ProfileSlice,
  },
});
