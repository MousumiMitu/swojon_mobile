import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { categories } from "@/constants/products";
import { COLOR } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const Categories = () => {
  return (
    <View className="py-6 px-[13px] space-y-5">
      <View className="flex flex-row justify-between pb-5">
        <Text className="text-xl font-bold text-primaryColor">
          Explore Categories
        </Text>

        <TouchableOpacity className="w-[82] h-[27px] bg-[#F8F8F8] rounded-[40px] flex justify-center items-center text-primaryColor">
          <Text className="text-sm leading-[19.12px] font-medium">
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            className="relative border border-[#F8F8F8] w-[160px] h-[80px] rounded-[10px] overflow-hidden"
            // style={{
            //   borderWidth: 1,
            //   borderColor: COLOR.lightColor,
            //   width: 160,
            //   height: 80,
            //   backgroundColor: COLOR.white,
            //   borderRadius: 10,
            //   zIndex: 1,
            //   // marginVertical: 26,
            // }}
          >
            <Image
              source={item.image}
              className="h-full w-full rounded-[10px]"
              // style={{
              //   height: 167,
              //   resizeMode: "cover",
              //   width: "auto ",
              //   borderRadius: 10,
              // }}
              resizeMode="cover"
            />
            {/* <View className="absolute inset-0 bg-red-400 opacity-10 w-full h-full rounded-[10px]"></View> */}
            <LinearGradient
              // Background Linear Gradient
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[
                "rgba(0, 0, 0, 0.979)",
                "rgba(0, 0, 0, 0.619)",
                "transparent",
              ]}
              className="absolute inset-0   w-full h-full rounded-sm"
            />
            <View className={`absolute top-2 left-2  `}>
              <Text
                className="capitalize font-bold text-sm leading-5 text-whiteColor "
                // style={{ fontFamily: "Manrope" }}
              >
                {item.title}
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

export default Categories;
