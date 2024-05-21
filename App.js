import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './view/LaunchScreen';
import SignInScreen from './view/SignInScreen';
import Home from './view/Home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LaunchScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LaunchScreen' component={LaunchScreen} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
