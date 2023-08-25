import { View, Image,  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Feather'
import {themeColors} from '../theme/index'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart , selectCartItemsById } from '../slices/cartSlice'
import  {useSelector} from 'react-redux'
import { urlFor } from '../client/sanity';


const Dish = ({item}) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state=> selectCartItemsById(state, item._id))

   const handleIncrease = () =>{
       dispatch(addToCart({...item}))
   }

   const handleDecrease = () =>{
      dispatch(removeFromCart({id: item._id}))
   }
  
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{height:100 , width:100}} source={{uri: urlFor(item.image).url()}}  />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">
                Ghs {item.price}
            </Text>
            <View className = "flex-row items-center">
                   {/* two button add to cart and removing from cart */}

            {/* remove from cart */}
            <TouchableOpacity
            onPress={handleDecrease}
            className ="p-1 rounded-full" 
            style= {{backgroundColor:themeColors.bgColor(1)}}
               disabled= {!totalItems.length}
                >
                    <Icon name="minus" size={20} color="white" />
                </TouchableOpacity>

                    <Text className="px-3">{totalItems.length}</Text>

                {/* Add to cart */}

                <TouchableOpacity
                onPress={handleIncrease} 
                className ="p-1 rounded-full" 
            style= {{backgroundColor:themeColors.bgColor(1)}}
                >
                    <Icon name="plus" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Dish