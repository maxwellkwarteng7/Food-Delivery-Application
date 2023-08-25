import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Icon  from 'react-native-vector-icons/Feather'
import {themeColors} from '../theme/index'
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'
import { getFeaturedRestaurants } from '../client/api';
import  changeMe  from '../theme/index';




export default function HomeScreen() {
  onPress = ()=>{
    changeMe();
   }
   
  const [featuredRestaurants , setFeaturedRestaurants] = useState([])

   useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedRestaurants(data)
    })
   })
  
  return (
    <SafeAreaView className="bg-white">
     <StatusBar barStyle="dark-content" />
     {/* making the search bar */}
     <View className="flex-row items-center space-x-2 px-4 pb-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300"> 
        {/* adding the search icon here */}
        <Icon name='search' size={20} />
        <TextInput placeholder='Restaurants' className="ml-2 flex-1"/>

        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          <Icon name="map-pin" color="gray" size={20} />
          <Text className="text-gray-600">Mango Road</Text>
       </View>
      </View>
       {/* moving on to the slider icon */}
       <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
            <TouchableOpacity>
            <Icon  style={{color: 'white'}} name="map-pin"  size={15}/>
            </TouchableOpacity>
          </View>
     </View>

     {/* moving on to the categories of the page */}
     {/* main */}
     <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{
      paddingBottom:  20
     }}>
      {/* Categories*/}
       <Categories />

     {/* Featured */}
     <View className="mt-5">
      {
         featuredRestaurants.map((item , index)=>{
           return (
             <FeaturedRow
              key={index}
              title = {item.name}
              restaurants = {item.restaurants}
              description = {item.description}
             />
           )
         })
      }
     </View>
      </ScrollView>
    </SafeAreaView>
  )
}