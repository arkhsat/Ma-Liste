import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import { icons } from '../constants';
import { images } from '../constants';
import { CartProvider, CartContext } from '../context/CartContext'



const Bubur = ({containerStyle, textStyle, isLoading, item}) => {
    const handlePress = () => {
      router.push('/food');

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
                <Text className="text-white font-psemibold text-2xl">Bubur Ayam</Text>
              </View>
            </View>
            
            <View className="bg-white rounded-xl p-4 w-full items-center">
              <View className="w-[100%] aspect-[7/6] mb-7 relative">
                <Image
                  source={images.bubur}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </View>
                  <Text className="text-black font-pbold text-xs text-justify mb-4">Bubur ayam adalah hidangan sarapan khas Indonesia yang terdiri dari bubur nasi yang lembut, disajikan dengan potongan ayam yang telah direbus atau digoreng. Bubur ayam biasanya dilengkapi dengan berbagai pelengkap seperti irisan daun bawang, seledri, kacang kedelai goreng, bawang goreng, kerupuk, dan cakwe. Hidangan ini juga sering disajikan dengan telur rebus dan disiram dengan kuah kaldu ayam yang gurih. Untuk menambah cita rasa, bubur ayam dapat diberi tambahan kecap manis, sambal, atau perasan jeruk nipis.</Text>
                  <Text className="text-secondary font-pbold font-psemibold text-2xl mb-1 text-center mb-3">Information</Text>
                  <Text className="text-black mb-2 font-pbold">Kalori: 250 - 300 kkal</Text>
                  <Text className="text-black mb-2 font-pbold">Protein: 10 - 15 gram</Text>
                  <Text className="text-black font-pbold">Lemak: 5 - 10 gram</Text>
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

export default Bubur;
