import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../shared/api/backend"


export const loginUser = createAsyncThunk(
  "auth/login",
  async (data) => {

    const res = await backend.post("/auth/login", data)

    return res.data
  }
)


export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data) => {

    const res = await backend.post("/auth/signup", data)

    return res.data
  }
)


const authSlice = createSlice({

  name: "auth",

  initialState: {

    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null

  },

  reducers: {
    logout: (state) => {
      state.user = null,
      localStorage.removeItem("user")
    }
  },

  extraReducers: (builder) => {

    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload

        localStorage.setItem(
          "user",
          JSON.stringify(action.payload)
        )
      })

      .addCase(loginUser.rejected, (state) => {
        state.loading = false
        state.error = "Login failed"
      })

      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload
      })



  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer