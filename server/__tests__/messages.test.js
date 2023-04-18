const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const request = require('supertest')
require('dotenv').config()
const app = require('../app')

let newMessage, id
const invalidId = '640a6f38be942c1b9ed130b4'

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()

  await mongoose.connect(uri)
  newMessage = await request(app).post('/api/messages').send({
    title: 'Dapper Dog',
    message: 'PLEASE come to the room and take the dog',
    phone: '1231231234'
  })
  id = newMessage.body.data['_id']
})

afterAll(async () => {
  await mongoose.connection.close()
  await request(app).delete(`/api/messages/${id}`)
})

describe('GET /api/messages', () => {
  it('should return all messages', async () => {
    const response = await request(app)
      .get('/api/messages')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200)
    expect(response.body.data.length).toBeGreaterThan(0)
  })
})

describe('POST /api/messages', () => {
  it('should create a message', async () => {
    expect(newMessage.statusCode).toBe(200)
    expect(newMessage.body.data.title).toBe('Dapper Dog')
  })

  it('should fail if phone number fails validation', async () => {
    const response = await request(app).post('/api/messages').send({
      title: 'Dapper Dog',
      message: 'PLEASE come to the room and take the dog',
      phone: '12312312344'
    })
    expect(response.statusCode).toBe(500)
  })
})

describe('GET /api/message/:id', () => {
  it('should get a message', async () => {
    const response = await request(app).get(`/api/messages/${id}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.data._id).toBe(id)
  })

  it('should fail if message does not exist', async () => {
    const response = await request(app).get(`/api/messages/${invalidId}`)
    expect(response.statusCode).toBe(404)
  })
})

describe('PUT /api/message/:id', () => {
  it('should edit message body', async () => {
    const response = await request(app).put(`/api/messages/${id}`).send({
      message: 'No need to come inside anymore'
    })
    expect(response.statusCode).toBe(200)
    expect(response.body.data.message).toBe('No need to come inside anymore')
  })

  it('should fail if message does not exist', async () => {
    const response = await request(app).put(`/api/messages/${invalidId}`)
    expect(response.statusCode).toBe(404)
  })

  it('should fail if phone number fails validation', async () => {
    const response = await request(app).put('/api/messages').send({
      phone: '1231231234'
    })
    expect(response.statusCode).toBe(404)
  })
})

describe('Delete /api/message/:id', () => {
  it('should delete a message ', async () => {
    const response = await request(app).delete(`/api/messages/${id}`)
    expect(response.statusCode).toBe(200)
  })

  it('should fail if message does not exist', async () => {
    const response = await request(app).delete(`/api/messages/${invalidId}`)
    expect(response.statusCode).toBe(404)
  })
})
