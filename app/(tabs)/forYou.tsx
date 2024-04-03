import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Header/Header";
import { StatusBar } from "expo-status-bar";
import Categories from "@/components/Categories";
import Features from "@/components/Features";

const forYou = () => {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-white text-primaryColor">
      <Header />
      <ScrollView style={{ marginBottom: 60 }}>
        <Features />
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default forYou;
