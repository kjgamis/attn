import { Pressable, HStack, Text } from 'native-base'

const MessageItemHidden = ({ item, handleDeleteMessage, handleShowEditModal }) => {
  return (
    <HStack flex='1' pl='2'>
      <Pressable w='70' ml='auto' cursor='pointer' justifyContent='center' alignItems='center'
        onPress={handleShowEditModal} _pressed={{
          opacity: 0.5
        }}>
        <Text fontSize='xs' fontWeight='medium' color='coolGray.800'>
          Edit
        </Text>
      </Pressable>
      <Pressable w='70' cursor='pointer' justifyContent='center' alignItems='center' bg='red.500'
        onPress={() => handleDeleteMessage(item._id)} _pressed={{
          opacity: 0.5
        }}>
        <Text fontSize='xs' fontWeight='medium' color='white'>
          Delete
        </Text>
      </Pressable>
    </HStack>
  )
}

export default MessageItemHidden
