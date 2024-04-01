import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { EvilIcons, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLOR } from "@/constants/theme";
import { chatLists } from "@/constants/products";
import { ScrollView } from "react-native";

const InboxLists = () => {
  const router = useRouter();
  return (
    <View className="w-full h-full   bg-gray-100 rounded-md p-3">
      <View className="flex flex-row items-center gap-4 ">
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome6
            name="arrow-left-long"
            size={18}
            color={COLOR.primary}
          />
        </TouchableOpacity>

        <Text className="text-xl capitalize text-primaryColor font-bold">
          chat Lists
        </Text>
      </View>

      <View className="relative w-full mt-3 mb-4">
        <TextInput
          placeholder="Search.."
          className="border-none py-[6px] ps-[30px] bg-gray-200 rounded-[52px] text-sm leading-[19.12px] "
        />
        <View className="absolute left-2 top-0 w-[20px] h-full flex flex-row items-center ">
          <EvilIcons name="search" size={18} color={COLOR.primary} />
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={chatLists}
          renderItem={({ item }) => (
            <Pressable className="w-full h-[70px] bg-whiteColor px-3  rounded-[10px] flex flex-row gap-2 justify-between	items-center">
              <View className="">
                <Image
                  source={item.img}
                  className="w-[50px] h-[50px] rounded-full "
                  resizeMode="cover"
                />
              </View>

              <View className="w-[77%] relative  flex flex-row gap-3 justify-between  ">
                <View className="w-[66%] flex flex-col justify-between  gap-2.5 overflow-hidden ">
                  <Text
                    numberOfLines={1}
                    className="text-xl text-primaryColor capitalize truncate font-semibold"
                  >
                    {item.name} asdhsad
                  </Text>
                  <Text
                    numberOfLines={1}
                    className="text-sm text-secondColor  truncate "
                  >
                    hey!! whats up
                  </Text>
                </View>

                <View className="w-[25%]  flex flex-col justify-between items-end gap-2.5 overflow-hidden ">
                  <Text numberOfLines={1} className="truncate block text-sm">
                    4m ago
                  </Text>

                  <View className="w-5 h-5 bg-green-500 rounded-full flex flex-row justify-center items-center">
                    <Text className="text-white text-sm font-semibold">2</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
          scrollEnabled={false}
          contentContainerStyle={{ gap: 14, flexGrow: 1 }}
          columnWrapperStyle={{ gap: 14 }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default InboxLists;
