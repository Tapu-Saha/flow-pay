import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MarchantDetails = () => {
  const navigation = useNavigation();

  const handleStartButton = () => {
    navigation.navigate("PaymentOptions");
  };

  const insets = useSafeAreaInsets();

  console.log("insets", insets);

  return (
    <SafeAreaView className="flex-1 mx-4 my-2 mt-5 justify-between">
      <View>
        <View className="rounded-lg border border-gray-300 bg-white px-3 h-13 flex-row items-center">
          <Feather name="search" size={18} color="gray" />
          <TextInput
            placeholder="Marchant name or number"
            placeholderTextColor={"gray"}
            className="flex-1 text-xl font-medium py-3 ml-2"
          />
        </View>

        <TouchableOpacity className="border border-green-600 rounded-xl mt-7 py-3 flex-row items-center justify-center gap-1">
          <Text className="text-green-600 text-xl font-medium">
            Scan QR Code
          </Text>
          <MaterialIcons name="qr-code-scanner" size={24} color="#16a34a" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleStartButton}
        style={{
          marginBottom: insets.bottom,
        }}
        className="rounded-lg mt-2 py-4 bg-green-600 flex-row items-center justify-center gap-1"
      >
        <Text className="text-white text-center text-xl">Next</Text>
        <AntDesign name="arrowright" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MarchantDetails;
