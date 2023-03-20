import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMessages, postMessage, updateMessage, delMessage } from '../api/messagesService'

// thunk
export const getMessages = createAsyncThunk('fetchMesssages',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await fetchMessages()
      return response
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data)
    }
  }
)

export const createMessage = createAsyncThunk('postMesssage',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await postMessage(messageData)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const editMessage = createAsyncThunk('updateMesssage',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await updateMessage(messageData)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteMessage = createAsyncThunk('deleteMesssage',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await delMessage(messageData)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const messageSlice = createSlice({
  name: 'project',
  initialState: {
    loading: false,
    showCreateModal: false,
    showEditModal: false,
    messageList: []
  },
  reducers: {
    setShowCreateModal: (state, action) => {
      state.showCreateModal = action.payload
    },
    setShowEditModal: (state, action) => {
      state.showEditModal = action.payload
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getMessages.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messageList = action.payload
        state.loading = false
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.messageList.push(action.payload)
      })
      .addCase(editMessage.fulfilled, (state, action) => {
        state.messageList.forEach(item => {
          if (item._id === action.payload._id) {
            item.title = action.payload.title
            item.message = action.payload.message
            item.phone = action.payload.phone
          }
          return item
        })
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        const newMessageList = state.messageList.filter(item => item._id !== action.payload._id)
        state.messageList = newMessageList
      })
  },
})

export const { setShowCreateModal, setShowEditModal } = messageSlice.actions

export default messageSlice.reducer