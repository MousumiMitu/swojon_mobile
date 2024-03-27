import { View, Text, Image } from "react-native";
import React from "react";

const CallToAction = () => {
  return (
    <View className="mb-10 mt-3 h-[112px] w-full flex flex-row ">
      <View className="flex-2  h-full">
        <Image
          source={require("@/assets/shoes.png")}
          className=" h-full"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 bg-orangeColor p-[8px] h-full flex flex-col justify-between">
        <View className="rounded-[50px] bg-darkPurple w-[58px] h-[22px] flex items-center justify-center">
          <Text className="text-whiteColor text-[10px] capitalize font-bold">
            Hot Deal
          </Text>
        </View>

        <Text className="text-darkPurple text-sm capitalize font-bold">
          Saint Laurent Small Puffer Loulou Rodeo
        </Text>

        <View className="flex flex-row gap-1 ">
          <Text className="text-sm leading-5 font-extrabold text-darkPurple">
            TK
          </Text>
          <Text className="text-sm leading-5 font-extrabold text-darkPurple">
            1200
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CallToAction;
