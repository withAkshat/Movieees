import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../shared/api/backend.js"


export const addFavorite = createAsyncThunk(
  "favorites/add",
  async (movieId) => {

    const res = await backend.post("/user/favorite", { movieId })

    return res.data
  }
)


export const getFavorites = createAsyncThunk(
  "favorites/get",
  async () => {

    const res = await backend.get("/user/favorite")
    console.log(res);
    
    return res.data
  }
)


export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async (movieId) => {

    const res = await backend.delete("/user/favorites",{
      data:{ movieId }
    })

    return res.data
  }
)


const favoriteSlice = createSlice({

  name:"favorites",

  initialState:{
    list:[]
  },

  reducers:{},

  extraReducers:(builder)=>{

    builder

    .addCase(getFavorites.fulfilled,(state,action)=>{     
      state.list = action.payload.userFavorites
    })

    .addCase(addFavorite.fulfilled,(state,action)=>{
      state.list = action.payload
    })

    .addCase(removeFavorite.fulfilled,(state,action)=>{
      state.list = action.payload
    })

  }

})

export default favoriteSlice.reducer