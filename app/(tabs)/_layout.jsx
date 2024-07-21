import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

import { icons } from '../../constants';
import { CartContext, CartProvider } from '../../context/CartContext';
import { useContext } from 'react';

const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2" >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused} ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>   
    </View>
 
  )

}

const TabsLayout = () => {
  return (
    <CartProvider>
    <>
      <Tabs
        screenOptions={{ 
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
            //borderRadius: 5,
          }
         }}
      >
        <Tabs.Screen
          name="home"
          options={{ 
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
              
            )
           }}
        />
        <Tabs.Screen
          name="food"
          options={{ 
            title: 'Food',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcon
                icon={icons.food}
                color={color}
                name="Makanan"
                focused={focused}
              />
              
            )
           }}
        />
        <Tabs.Screen
          name="stuff"
          options={{ 
            title: 'Stuff',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcon
                icon={icons.barang}
                color={color}
                name="Barang"
                focused={focused}
              />
              
            )
           }}
        />
        <Tabs.Screen
          name="wisata"
          options={{ 
            title: 'Wisata',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcon
                icon={icons.wisata}
                color={color}
                name="Wisata"
                focused={focused}
              />
              
            )
           }}
        />
        <Tabs.Screen
          name="cart"
          options={{ 
            title: 'cart',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              const { carts } = useContext(CartContext)
              return (
                <View style={{ position:"relative" }}>
                  <TabsIcon
                    icon={icons.cart}
                    color={color}
                    name="Cart"
                    focused={focused}
                  />
                  <View style={{ 
                    height: 14,
                    width: 14,
                    borderRadius: 7,
                    backgroundColor: color,
                    justifyContent: "center",
                    alignItems: "center",
                    position:"absolute",
                    top: -14,
                    right: -13,
                   }}>
                    <Text style={{ 
                      fontSize: 10,
                      color: "black",
                      fontWeight: "500"


                     }}
                     >{carts.length}</Text>
                  </View>
                </View>
              );
            },
           }}
        />
      </Tabs>
    </>
    </CartProvider>
    
  )
}

<StatusBar backgroundColor='#161622' style='light'/>


export default TabsLayout