import { Provider } from 'react-redux'
import { NativeBaseProvider, Box } from 'native-base'
import { store } from './src/redux/store'
import { getMessages } from './src/redux/message'
import Main from './src/pages/main'

store.dispatch(getMessages())
const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
