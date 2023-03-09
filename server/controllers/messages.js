const Message = require('../models/Message')

const getAllMessages = (req, res) => {
  res.status(200).send('get all messages')
}

const createMessage = (req, res) => {
  res.status(200).json(req.body)
}

const getMessage = (req, res) => {
  res.status(200).send('get a message')
}

const editMessage = (req, res) => {
  res.status(200).send('edit message')
}

const deleteMessage = (req, res) => {
  res.status(200).send('delete message')
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessage,
  editMessage,
  deleteMessage
}
