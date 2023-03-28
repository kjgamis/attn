import { Box, Button, HStack, VStack, Text, Spacer, Heading } from 'native-base'
import MessageForm from './MessageForm'

const MessageItem = ({ item, handleEditMessage }) => {
  const { title, message, phone, id } = item
  return (
    <Box pl='4' pr='5' py='2' bg='white'>
      <Heading pb='2' size='md'>
        {title}
      </Heading>
      <HStack alignItems='center' space={3}>
        <VStack width='60%'>
          <Text color='coolGray.600' _dark={{
            color: 'warmGray.200'
          }}
          >
            Contact: {phone}
          </Text>
          <Text color='coolGray.600' _dark={{
            color: 'warmGray.200'
          }}
            isTruncated
          >
            {message}
          </Text>
        </VStack>
        <Spacer />
        <Button
          colorScheme='blue'
          variant='outline'
        >
          Send Message
        </Button>
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

export default MessageItem
