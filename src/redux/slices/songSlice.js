import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'song',
  initialState:{
    value:0
  },
  reducers: {
     setCurrSongIndex:(state,action)=>{
        state.value = action.payload
     }
  },
});

export const { setCurrSongIndex } = songSlice.actions;

export default songSlice.reducer;