import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'song',
  initialState:{
    value:null
  },
  reducers: {
     setCurrSong:(state,action)=>{
        state.value = action.payload
     }
  },
});

export const { setCurrSong } = songSlice.actions;

export default songSlice.reducer;