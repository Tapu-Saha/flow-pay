import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const PaymentOptions = () => {
  const itemList = [
    {
      image:
        "https://static.gameloop.com/img/3569dfc41df8c453b389a7fa205d7b0d.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    },
    { image: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    {
      image: "https://download.logo.wine/logo/BKash/BKash-bKash-Logo.wine.png",
    },
    {
      image: "https://download.logo.wine/logo/BKash/BKash-bKash-Logo.wine.png",
    },
    {
      image: "https://download.logo.wine/logo/BKash/BKash-bKash-Logo.wine.png",
    },
  ];

  return (
    <View className="flex-1 justify-between">
      <View className="flex-row flex-wrap ">
        {itemList.map((item, index) => {
          return (
            <>
              <Image
                source={{
                  uri: item?.image,
                }}
                className="w-[25%] h-20 "
                resizeMode="contain"
              />
            </>
          );
        })}
      </View>
      <TouchableOpacity className={styles.nextButton}>
        <Text className={styles.nextButtonText}>Scan QR Code</Text>
        <AntDesign name="arrowright" size={20} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentOptions;
const styles = {
  container: `flex-1 mx-4 my-2 justify-between`,
  shadowContainer: `shadow-lg`,
  searchBox: `border border-gray-400 rounded-sm px-1 py-2 flex-row gap-2 items-center`,
  input: `text-xl flex-1`,
  scanButton: `border border-green-600 rounded-sm mt-5 py-2 flex-row items-center justify-center gap-2`,
  scanButtonText: `text-green-600 text-xl`,
  nextButton: `border border-green-600 rounded-lg mt-2 mb-10 <py-5></py-5> flex-row items-center justify-center gap-2`,
  nextButtonText: `text-green text-center text-lg`,
};
