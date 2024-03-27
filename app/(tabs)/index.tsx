import Header from "@/components/Header";
import { Text, View } from "@/components/Themed";
import { SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchArea from "@/components/SearchArea";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import CallToAction from "@/components/CallToAction";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-white text-primaryColor">
      <Header />
      <ScrollView style={{ marginBottom: 60 }}>
        <SearchArea />
        <Features />
        <Categories />
        <CallToAction />
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
