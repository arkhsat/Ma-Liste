import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CartContext, CartProvider } from '../context/CartContext';

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
  
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) {
      SplashScreen.hideAsync();
    }  

  }, [fontsLoaded, error])


  if(!fontsLoaded && !error) return null;

  return (
    <CartProvider>
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="friedchicken" options={{ headerShown: false }}/>
        <Stack.Screen name="nasigoreng" options={{ headerShown: false }}/>
        <Stack.Screen name="mieayam" options={{ headerShown: false }}/>
        <Stack.Screen name="buburayam" options={{ headerShown: false }}/>
        <Stack.Screen name="jam" options={{ headerShown: false }}/>
        <Stack.Screen name="baju" options={{ headerShown: false }}/>
        <Stack.Screen name="sepatu" options={{ headerShown: false }}/>
        <Stack.Screen name="bromo" options={{ headerShown: false }}/>
        <Stack.Screen name="raja" options={{ headerShown: false }}/>
        <Stack.Screen name="sumba" options={{ headerShown: false }}/>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
    </CartProvider>
  )
}

<StatusBar backgroundColor='#161622' style='light'/>

export default RootLayout
