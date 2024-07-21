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
      router.push('/wisata');

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
        <SafeAreaView className="bg-primary h-full">
          <ScrollView contentContainerStyle={{ height:' auto' }}>
            <TouchableOpacity onPress={handlePress}>
              <View>
                <View className=" ml-3 mt-4">
                    <Image
                      source={icons.back}
                      className="w-[35px] h-[35px]"
                    />
                </View>
              </View>
              </TouchableOpacity>  

              
          <View className="px-4 space-y-6">
            <View className="justify-center items-center">
              <View>
                <Text className="text-white font-psemibold text-2xl">Bromo</Text>
              </View>
            </View>

            <View className="bg-white rounded-xl p-4 w-full items-center">
              <View className="w-[100%] aspect-[7/6] mb-7 relative">
                <Image
                  source={images.bromo}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </View>
              <Text className="text-black font-pbold text-xs text-justify mb-4">Gunung Bromo adalah salah satu destinasi wisata terkenal di Indonesia, terletak di Taman Nasional Bromo Tengger Semeru di Jawa Timur. Gunung ini terkenal dengan pemandangan matahari terbitnya yang spektakuler, lanskap vulkanik yang dramatis, dan lautan pasir yang luas. Aktivitas populer di Bromo meliputi menikmati pemandangan matahari terbit dari puncak Penanjakan, menjelajahi kawah Bromo dengan naik kuda atau berjalan kaki, dan melihat fenomena alam seperti lautan awan dan fajar yang memukau. Selain itu, wisatawan juga dapat mengeksplorasi desa-desa adat Tengger di sekitarnya, yang menawarkan pengalaman budaya dan panorama alam yang menakjubkan.</Text>
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
