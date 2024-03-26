import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { items } from "@/constants/products";
import { COLOR } from "@/constants/theme";

const Features = () => {
  return (
    <View className="py-6 px-[13px] space-y-5">
      <View className="flex flex-row justify-between pb-5">
        <Text className="text-xl font-bold text-primaryColor">Features</Text>

        <TouchableOpacity className="w-[82] h-[27px] bg-[#F8F8F8] rounded-[40px] flex justify-center items-center text-primaryColor">
          <Text classname="text-sm leading-[19.12px] font-medium">
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Pressable
            style={{
              padding: "5px",

              width: 160,
              backgroundColor: COLOR.white,
              borderRadius: 10,
            }}
          >
            <Image
              source={item.image}
              style={{
                height: 167,
                resizeMode: "cover",
                width: "auto ",
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
          </Pressable>
        )}
        contentContainerStyle={{ gap: 14 }}
        columnWrapperStyle={{ gap: 14 }}
        numColumns={2}
      />
    </View>
  );
};

export default Features;
