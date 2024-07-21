import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'

import { images } from '../../constants'
import Wis from '../../components/wisata'

const Wisata = () => {
  const boxdata = [
    {
      id:111,
      img: images.bromo,
      title:"Bromo",
      description:"Gunung ini terkenal dengan pemandangan matahari terbitnya yang spektakuler, lanskap vulkanik yang dramatis, dan lautan pasir yang luas.",
      handlePress: () => router.push('../bromo'),
    }, 
    {
      id:222,
      img: images.raja,
      title:"Raja Ampat",
      description:"Tempat wisata ini menawarkan pemandangan yang spektakuler, termasuk pantai-pantai yang masih alami, hutan tropis, dan terumbu karang yang kaya akan kehidupan laut seperti ikan, kura-kura, dan hiu.",
      handlePress: () => router.push('../raja'),
    },
    {
      id:333,
      img: images.sumba,
      title:"Sumba",
      description:"Sumba adalah pulau yang terletak di Indonesia, bagian dari provinsi Nusa Tenggara Timur. Destinasi wisata di Sumba dikenal dengan keindahan alamnya yang masih alami,",
      handlePress: () => router.push('../sumba'),
    },
    {
      id:444,
      img: images.komodo,
      title:"Taman Nasional Komodo",
      description:"Taman Nasional Komodo adalah kawasan konservasi yang terletak di provinsi Nusa Tenggara Timur, Indonesia. Terkenal sebagai rumah bagi komodo, spesies kadal terbesar di dunia.",
      
    },
    {
      id:555,
      img: images.danau,
      title:"Danau Toba",
      description:"Danau Toba adalah destinasi wisata terkenal di Sumatra Utara, Indonesia. Terletak di kaldera gunung berapi yang sangat besar, Danau Toba adalah danau vulkanik terbesar di dunia dan merupakan salah satu danau terdalam.",
      
    }
  ]
  console.log('Boxdata:', boxdata);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height:' 100%' }}>
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-2">
              <View>
                <Text className="text-white font-psemibold text-2xl">Destinas Wisata</Text>
              </View>
            </View>
          </View>

          {boxdata.map((item) =>(
            <Wis 
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


export default Wisata