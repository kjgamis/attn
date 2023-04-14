import { Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Fab, AddIcon, Text, Box, Heading } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import { setShowCreateModal, setShowEditModal, createMessage, editMessage, deleteMessage } from '../redux/message'
import MessageItem from '../components/MessageItem'
import MessageItemHidden from '../components/MessageItemHidden'
import MessageForm from '../components/MessageForm'

const Main = () => {
  const dispatch = useDispatch()

  const { messageList } = useSelector(state => state.messageReducer)
  const { loading } = useSelector(state => state.messageReducer)
  const { showCreateModal, showEditModal } = useSelector(state => state.messageReducer)

  const handleCreateMessage = (data) => {
    dispatch(createMessage(data))
  }

  const handleShowEditModal = (data) => {
    dispatch(setShowEditModal(data))
  }

  const handleEditMessage = (data) => {
    dispatch(editMessage(data))
    handleShowEditModal()
  }

  const handleDeleteMessage = (data) => {
    dispatch(deleteMessage(data))
  }

  const handleSendMessage = (messageBody, phoneNumber) => {
    let url = `whatsapp://send?text=${messageBody}&phone=1${phoneNumber}`
    Linking.openURL(url)
  }

  return (
    <Box safeArea flex='1' safeAreaTop w='100%'>
      <Heading p='4' pb='3' size='lg'>
        ATTN
      </Heading>
      {loading ?
        <Text>Loading...</Text> :
        <SwipeListView
          data={messageList}
          renderItem={({ item, index }) =>
            <MessageItem item={item}
              key={index}
              handleSendMessage={handleSendMessage}
            />}
          renderHiddenItem={({ item, index }) =>
            <MessageItemHidden item={item}
              key={index}
              handleEditMessage={handleEditMessage}
              handleShowEditModal={handleShowEditModal}
              handleDeleteMessage={handleDeleteMessage}
            />}
          rightOpenValue={-150} previewOpenValue={-40}
        />
      }
      <MessageForm
        type='create'
        handleSubmit={handleCreateMessage}
      />
      <Fab
        onPress={() => dispatch(setShowCreateModal(!showCreateModal))}
        icon={<AddIcon />}
        colorScheme='indigo'
      />
    </Box>
  )
}

export default Main
