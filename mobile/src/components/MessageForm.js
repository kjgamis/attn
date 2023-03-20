import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, FormControl, Input, Modal } from 'native-base'
import { setShowCreateModal, setShowEditModal } from '../redux/message'
const { Content, CloseButton, Header, Body, Footer } = Modal
const { Label } = FormControl
const { Group } = Button

const MessageForm = ({ type, handleSubmit, title, message, phone, id }) => {
  const dispatch = useDispatch()
  const [editTitle, setEditTitle] = useState(title || '')
  const [editMessage, setEditMessage] = useState(message || '')
  const [editPhone, setEditPhone] = useState(phone || '')
  const { showCreateModal, showEditModal } = useSelector(state => state.messageReducer)

  const modalHeader = type === 'create' ? 'Create Message' : 'Edit Message'
  const modalSubmitText = type === 'create' ? 'Create' : 'Edit'
  const showModal = type === 'create' ? showCreateModal : showEditModal

  const handleCloseModal = () => {
    if (type === 'create') {
      return dispatch(setShowCreateModal(!showCreateModal))
    }
    return dispatch(setShowEditModal(!showEditModal))
  }

  const handlePressSubmit = () => {
    if (type === 'create') {
      handleSubmit({
        title: editTitle,
          message: editMessage,
          phone: editPhone
      })
    } 
    if (type === 'edit') {
      handleSubmit({
        id,
        messageBody: {
          title: editTitle,
          message: editMessage,
          phone: editPhone
        }
      })
    }
    handleCloseModal()
  }

  return (
    <Modal isOpen={showModal} onClose={handleCloseModal}>
      <Content>
        <CloseButton />
        <Header>{modalHeader}</Header>
        <Body>
          <FormControl>
            <Label>Title</Label>
            <Input
              value={editTitle}
              onChangeText={(text) => setEditTitle(text)}
            />
          </FormControl>
          <FormControl mt='3'>
            <Label>Message</Label>
            <Input
              value={editMessage}
              onChangeText={(text) => setEditMessage(text)}
            />
          </FormControl>
          <FormControl>
            <Label>Phone Number</Label>
            <Input
              value={editPhone}
              onChangeText={(text) => setEditPhone(text)}
            />
          </FormControl>
        </Body>
        <Footer>
          <Group space={2}>
            <Button variant='ghost' colorScheme='blueGray' onPress={handleCloseModal}>
              Cancel
            </Button>
            <Button onPress={handlePressSubmit}>
              {modalSubmitText}
            </Button>
          </Group>
        </Footer>
      </Content>
    </Modal>
  )
}

export default MessageForm
