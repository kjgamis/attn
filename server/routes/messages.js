const express = require('express')
const router = express.Router()
const {
  getAllMessages,
  createMessage,
  getMessage,
  editMessage,
  deleteMessage
} = require('../controllers/messages')

router.get('/', getAllMessages)
router.post('/', createMessage)
router.get('/id', getMessage)
router.put('/id', editMessage)
router.delete('/id', deleteMessage)

module.exports = router
