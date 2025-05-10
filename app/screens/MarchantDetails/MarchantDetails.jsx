import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const MarchantDetails = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = React.useState(false);

  const handleStartButton = () => {
    navigation.navigate("PaymentOptions");
  };

  return (
    <SafeAreaView className="flex-1 mx-4 my-2 mt-5 justify-between">
      <View className="flex-1">
        <View style={styleX.shadow} className="rounded-lg border border-gray-300 bg-white px-3 h-13 flex-row items-center">
          <Feather name="search" size={18} color="gray" />
          <TextInput
            placeholder="Marchant name or number"
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete="off"
            onBlur={() => setIsFocused(false)}
            className="flex-1 text-md font-medium py-3 ml-2"
          />
        </View>

        <TouchableOpacity className="border border-green-600 rounded-xl mt-7 py-3 flex-row items-center justify-center gap-1">
          <Text className="text-green-600 text-xl font-medium">Scan QR Code</Text>
          <MaterialIcons name="qr-code-scanner" size={24} color="#16a34a" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleStartButton} className="rounded-lg mt-2 py-4 bg-green-600 flex-row items-center justify-center gap-1">
        <Text className="text-white text-center text-lg">Next</Text>
        <AntDesign name="arrowright" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MarchantDetails;

const styleX = StyleSheet.create({
  shadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
});
