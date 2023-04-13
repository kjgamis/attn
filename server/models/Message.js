const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: [true, 'must provide message'],
    maxLength: [4096, 'message cannot be more than 4096 characters.']
  },
  phone: {
    type: String,
    required: [true, 'must provide phone number required'],
    maxLength: [10, 'phone number must contain 10 numbers']
  }
})

module.exports = mongoose.model('Messages', MessageSchema)
