import { View, Text } from 'react-native'

const MessageButton = ({ title, message, phone }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{message}</Text>
      <Text>{phone}</Text>
    </View>
  )
}

export default MessageButton
