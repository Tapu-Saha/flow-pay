import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreen = () => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.shadowContainer}>
        <View className={styles.searchBox}>
          <Feather name="search" size={20} color="gray" />
          <TextInput
            className={styles.input}
            placeholder="Merchant name or number"
          />
        </View>

        <TouchableOpacity className={styles.scanButton}>
          <Text className={styles.scanButtonText}>Scan QR Code</Text>
          <MaterialIcons name="qr-code-scanner" size={24} color="#16a34a" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className={styles.nextButton}>
        <Text className={styles.nextButtonText}>Next</Text>
        <AntDesign name="arrowright" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = {
  container: `flex-1 mx-4 my-2 justify-between`,
  shadowContainer: `shadow-lg`,
  searchBox: `border border-gray-400 rounded-sm px-1 py-2 flex-row gap-2 items-center`,
  input: `text-xl flex-1`,
  scanButton: `border border-green-600 rounded-sm mt-5 py-2 flex-row items-center justify-center gap-2`,
  scanButtonText: `text-green-600 text-xl`,
  nextButton: `rounded-lg mt-2 py-4 bg-green-600 flex-row items-center justify-center gap-2`,
  nextButtonText: `text-white text-center text-lg`,
};
