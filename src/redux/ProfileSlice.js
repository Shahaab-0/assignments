import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {makeApiRequest} from '../common/MakeApiCall';
const TOKEN = '208edc994a9558afc6d95a741b5cf10dbffd5399';
const URL =
  'http://dev.justicepoker.com/api/v1/gameplay/available-game-table-category/?game_table_tag=2';

export const getTableData = createAsyncThunk(
  'profile/getTableData',
  async (data, thunkAPI) => {
    const response = await makeApiRequest()
      .get(
        'http://dev.justicepoker.com/api/v1/gameplay/available-game-table-category/?game_table_tag=2',
        {
          headers: {Authorization: `Token ${TOKEN}`},
        },
      )
      .catch(error => {
        console.log(error, 'error in getTableData');
      });

    console.log(response.data, '>>>>>>');
    return response.data;
  },
);

export const profileSlice = createSlice({
  name: 'Profile',
  initialState: {
    loadingToggle: false,
    tableData: [],
  },
  reducers: {
    // setFeedbackStatus: (state, {payload}) => {
    //   state.feedbackStatus = payload;
    // },
    //state update function without api call can be called here
  },
  extraReducers: {
    [getTableData.fulfilled]: (state, {payload}) => {
      state.loadingToggle = false;
      state.tableData = payload;
    },
    [getTableData.pending]: (state, {payload}) => {
      state.loadingToggle = true;
    },
    [getTableData.rejected]: (state, {payload}) => {
      state.loadingToggle = false;
    },
  },
});
export const {} = profileSlice.actions;
export default profileSlice.reducer;
