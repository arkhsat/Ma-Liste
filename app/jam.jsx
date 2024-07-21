import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import { icons } from '../constants';
import { images } from '../constants';
import { CartProvider, CartContext } from '../context/CartContext'





const Jam = ({containerStyle, textStyle, isLoading, item}) => {
    const handlePress = () => {
      router.push('/stuff');

      };

      const { addToCart } = useContext(CartContext);
      const route = useRoute();
      const router = useRouter()

      const boxdata = [
        {
          id:2,
          img: images.nasi,
          title:"Nasi Goreng",
        }, 
      ] 

      const handleAddToCart = () => {
        if (boxdata[0]) {
          addToCart(boxdata[0])
        }
        router.push('/cart');
      }
  
  

    return (    
      <CartProvider>
        <SafeAreaView className="bg-primary flex-1">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <TouchableOpacity onPress={handlePress}>
              <View>
                <View className=" ml-3 mt-4">
                    <Image
                      source={icons.back}
                      className="w-9 h-9"
                    />
                </View>
              </View>
              </TouchableOpacity>  

              
          <View className="px-4 flex-1 space-y-6">
            <View className="justify-center items-center">
              <View>
                <Text className="text-white font-psemibold text-2xl">Jam Tangan</Text>
              </View>
            </View>
            
            <View className="bg-white rounded-xl p-4 w-full items-center">
              <View className="w-[100%] aspect-[7/6] mb-7 relative">
                <Image
                  source={images.jam}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </View>
              <Text className="text-black font-pbold text-xs text-justify mb-4">
                Jam tangan adalah alat yang dipakai di pergelangan tangan untuk menunjukkan waktu. Alat ini terdiri dari muka jam yang dilengkapi dengan jarum penunjuk jam, menit, dan detik, serta terkadang fitur tambahan seperti tanggal, alarm, atau kronograf. Jam tangan dapat digerakkan oleh berbagai mekanisme, seperti mesin mekanik, kuarsa, atau tenaga surya. Bahan pembuat jam tangan bervariasi, mulai dari logam, plastik, hingga bahan berharga seperti emas atau titanium.
              </Text>
            </View>


          <TouchableOpacity 
            onPress={handleAddToCart}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[50px] justify-center items-center w-90 ${containerStyle} ${isLoading ? 'opacity-50': ''}`}
            disabled={isLoading}
          >
            <Text className={`text-primary font-psemibold text-lg ${textStyle}`}> Add To Cart </Text>
          </TouchableOpacity>


          </View>

          
            </ScrollView>
          </SafeAreaView>
          </CartProvider>
    )
};

export default Jam;
