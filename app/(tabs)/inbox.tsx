import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import InboxLists from "@/components/Inbox/InboxLists";
import ChatArea from "@/components/Inbox/ChatArea";

const inbox = () => {
  const [openComponent, setOpenComponent] = useState("list");
  return (
    <SafeAreaView className="flex-1 px-[13px]  pt-12  pb-5 text-primaryColor bg-white">
      {openComponent === "list" ? (
        <InboxLists />
      ) : (
        <ChatArea setOpenComponent={setOpenComponent} />
      )}

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default inbox;
