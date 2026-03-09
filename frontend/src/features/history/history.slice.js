import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../shared/api/backend"


export const addHistory = createAsyncThunk(
  "history/add",
  async (movieId) => {

    const res = await backend.post("/user/watch-history",{ movieId })
    console.log(res);
    return res.data
  }
)


export const getHistory = createAsyncThunk(
  "history/get",
  async () => {

    const res = await backend.get("/user/watch-history")
    console.log(res);
    
    return res.data
  }
)


const historySlice = createSlice({

  name:"history",

  initialState:{
    list:[]
  },

  reducers:{},

  extraReducers:(builder)=>{

    builder

    .addCase(getHistory.fulfilled,(state,action)=>{
      state.list = action.payload.watchHistory
    })

  }

})

export default historySlice.reducer