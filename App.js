import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import "./global.css";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/home/HomeScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
      <Stack.Screen name="Home" options={{
        title: "Marchant details"
      }} component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

