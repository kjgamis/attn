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
    validate: {
      validator: (v) => {
        return /\d{3}-\d{3}-\d{4}/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
})

module.exports = mongoose.model('Messages', MessageSchema)
