import { View, Text, TouchableOpacity } from 'react-native'
import { CartContext } from '../context/CartContext'
import React, { useContext } from 'react';
import { useNavigation } from 'expo-router';



const Addcart = ({ item, title, handlePress, containerStyle, textStyle, isLoading}) => {

  const navigation = useNavigation();

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item)=>{
    addToCart(item);
    navigation.navigate('cart')
  }

  return (
    <View className="justify-center items-center mt-5">
        <TouchableOpacity 
            onPress={() => {
              handleAddToCart(item);
            }}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[50px] justify-center items-center w-[360px] ${containerStyle} ${isLoading ? 'opacity-50': ''}`}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyle}`}> {title} </Text>
        </TouchableOpacity>
    </View>

    
  )
}

export default Addcart