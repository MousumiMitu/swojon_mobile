import { View, Text, Image, Pressable, Platform } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ProfileDropdown = () => {
  return (
    <View className="relative z-10">
      <View className="w-[36px] h-[36px] rounded-full ">
        <Image
          source={require("@/assets/user.png")}
          className="w-full h-full rounded-full"
          resizeMode="cover"
        />
      </View>

      <View
        style={{ zIndex: 15, elevation: Platform.OS === "android" ? 50 : 0 }}
        className="absolute top-[42px] shadow-md border border-gray-50 rounded-md px-4 py-3 right-0 w-[150px]  bg-red-50 min-h-16"
      >
        <Link push href="/(auth)/login">
          <Pressable>
            <Text>Login</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default ProfileDropdown;
