import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {themeColors} from '../theme/index'
import RestaurantCard from '../components/RestaurantCard'
import  Icon  from 'react-native-vector-icons/Feather'




export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
      <View className= "flex-row justify-between items-center px-4">
        <View >
            <Text className="font-bold text-lg">{title}
            </Text>
            <Text className="text-gray-500 xs">{description}
            </Text>
        </View>
         <Icon name="arrow-right" size={15} style={{color: themeColors.bgColor(1)}} />
      </View>
        {/* Restaurants */}
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle = {{
            paddingHorizontal: 15
        }} 
        className="overflow-visible py-5"
        >
         {
            restaurants.map((restaurant , index)=>{
                return (
                    <RestaurantCard  key={index} item={restaurant}/>
                )
            })
         }
        </ScrollView>
        
    </View>
  )
}