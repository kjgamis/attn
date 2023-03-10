const Message = require('../models/Message')

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({})
    res.status(200).json({ success: true, data: messages })
  } catch (error) {
    res.status(500).json({ success: false, msg: error })
  }
}

const createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body)
    res.status(200).json({ success: true, data: message })
  } catch (error) {
    res.status(500).json({ success: false, msg: error })
  }
}

const getMessage = async (req, res) => {
  const { id: messageId } = req.params
  try {
    const message = await Message.findOne({ _id: messageId })
    if (!message) {
      return res.status(404).json({ success: false, msg: `Not found: no message with ID: ${messageId}` })
    }
    res.status(200).json({ success: true, data: message })
  } catch (error) {
    res.status(500).json({ success: false, msg: error })
  }
}

const editMessage = async (req, res) => {
  const { id: messageId } = req.params
  try {
    const message = await Message.findOneAndUpdate({ _id: messageId }, req.body, { new: true, runValidators: true })
    if (!message) {
      return res.status(404).json({ success: false, msg: `Not found: no message with ID: ${messageId}` })
    }
    res.status(200).json({ success: true, data: message })
  } catch (error) {
    res.status(500).json({ success: false, msg: error })
  }
}

const deleteMessage = async (req, res) => {
  const { id: messageId } = req.params
  try {
    const message = await Message.findOneAndDelete({ _id: messageId })
    if (!message) {
      return res.status(404).json({ success: false, msg: `Not found: no message with ID: ${messageId}` })
    }
    res.status(200).json({ success: true, data: message })
  } catch (error) {
    res.status(500).json({ success: false, msg: error })
  }
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessage,
  editMessage,
  deleteMessage
}
