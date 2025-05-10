import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarchantDetails from "./app/screens/MarchantDetails/MarchantDetails";
import "./global.css";
import PaymentOptions from "./app/screens/PaymentOptions/PaymentOptions";
export default function App() {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
         headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="MarchantDetails"
          options={{
            title: "Marchant details",
          }}
          component={MarchantDetails}
        />
        <Stack.Screen
          name="PaymentOptions"
          options={{
            title: "Payment Way",
          }}
          component={PaymentOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
