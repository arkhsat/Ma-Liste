import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {


  return (
      <View className="flex flex-row items-center space-x-2 w-full h-12 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-preguler"
          value={value}
          placeholder="Search Catalog"
          placeholderTextColor="#CDCDE0"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        <TouchableOpacity>
            <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
  );
};

export default SearchInput;