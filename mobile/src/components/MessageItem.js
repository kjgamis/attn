import { Box, Button, HStack, VStack, Text, Spacer, Heading } from 'native-base'

const MessageItem = ({ item, handleSendMessage }) => {
  const { title, message, phone } = item

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
          onPress={() => handleSendMessage(message, phone)}
        >
          Send Message
        </Button>
      </HStack>
    </Box>
  )
}

export default MessageItem
