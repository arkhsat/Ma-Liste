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
          id: 1,
          img: images.ayam,
          title:"Fried Chicken",
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
                <Text className="text-white font-psemibold text-2xl">Sumba</Text>
              </View>
            </View>

            <View className="bg-white rounded-xl p-4 w-full items-center">
              <View className="w-[100%] aspect-[7/6] mb-7 relative">
                <Image
                  source={images.sumba}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </View>
              <Text className="text-black font-pbold text-xs text-justify mb-4">Sumba adalah pulau yang terletak di Indonesia, bagian dari provinsi Nusa Tenggara Timur. Destinasi wisata di Sumba dikenal dengan keindahan alamnya yang masih alami, budaya tradisional, dan pantai-pantainya yang menawan</Text>
              <Text className="text-black font-pbold text-xs text-justify mb-4">Sumba juga dikenal dengan kain tenun ikatnya yang indah dan kerajinan tangan yang mencerminkan warisan budaya lokal. Destinasi ini ideal bagi para pengunjung yang mencari pengalaman budaya yang autentik dan keindahan alam yang menakjubkan.</Text>
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
