import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import SignIn from './src/screens/SignIn';

export default function App() {
  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
