import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getAllMessages } from '../api/messagesService'
import MessageButton from '../components/MessageButton'

const Main = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getMessages = async () => {
    try {
      const messages = await getAllMessages()
      setData(messages)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMessages()
  }, [])


  return (
    <View>
      {isLoading ?
        <Text>Loading...</Text> :
        <FlatList
          data={data}
          keyExtractor={({ _id: id }) => id}
          renderItem={({ item }) => (
            <MessageButton title={item.title} message={item.message} phone={item.phone} />
          )}
        />}
    </View>
  )
}

export default Main
