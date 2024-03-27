import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import { Image } from "react-native";
import { COLOR } from "@/constants/theme";
import icons from "@/constants/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 74,
          backgroundColor: COLOR.white,
          borderTopColor: "#f8fafc",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                }}
              >
                <Image
                  source={icons.home}
                  contentFit="contain"
                  className="h-[20px] w-[20px]"
                />
                <Text
                  className={`text-xs leading-5  font-bold	${
                    focused ? "text-activeColor" : "text-secondColor"
                  }`}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="forYou"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                }}
              >
                <Image
                  source={icons.customize}
                  contentFit="contain"
                  className="h-[20px] w-[20px]"
                />
                <Text
                  className={`text-xs leading-5  font-bold	${
                    focused ? "text-activeColor" : "text-secondColor"
                  }`}
                >
                  For you
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="uploadProduct"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  paddingTop: 16,
                }}
              >
                <Image
                  source={icons.center}
                  contentFit="contain"
                  className="h-[42px] w-[42px]"
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                }}
              >
                <Image
                  source={icons.category}
                  contentFit="contain"
                  className="h-[20px] w-[20px]"
                />
                <Text
                  className={`text-xs leading-5  font-bold	${
                    focused ? "text-activeColor" : "text-secondColor"
                  }`}
                >
                  Categories
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                }}
              >
                <Image
                  source={icons.inbox}
                  contentFit="contain"
                  className="h-[20px] w-[20px]"
                />
                <Text
                  className={`text-xs leading-5  font-bold	${
                    focused ? "text-activeColor" : "text-secondColor"
                  }`}
                >
                  Inbox
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
