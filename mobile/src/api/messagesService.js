// const url = 'http://192.168.2.11:8000'
const url = 'https://attn-api.ue.r.appspot.com'

const fetchMessages = async () => {
  try {
    const response = await fetch(`${url}/api/messages`)
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(error)
  }
}

const postMessage = async (messageBody) => {
  try {
    const response = await fetch(`${url}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageBody)
    })
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(error)
  }
}

const updateMessage = async ({ id, messageBody }) => {
  try {
    const response = await fetch(`${url}/api/messages/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageBody)
    })
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(error)
  }
}

const delMessage = async (messageId) => {
  try {
    const response = await fetch(`${url}/api/messages/${messageId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(error)
  }
}

export {
  fetchMessages,
  postMessage,
  updateMessage,
  delMessage
}
