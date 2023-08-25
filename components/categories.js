import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {useState} from 'react'
import { getCategories } from '../client/api'
import { useEffect } from 'react'
import { urlFor } from '../client/sanity'

export default function Categories() {
    const [activeCategory , setActiveCategory] = useState(null)
    let [categories, setCategories] = useState([]);
    useEffect(()=>{
      getCategories().then(data=> {
        setCategories(data)
      }
      )
    })
  return (
    <View className="mt-4">
        <ScrollView 
        horizontal 
         showsHorizontalScrollIndicator = {false} 
         className ="overflow-visible"
         contentContainerStyle = {{
            paddingHorizontal: 15 
         }}
         >
           {
            categories.map((category , index)=>{
                let isActive = category._id==activeCategory;
                return(
                    <View key={index} className= "flex justify-center items-center mr-6">
                    <TouchableOpacity 
                    onPress={()=> setActiveCategory(category._id)}
                    className={isActive ? "p-2 rounded-full shadow bg-gray-600 " :"p-2 rounded-full shadow bg-gray-200 " }>
                       <Image style={{width:45 , height: 45}}
                       source={{uri: urlFor(category.image).url()}}/>
                    </TouchableOpacity>
                    <Text className={isActive ?"font-semibold text-gray-800" : "text-sm"}>{category.name}</Text>
                </View>
                )  
            })
           }  
         </ScrollView>
      
    </View>
  )
}