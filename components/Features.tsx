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
        <Text className="text-xl font-bold text-primaryColor">Just In</Text>

        <TouchableOpacity className="w-[82] h-[27px] bg-[#F8F8F8] rounded-[40px] flex justify-center items-center text-primaryColor">
          <Text className="text-sm leading-[19.12px] font-medium">
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Pressable
            // className="relative w-[160px] bg-whiteColor rounded-[10px]"
            style={{
              width: 160,
              backgroundColor: COLOR.white,
              borderRadius: 10,
              // marginVertical: 26,
            }}
          >
            <Image
              source={item.image}
              className="h-[167px] w-full rounded-[10px] border border-[#F8F8F8]"
              // style={{
              //   height: 167,
              //   resizeMode: "cover",
              //   width: "auto ",
              //   borderRadius: 10,
              // }}
              resizeMode="cover"
            />
            <Text className="py-1.5 text-sm leading-5 text-primaryColor font-normal">
              {item.title}
            </Text>
            <View className="flex flex-row gap-1 ">
              <Text className="text-sm leading-5 font-extrabold text-primaryColor">
                TK
              </Text>
              <Text className="text-sm leading-5 font-extrabold text-primaryColor">
                {item.price}
              </Text>
            </View>
            <View
              className={`absolute top-2 left-2  py-1 px-[8px] rounded-[50px] ${
                item.condition === "used"
                  ? "bg-orangeColor"
                  : item.condition === "like new"
                  ? "bg-blueColor"
                  : "bg-darkPurple"
              }`}
            >
              <Text className="capitalize font-bold text-[10px] leading-5 text-whiteColor ">
                {item.condition}
              </Text>
            </View>
          </Pressable>
        )}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 14, flexGrow: 1 }}
        columnWrapperStyle={{ gap: 14 }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Features;
