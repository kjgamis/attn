import { useDispatch, useSelector } from 'react-redux'
import { Box, HStack, VStack, Text, IconButton, DeleteIcon } from 'native-base'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { setShowEditModal, editMessage, deleteMessage } from '../redux/message'
import MessageForm from './MessageForm'

const MessageDisplay = ({ title, message, phone, id }) => {
  const dispatch = useDispatch()
  const { showEditModal } = useSelector(state => state.messageReducer)

  const handleShowEditModal = () => {
    dispatch(setShowEditModal(!showEditModal))
  }

  const handleEditMessage = (data) => {
    dispatch(editMessage(data))
    handleShowEditModal()
  }

  const handleDeleteMessage = (data) => {
    dispatch(deleteMessage(data))
  }

  return (
    <Box borderColor='coolGray.200' borderWidth='1'>
      <HStack space={[2, 3]} justifyContent='space-between'>
        <VStack>
          <Text _dark={{
            color: 'warmGray.50'
          }} color='coolGray.800' bold>
            {title}
          </Text>
        </VStack>
        <IconButton
          colorScheme='indigo'
          borderRadius='full'
          icon={<FontAwesome name='send' size={24} color='indigo' />}
          accessibilityLabel='Send Message Button'
        />
        <IconButton
          colorScheme='indigo'
          borderRadius='full'
          icon={<AntDesign name='edit' size={24} color='indigo' />}
          accessibilityLabel='Edit Message Button'
          onPress={handleShowEditModal}
        />
        <IconButton
          colorScheme='indigo'
          borderRadius='full'
          icon={<DeleteIcon />}
          accessibilityLabel='Delete Message Button'
          onPress={() => handleDeleteMessage({ id })}
        />
      </HStack>
      <MessageForm
        type='edit'
        handleSubmit={handleEditMessage}
        title={title}
        message={message}
        phone={phone}
        id={id}
      />
    </Box>
  )
}

export default MessageDisplay
