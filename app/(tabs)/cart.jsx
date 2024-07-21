import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

import CartCard from '../../components/cartcard';
import { CartContext } from '../../context/CartContext';

const Profile = () => {
  const { carts } = useContext(CartContext);
  const { item } = useContext(CartContext);
 
  //console.log('data:', carts);

  return (
    <SafeAreaView className="bg-primary h-full">
        <FlatList
        data={carts}
        ListHeaderComponent={
          <View className="my-6 px-4">
            <Text className="text-white font-psemibold text-2xl mb-5">Cart</Text>
          </View>
        }
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponent={
          <View className="px-4">
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-secondary rounded-xl min-h-[50px] justify-center items-center w-90 mt-6">
              <Text className="text-primary font-psemibold text-lg">Checkout</Text>
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>  


  )

  
  
}


<StatusBar backgroundColor='#161622' style='light'/>

export default Profile

const styles = StyleSheet.create({})