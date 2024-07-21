import { View, Text, FlatList, Image, RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Redirect, router } from 'expo-router'

import { images } from '../../constants'
import { icons } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {

  const [refershing, setRefershing] = useState(false)

  const makan  = () => {
    router.push('/food');
  };

  const barang  = () => {
    router.push('/stuff');
  };

  const wisata  = () => {
    router.push('/wisata');
  };

  const cart  = () => {
    router.push('/cart');
  };

  const OnRefresh = async => {
    setRefershing(true);
    setRefershing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height:' 100%' }}>

          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100 ">Welcome To</Text>
                <Text className="text-white font-psemibold text-2xl ">maliste</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source= { images.logoSmall }
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <TouchableOpacity onPress={makan}>
              <View>
                <View className={`w-auto h-20 rounded-lg h-20 bg-white p-2 shadow-md mr-2 ml-2 mb-5`}>
                  <View className="flex-row justify-between w-full">
                    <Text className="text-lg text-center font-bold ml-2 text-secondary text-[30px] mt-3 ">Makanan</Text>
                    <Image
                      source={icons.food}
                      className="w-[50px] h-[50px]"
                    />
                  </View>
                </View>
              </View>  
            </TouchableOpacity>

            <TouchableOpacity onPress={barang}>
              <View>
                <View className={`w-auto h-20 rounded-lg bg-white p-2 shadow-md mr-2 ml-2 mb-5`}>
                  <View className="flex-row items-center justify-between w-full">
                    <Text className="text-lg text-center font-bold ml-2 text-secondary text-[30px] mt-3 ">Barang</Text>
                    <Image
                      source={icons.barang}
                      className="w-[50px] h-[50px]"
                    />
                  </View>
                </View>
              </View>  
            </TouchableOpacity>

            <TouchableOpacity onPress={wisata}>
              <View>
                <View className={`w-auto h-20 rounded-lg bg-white p-2 shadow-md mr-2 ml-2 mb-5`}>
                  <View className="flex-row justify-between w-full">
                    <Text className="text-lg text-center font-bold ml-2 text-secondary text-[30px] mt-3 ">Wisata</Text>
                    <Image
                      source={icons.wisata}
                      className="w-[50px] h-[50px]"
                    />
                  </View>
                </View>
              </View>  
            </TouchableOpacity>

            <TouchableOpacity onPress={cart}>
              <View>
                <View className={`w-auto h-20 rounded-lg bg-white p-2 shadow-md mr-2 ml-2 mb-5`}>
                  <View className="flex-row justify-between w-full">
                    <Text className="text-lg text-center font-bold ml-2 text-secondary text-[30px] mt-3 ">Cart</Text>
                    <Image
                      source={icons.cart}
                      className="w-[50px] h-[50px]"
                    />
                  </View>
                </View>
              </View>  
            </TouchableOpacity>


          </View>

          <RefreshControl refershing={refershing} OnRefresh={OnRefresh}/>
          <StatusBar backgroundColor='#161622' style='light'/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home