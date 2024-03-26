import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { COLOR } from "@/constants/theme";

const SearchArea = () => {
  return (
    <View className="px-[13px] pt-[24px] flex flex-row gap-3">
      <View className="relative w-[85%]">
        <TextInput
          placeholder="Search.."
          className="border-none py-[6px] ps-[30px] bg-[#F8F8F8] rounded-[52px] text-sm leading-[19.12px] "
        />
        <View className="absolute left-2 top-0 w-[20px] h-full flex flex-row items-center ">
          <EvilIcons name="search" size={18} color={COLOR.primary} />
        </View>
      </View>
      <TouchableOpacity className="w-[39px] h-[39px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
        <Ionicons name="filter-outline" size={18} color={COLOR.active} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchArea;
