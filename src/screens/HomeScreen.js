import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-4" : "mt-10";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-x-6" + topMargin}
      >
        {/* Avartar Image */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destinations..."
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>

        {/* Cartegories */}
        <View className="mb-4">
          <Categories/>
        </View>

        {/* Sort Cartegories */}
        <View className="mb-4">
          <SortCategories/>
        </View>

        {/* Destinations */}
        <View>
          <Destinations/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
