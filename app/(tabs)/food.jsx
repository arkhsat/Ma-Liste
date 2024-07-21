import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import { images } from '../../constants'
import Makanan from '../../components/makanan'


const Food = () => {

  
  
  
  const boxdata = [
    {
      id:1,
      img: images.ayam,
      title:"Fried Chicken",
      description:"Ayam goreng biasanya dibuat dengan menggoreng potongan ayam yang telah dibumbui hingga matang dan berwarna kecokelatan",
      handlePress: () => router.push('../friedchicken'),
    }, 
    {
      id:2,
      img: images.nasi,
      title:"Nasi Goreng",
      description:"Nasi goreng dibuat dengan menggoreng nasi yang sudah dingin atau nasi sisa bersama dengan bawang putih, bawang merah, kecap manis, dan cabai",
      handlePress: () => router.push('../nasigoreng'),
    },
    {
      id:3,
      img: images.mie,
      title:"Mie Ayam",
      description:"Mie ayam adalah hidangan mi khas Indonesia yang populer dan banyak digemari. Hidangan ini terdiri dari mi kuning yang direbus dan disajikan dengan potongan ayam",
      handlePress: () => router.push('../mieayam'),
    },
    {
      id:4,
      img: images.bubur,
      title:"Bubur Ayam",
      description:"Bubur ayam adalah hidangan sarapan khas Indonesia yang terdiri dari bubur nasi yang lembut, disajikan dengan potongan ayam yang telah direbus atau digoreng.",
      handlePress: () => router.push('../buburayam'),
    },
    {
      id:5,
      img: images.martabak,
      title:"Martabak",
      description:"Martabak adalah makanan jalanan yang populer di Indonesia, Terbuat dari adonan tepung yang tebal dan lembut, diisi dengan berbagai bahan",
    }

    
  ]


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height:' 100%' }}>
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-2">
              <View>
                <Text className="text-white font-psemibold text-2xl">Makanan</Text>
              </View>
            </View>
          </View>

      {boxdata.map((item) =>(
        <Makanan 
        key={item.id}
        id={item.id}
        img={item.img}
        title={item.title}
        description={item.description}
        handlePress={item.handlePress}
        ContainerStyle="W-full mt-17"
      />
      ))}


      </ScrollView>
    </SafeAreaView>

    
  )
}

export default Food