const Problem = require('api-problem')
const Message = require('../models/Message')

const getAllMessages = async (req, res) => {
  const messages = await Message.find()
  res.status(200).json({ success: true, data: messages })
}

const createMessage = async (req, res) => {
  const message = await Message.create(req.body)
  res.status(200).json({ success: true, data: message })
}

const getMessage = async (req, res) => {
  const { id: messageId } = req.params
  const message = await Message.findOne({ _id: messageId })
  if (!message) {
    throw new Problem(404, `Not found: message with ID ${messageId}`)
  }
  res.status(200).json({ success: true, data: message })
}

const editMessage = async (req, res) => {
  const { id: messageId } = req.params
  const message = await Message.findOneAndUpdate({ _id: messageId }, req.body, { new: true, runValidators: true })
  if (!message) {
    throw new Problem(404, `Not found: message with ID ${messageId}`)
  }
  res.status(200).json({ success: true, data: message })
}

const deleteMessage = async (req, res) => {
  const { id: messageId } = req.params
  const message = await Message.findOneAndDelete({ _id: messageId })
  if (!message) {
    throw new Problem(404, `Not found: message with ID ${messageId}`)
  }
  res.status(200).json({ success: true, data: message })
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessage,
  editMessage,
  deleteMessage
}
