import { useDispatch, useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import { Fab, AddIcon, FlatList } from 'native-base'
import { setShowCreateModal, createMessage } from '../redux/message'
import MessageDisplay from '../components/MessageDisplay'
import MessageForm from '../components/MessageForm'

const Main = () => {
  const dispatch = useDispatch()

  const { messageList } = useSelector(state => state.messageReducer)
  const { loading } = useSelector(state => state.messageReducer)
  const { showModal } = useSelector(state => state.messageReducer)

  const handleCreateMessage = (data) => {
    dispatch(createMessage(data))
  }

  return (
    <View>
      {loading ?
        <Text>Loading...</Text> :
        <FlatList
          data={messageList}
          keyExtractor={({ _id: id }) => id}
          renderItem={({ item }) => (
            <MessageDisplay
              title={item.title}
              message={item.message}
              phone={item.phone}
              id={item._id}
            />
          )}
        />
      }
      <MessageForm
        type='create'
        handleSubmit={handleCreateMessage}
      />
      <Fab
        onPress={() => dispatch(setShowCreateModal(!showModal))}
        icon={<AddIcon />}
        colorScheme='indigo'
      />
    </View>
  )
}

export default Main
