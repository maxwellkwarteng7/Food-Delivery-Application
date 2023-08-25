import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Navigation from './navigation'
import { store } from './store'
import { Provider } from 'react-redux'
import { setupURLPolyfill } from "react-native-url-polyfill" 
setupURLPolyfill()

export default function App() {
  return (
    <Provider store={store}>
       <Navigation />
    </Provider>
  )
}


