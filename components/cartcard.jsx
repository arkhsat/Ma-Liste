import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'

const CartCard = ({ item }) => {
  return (
    <View>
        <View className={'flex-row mb-8 mr-5 '}>
            <Image
                source= {item?.img}
                className= "w-[200px] h-[100px] rounded-[5px]"
            />
            <View className={`flex-col ml-3`}>
                <Text className={`text-lg font-bold mb-1 ml-2 mt-8 text-white`}>{item.title}</Text>
            </View>
        </View>
    </View>
  )
}

export default CartCard;