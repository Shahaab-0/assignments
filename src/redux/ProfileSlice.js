import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {makeApiRequest} from '../common/MakeApiCall';
const TOKEN = '208edc994a9558afc6d95a741b5cf10dbffd5399';
const URL =
  'http://dev.justicepoker.com/api/v1/gameplay/available-game-table-category/?game_table_tag=2';

export const getTableData = createAsyncThunk(
  //Slice name/function name
  'profile/getTableData',
  async (data, thunkAPI) => {
    //makeApiRequest is a common function to call api
    const response = await makeApiRequest()
      .get(URL, TOKEN, {
        headers: {Authorization: `Bearer ${TOKEN}`},
      })
      .catch(error => {
        console.log(error, 'error in getTableData');
      });

    console.log(response.data, '>>>>>>');
    if (response.data.success) {
      return response.data.success;
    }
  },
);

export const profileSlice = createSlice({
  //name of this slice has to be unique and is used to call its variables in component
  name: 'Profile',
  initialState: {
    loadingToggle: false,
  },
  reducers: {
    // setFeedbackStatus: (state, {payload}) => {
    //   state.feedbackStatus = payload;
    // },
    //state update function without api call can be called here
  },
  extraReducers: {
    //.fullfilled runs when the api call is successful
    // [getProfileDetail.fulfilled]: (state, {payload}) => {
    //   state.loadingToggle = false;
    //   state.profileDetail = payload;
    // },
    // [getProfileDetail.pending]: (state, {payload}) => {
    //   state.loadingToggle = true;
    // },
    // [getProfileDetail.rejected]: (state, {payload}) => {
    //   state.loadingToggle = false;
    // },
  },
});
export const {} = profileSlice.actions;
export default profileSlice.reducer;
