import Header from "@/components/Header";
import { Text, View } from "@/components/Themed";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchArea from "@/components/SearchArea";
import Features from "@/components/Features";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-white text-primaryColor">
      <Header />
      <SearchArea />
      <Features />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
