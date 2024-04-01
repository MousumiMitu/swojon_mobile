import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { COLOR } from "@/constants/theme";

const ChatArea = ({ setOpenComponent }: { setOpenComponent: any }) => {
  return (
    <View className="w-full h-full border border-gray-300 rounded-md">
      <View className="p-3 flex flex-row items-center justify-between border-b border-gray-300">
        <TouchableOpacity onPress={() => setOpenComponent("area")}>
          <FontAwesome6
            name="arrow-left-long"
            size={19}
            color={COLOR.primary}
          />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-primaryColor">User Name</Text>
        <TouchableOpacity>
          <Feather name="info" size={19} color={COLOR.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatArea;
