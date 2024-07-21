import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Bar = ({title, description, img, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <View className={`flex-row rounded-lg bg-white p-2 shadow-md mr-2 ml-2 mb-3`}>
            <Image
                source={img}
                className="w-[100px] h-[100px] rounded-[5px]"
            />
            <View className={`flex-1 flex-col ml-3`}>
                <Text className={`text-lg font-bold mb-1 ml-2 text-secondary`}>{title}</Text>
                <Text className={`text-xs text-gray-600 font-preguler text-justify ml-2` }>{description}</Text>
            </View>
        </View>
      </View>  
    </TouchableOpacity>
  )
}

export default Bar