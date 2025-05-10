import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const PaymentOptions = () => {
  const itemList = [
    { image: require("../../../assets/images/bkash.png") },
    { image: require("../../../assets/images/nagad.png") },
    { image: require("../../../assets/images/upay.png") },
    { image: require("../../../assets/images/rocket.png") },
    { image: require("../../../assets/images/card.png") },
  ];
  return (
      <View className="flex-1 px-4 py-2 justify-between">
        <View className="flex-row flex-wrap gap-3 ml-3">
          {itemList.map((item, index) => (
            <Image
              key={index}
              source={item.image}
              className="w-[22%] h-[90px] rounded-xl mb-2 rounded-lg border border-gray-200"
            />
          ))}
        </View>

        <TouchableOpacity className="border border-green-600 rounded-lg py-4 mt-3 mb-8 flex-row justify-center items-center space-x-2">
          <Text className="text-green-600 text-base text-center">
            Scan QR Code
          </Text>
          <AntDesign name="arrowright" size={20} color="green" />
        </TouchableOpacity>
      </View>
  );
};

export default PaymentOptions;