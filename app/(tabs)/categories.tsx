import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import { StatusBar } from "expo-status-bar";

const categories = () => {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-white text-primaryColor">
      <Header />
      <ScrollView style={{ marginBottom: 60 }}>
        <Categories />
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default categories;
