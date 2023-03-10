const url = 'http://localhost:8080'

const getAllMessages = async () => {
  try {
    const response = await fetch(`${url}/api/messages`)
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(error)
  }
}
const createMessage = async (messageBody) => {
  try {
    const response = await fetch(`${url}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageBody)
    })
    const json = await response.json()
    console.log(json)
    return json.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllMessages,
  // createMessage
}
