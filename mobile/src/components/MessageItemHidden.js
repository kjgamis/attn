import { Pressable, HStack, Text } from 'native-base'
import MessageForm from './MessageForm'

const MessageItemHidden = ({ item, handleDeleteMessage, handleShowEditModal, handleEditMessage }) => {
  const { title, message, phone, _id } = item
  return (
    <HStack flex='1' pl='2'>
      <Pressable w='70' ml='auto' cursor='pointer' justifyContent='center' alignItems='center'
        onPress={() => handleShowEditModal(_id)} _pressed={{
          opacity: 0.5
        }}>
        <Text fontSize='xs' fontWeight='medium' color='coolGray.800'>
          Edit
        </Text>
      </Pressable>
      <Pressable w='70' cursor='pointer' justifyContent='center' alignItems='center' bg='red.500'
        onPress={() => handleDeleteMessage(_id)} _pressed={{
          opacity: 0.5
        }}>
        <Text fontSize='xs' fontWeight='medium' color='white'>
          Delete
        </Text>
      </Pressable>
      <MessageForm
        type='edit'
        handleSubmit={handleEditMessage}
        title={title}
        message={message}
        phone={phone}
        id={_id}
      />
    </HStack>
  )
}

export default MessageItemHidden
