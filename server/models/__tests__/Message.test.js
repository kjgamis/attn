const Message = require('../Message')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mongo = null
let mockMessage = {
  title: 'Dog',
  message: 'Please come to the room and take the dog',
  phone: '123-123-1234'
}

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

afterEach(async () => {
  if (mongo) {
    const collections = await mongoose.connection.db.collections()
    for (let collection of collections) {
      await collection.deleteOne()
    }
  }
})

describe('Create Message', () => {
  it('successfully creates a message', async () => {
    const newMessage = await Message(mockMessage)
    await newMessage.save()

    expect(newMessage._id).toBeDefined()
    expect(newMessage.title).toEqual(mockMessage.title)
    expect(newMessage.message).toEqual(mockMessage.message)
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
    const newMessage = await Message(mockMessage)
    await newMessage.save()

    const getMessages = await Message.find({})
    expect(getMessages.length).not.toBe(0)
  })
})

describe('Get A Messages', () => {
  it('successfully gets a messages', async () => {
    const newMessage = await Message(mockMessage)
    await newMessage.save()

    const getMessage = await Message.findOne({ _id: newMessage._id })
    expect(getMessage._id).toEqual(newMessage._id)
  })
})

describe('Edit Message', () => {
  it('successfully edit a message', async () => {
    const newMessage = await Message(mockMessage)
    await newMessage.save()
    const editMessage = await Message.findOneAndUpdate(
      { _id: newMessage._id },
      { message: 'this is an updated message' },
      { new: true, runValidators: true }
    )

    expect(editMessage.message).toEqual('this is an updated message')
    expect(editMessage._id).toEqual(newMessage._id)
    expect(editMessage.phone).toEqual(newMessage.phone)
  })

  it('fails edit message validation', async () => {
    const newMessage = await Message(mockMessage)
    await newMessage.save()
    try {
      await Message.findOneAndUpdate(
        { _id: newMessage._id },
        { phone: '1231231234' },
        { new: true, runValidators: true }
      )
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError)
    }
  })
})

describe('Delete Message', () => {
  it('successfully deletes a message', async () => {
    const newMessage = await Message(mockMessage)
    await newMessage.save()

    await Message.findOneAndDelete({ _id: newMessage.id })
    const getMessage = await Message.findOne({ _id: newMessage._id })
    expect(getMessage).toBeNull()
  })
})
