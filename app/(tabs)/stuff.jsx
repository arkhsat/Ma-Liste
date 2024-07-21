import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'

import { images } from '../../constants'
import Bar from '../../components/barang'

const Barang = () => {
  const boxdata = [
    {
      id:11,
      img: images.jam,
      title:"Jam Tangan",
      description:"Jam tangan adalah alat yang dipakai di pergelangan tangan untuk menunjukkan waktu. Alat ini terdiri dari muka jam yang dilengkapi dengan jarum penunjuk jam, menit, dan detik",
      handlePress: () => router.push('../jam'),
    }, 
    {
      id:22,
      img: images.sepatu,
      title:"Sepatu",
      description:"Terdapat banyak jenis sepatu yang dirancang untuk berbagai keperluan, termasuk sepatu olahraga, sepatu formal, sepatu kasual, dan sepatu khusus untuk aktivitas tertentu seperti mendaki atau berlari.",
      handlePress: () => router.push('../sepatu'),
    },
    {
      id:33,
      img: images.baju,
      title:"Baju",
      description:"Baju adalah pakaian yang dikenakan di bagian atas tubuh dan sering kali meliputi lengan dan bagian atas lengan.",
      handlePress: () => router.push('../baju'),
    },
    {
      id:44,
      img: images.dompet,
      title:"Dompet",
      description:"Dompet adalah aksesori kecil yang digunakan untuk menyimpan uang tunai, kartu kredit, identitas, dan barang kecil lainnya.",
    },
    {
      id:55,
      img: images.tas,
      title:"Backpack",
      description:"Backpack adalah tas yang dirancang untuk dipakai di punggung dengan menggunakan dua tali yang diikatkan di bahu",
    }
  ]
    

    return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height:' 100%' }}>
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-2">
              <View>
                <Text className="text-white font-psemibold text-2xl">Barang</Text>
              </View>
            </View>
          </View>

        {boxdata.map((item) =>(
        <Bar 
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


export default Barang