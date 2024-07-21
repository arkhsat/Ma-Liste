import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext, CartProvider } from '../context/CartContext';

import { images } from '../constants';
import Button from '../components/p';



export default function App() {
  return (
    <CartProvider>
    <SafeAreaView className="bg-primary h-full" >
      <ScrollView contentContainerStyle={{ height:' 100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source= {images.MaList3}
            className= "w-[300px] h-[80px] justify-center"
            //resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center" >Your Ultimate Guide to Catalog Listings With{' '}
              <Text className="text-secondary-200">malist</Text>
            </Text>
          </View>

          <Image
            source= {images.New}
            className= "w-[400px] w-full h-[300px]"
            //resizeMode="contain"
          />

          <Text className= "text-sm font-preguler text-gray-100 mt-7 text-center">Discover a new way to explore and organize your favorite items with malist, your ultimate catalog list app. Whether you're searching for the latest gadgets, top fashion picks, must-read books, or anything else, malist has got you covered</Text>
          
          
          <Button
            title="Continue"
            handlePress={ () => router.push('/home')}
            ContainerStyle="W-full mt-17"

          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
    </CartProvider>
  );
}

