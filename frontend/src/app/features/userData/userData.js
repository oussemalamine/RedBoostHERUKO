import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../../axiosInstance'

export const loadUserData = createAsyncThunk(
  'userData/loadCurrentUser',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('https://redboost-65f83dc8cbf1.herokuapp.com/loadCurrentUser', {
        email: email,
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const updateUserData = createAsyncThunk(
  'userData/updateUser',
  async (userId,userData, { rejectWithValue }) => {
    console.log("updating current user")
    try {
      const response = await axiosInstance.put(`https://redboost-65f83dc8cbf1.herokuapp.com/updateUser/${userId}`, userData)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserData.fulfilled, (state, action) => {
        state.userData = action.payload
      })
      .addCase(loadUserData.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(loadUserData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.userData = action.payload
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(updateUserData.pending, (state) => {
        state.status = 'loading'
      })
  },
})
export const { setUserData } = userDataSlice.actions
export default userDataSlice.reducer
