import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Feather, Fontisto } from "@expo/vector-icons";
import { COLOR } from "@/constants/theme";
import ProfileDropdown from "./ProfileDropdown";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View className="px-[13px] h-[68px] flex flex-row items-center border border-[#F8F8F8] bg-white z-10">
      <View className="flex-1 ">
        <Image
          source={require("@/assets/swojon.png")}
          className="w-[94px] h-[20px] border"
          resizeMode="contain"
        />
      </View>
      <View className="flex-1 flex flex-row justify-end gap-2.5">
        <View className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#F8F8F8]">
          <Fontisto name="bell" size={18} color={COLOR.primary} />
        </View>
        <View className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#F8F8F8]">
          <Feather name="shopping-cart" size={18} color={COLOR.primary} />
        </View>
        {/* <Link push href="/about">
          <Pressable>
            <Text>Home</Text>
          </Pressable>
        </Link> */}

        <ProfileDropdown />
      </View>
    </View>
  );
};

export default Header;
