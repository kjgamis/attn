const Message = require('../models/Message')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mongo = null

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

afterAll(async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongo.stop()
  }
})

describe('Create Message', () => {
  it('successfully creates a message', async () => {
    const message = {
      title: 'Dog',
      message: 'Please come to the room and take the dog',
      phone: '123-123-1234'
    }
    const newMessage = await Message(message)
    await newMessage.save()

    expect(newMessage._id).toBeDefined()
    expect(newMessage.title).toEqual(message.title)
    expect(newMessage.message).toEqual(message.message)
  })

  it('fails create message validation', async () => {
    const message = {
      title: 'Dog',
      message: 'Please come to the room and take the dog',
      phone: '1231231234'
    }
    try {
      const newMessage = await Message(message)
      await newMessage.save()
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError)
    }
  })
})

describe('Get All Messages', () => {
  it('successfully gets all messages', async () => {
    const messages = await Message.find({})
    console.log('messages', messages)
    expect()
  })
})
describe('Get A Messages', () => {
  it('successfully gets a messages', async () => {

  })
})
describe('Edit Message', () => {
  it('successfully edit a message', async () => {

  })
})
describe('Delete Message', () => {
  it('successfully deletes a message', async () => {

  })
})
