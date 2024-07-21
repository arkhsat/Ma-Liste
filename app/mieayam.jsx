import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import { icons } from '../constants';
import { images } from '../constants';
import { CartProvider, CartContext } from '../context/CartContext'




const Mie = ({containerStyle, textStyle, isLoading, item}) => {
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
                <Text className="text-white font-psemibold text-2xl">Mie Ayam</Text>
              </View>
            </View>
                
            <View className="bg-white rounded-xl p-4 w-full items-center">
              <View className="w-[100%] aspect-[7/6] mb-7 relative">
                <Image
                  source={images.mie}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </View>
                  <Text className="text-black font-pbold text-xs text-justify mb-4">Mie ayam adalah hidangan mi khas Indonesia yang populer dan banyak digemari. Hidangan ini terdiri dari mi kuning yang direbus dan disajikan dengan potongan ayam yang dimasak dengan bumbu-bumbu seperti kecap manis, bawang putih, bawang merah, dan rempah-rempah lainnya. Biasanya, mie ayam disajikan dengan tambahan sayuran hijau seperti sawi atau bayam, dan taburan bawang goreng serta daun bawang. Pelengkap lain yang sering menemani mie ayam adalah pangsit, bakso.</Text>
                  <Text className="text-secondary font-pbold font-psemibold text-2xl mb-1 text-center mb-3">Information</Text>
                  <Text className="text-black mb-2 font-pbold">Kalori: 400 - 500 kkal</Text>
                  <Text className="text-black mb-2 font-pbold">Protein: 20 - 25 gram</Text>
                  <Text className="text-black font-pbold">Lemak: 10 - 15 gram</Text>
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

export default Mie;
