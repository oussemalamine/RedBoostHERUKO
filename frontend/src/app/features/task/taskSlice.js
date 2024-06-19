import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const loadTask = createAsyncThunk('task/loadTask', async (taskId, { rejectWithValue }) => {
  try {
    const response = await axios.post(`https://redboost-65f83dc8cbf1.herokuapp.com/loadTask/${taskId}`)
    return response.data
  } catch (error) {
    console.error('Error loading task:', error)
    return rejectWithValue(error.response.data)
  }
})

export const createTask = createAsyncThunk(
  'task/addTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://redboost-65f83dc8cbf1.herokuapp.com/addTask`, taskData)
      return response.data
    } catch (error) {
      console.error('Error creating task:', error)
      return rejectWithValue(error.response.data)
    }
  },
)

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://redboost-65f83dc8cbf1.herokuapp.com/deleteTask/${taskId}`)
      return response.data
    } catch (error) {
      console.error('Error deleting task:', error)
      return rejectWithValue(error.response.data)
    }
  },
)

export const loadTasks = createAsyncThunk('task/loadTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(`https://redboost-65f83dc8cbf1.herokuapp.com/loadTasks`)
    return response.data
  } catch (error) {
    console.error('Error loading tasks:', error)
    return rejectWithValue(error.response.data)
  }
})

export const loadTasksByActivityId = createAsyncThunk(
  'task/loadTasksByActivityId',
  async (activityId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://redboost-65f83dc8cbf1.herokuapp.com/loadTasksByActivityId/${activityId}`)
      return response.data
    } catch (error) {
      console.error('Error loading tasks by activity ID:', error)
      return rejectWithValue(error.response.data)
    }
  },
)

export const updateTask = createAsyncThunk(
  'task/updateTask',
  async ({ taskId, taskData }, { rejectWithValue }) => {
    try {
      console.log('Updating task with ID:', taskId)
      console.log('Task data:', taskData)
      const response = await axios.put(`https://redboost-65f83dc8cbf1.herokuapp.com/updateTask/${taskId}`, taskData)
      console.log('Update response:', response.data)
      return response.data
    } catch (error) {
      console.error('Error updating task:', error)
      return rejectWithValue(error.response.data)
    }
  },
)

export const fetchTasksByUser = createAsyncThunk(
  'task/fetchTasksByUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://redboost-65f83dc8cbf1.herokuapp.com/tasksByUser', { userId });
      console.log('API Response:', response.data); // Log response data
      return response.data.tasks; // Assuming response data has a "tasks" field
    } catch (error) {
      console.error('Error fetching tasks by user:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    allTasks: [],
    tasksByUser: [],
    status: 'idle',
    error: null,
    tasksByActivityId: [],
    task: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.allTasks = action.payload
        state.status = 'succeeded'
      })
      .addCase(loadTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(loadTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allTasks.push(action.payload)
        state.tasksByActivityId.push(action.payload)
      })
      .addCase(createTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.allTasks = state.allTasks.filter((task) => task._id !== action.payload)
        state.tasksByActivityId = state.tasksByActivityId.filter(
          (task) => task._id !== action.payload,
        )
        state.status = 'succeeded'
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.task = action.payload
        state.status = 'succeeded'
        state.allTasks = state.allTasks.map((task) =>
          task._id === action.payload._id ? action.payload : task,
        )
        state.tasksByActivityId = state.tasksByActivityId.map((task) =>
          task._id === action.payload._id ? action.payload : task,
        )
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(updateTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadTask.fulfilled, (state, action) => {
        state.task = action.payload
        state.status = 'succeeded'
      })
      .addCase(loadTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(loadTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadTasksByActivityId.fulfilled, (state, action) => {
        state.tasksByActivityId = action.payload
        state.status = 'succeeded'
      })
      .addCase(loadTasksByActivityId.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(loadTasksByActivityId.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTasksByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasksByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasksByUser = action.payload; // Assign the payload to tasksByUser
      })
      .addCase(fetchTasksByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const selectTasksByUser = (state) => state.task.tasksByUser

export default taskSlice.reducer
