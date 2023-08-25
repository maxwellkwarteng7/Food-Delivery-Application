import { View,Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Feather'
import {themeColors} from '../theme/index'
import Dish from '../components/Dish'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
import { urlFor } from '../client/sanity';

export default function RestaurantScreen() {
  const {params} = useRoute();
  let item = params ;
  // making the back button functional 
  // console.log('restaurant: ',item);
  const dispatch = useDispatch();

  // removing items from cart 
  const navigation = useNavigation(); 

  useEffect(()=>{
    if(item && item._id){
      dispatch(setRestaurant({...item}))
    }
  })

   
  return (
    <View>
        <CartIcon />
        <StatusBar style="light" />
      <ScrollView>
        <View className= "relative">
          <Image source={{uri:urlFor(item.image).url()}} className="w-full h-72"/>
          <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon onPress={()=>navigation.goBack()}name="arrow-left" size={27} color={themeColors.bgColor(1)}/>
          </TouchableOpacity>
        </View>
        {/* Having a container here */}

          <View 
          style={{borderTopLeftRadius: 40 , borderTopRightRadius :40}}
          className="bg-white -mt-12 pt-6">

             {/* coding the view for the restaurant screen */}

            <View className="px-5">
                   <Text className="text-3xl font-bold">
                  {item.name} 
                  </Text>
                  <View className="flex-row items-center space-x-1 p-2">
                    <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                        <Text className="text-xs">
                              <Text className="text-green-700">{item.stars}
                             </Text>
                                <Text className="text-gray-700">
                                    ({item.reviews} review) . <Text className="font-semibold">{item?.type?.name}</Text>

                                </Text>
                        </Text>
                        <View className="flex-row items-center space-x-1 p-2"> 
                            <Icon name="map-pin" color="gray" size={15} />
                            <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>
                     </View>
                </View>
              <Text className="text-gray-500 mt-2">
                 {item.description}
                  </Text>  
            </View>
         </View>

        {/* Menu */}
        <View className="pb-36 bg-white">
           <Text className="px-4 py-4 text-2xl font-bold">Menu
           </Text>
            {/* dishes */}
            {
              item.dishes.map((dish, index)=>
                  <Dish key={index} item={dish} /> 
              )
            }
        </View>
      </ScrollView>
    </View>
  )
}