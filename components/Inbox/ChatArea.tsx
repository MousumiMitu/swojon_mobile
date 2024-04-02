import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { COLOR } from "@/constants/theme";

const ChatArea = ({ setOpenComponent }: { setOpenComponent: any }) => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <View className="w-full h-full border border-gray-100 rounded-md mb-[76px]">
      <View className="p-3 flex flex-row items-center justify-between border-b border-gray-100">
        <TouchableOpacity onPress={() => setOpenComponent("list")}>
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

      <View
        style={{ height: screenHeight - 180 }}
        className=" absolute left-0 right-0 bottom-[120px] px-2 pb-4 flex flex-col gap-y-5"
      >
        <View className="flex flex-row justify-between items-start gap-2">
          <View className="w-[18%]">
            <Image
              source={require("@/assets/users/user1-min.jpg")}
              className="w-[50px] h-[50px] rounded-full "
              resizeMode="cover"
            />
          </View>

          <View className="w-[79%] flex items-start">
            <View className="bg-blue-50 p-2 rounded-md inline-block">
              <Text className="text-base text-primaryColor">
                Lorem ipsum dolor
              </Text>
            </View>

            <Text className="text-xs text-secondColor pt-1">2 min ago</Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-start gap-2">
          <View className="w-full flex items-end">
            <View className="bg-blue-50 p-2 rounded-md inline-block">
              <Text className="text-base text-primaryColor">
                hi, how are you?
              </Text>
            </View>

            <Text className="text-xs text-secondColor pt-1">2 min ago</Text>
          </View>
        </View>
      </View>

      {/* Input field */}

      <View className="absolute h-[60px] bottom-[60px] left-0 right-0 bg-gray-50 flex flex-row items-center justify-between gap-4 px-3">
        <View className="relative w-[82%] ">
          <TextInput
            placeholder="Enter your text.."
            className="border-none py-[6px] px-[20px] bg-gray-100 rounded-[52px] text-sm leading-[19.12px] "
          />
        </View>
        <View className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-activeColor">
          <Ionicons name="paper-plane-outline" size={18} color={COLOR.white} />
        </View>
      </View>
    </View>
  );
};

export default ChatArea;
