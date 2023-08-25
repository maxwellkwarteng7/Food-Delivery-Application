import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {featured} from '../constants'
import {themeColors} from '../theme/index'
import Icon  from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice'
import { urlFor } from '../client/sanity'


const CartScreen = () => {
    const restaurant = useSelector(state => state.restaurant.restaurant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
    const dispatch = useDispatch();
    const deliveryFee = 5 ;

    const [groupItems, setGroupItems] = useState({})
    useEffect(()=>{
            const items = cartItems.reduce((group, item)=> {
                if(group[item.id]){
                    group[item.id].push(item);
                }else{
                    group[item.id] = [item]
                }
                return group; 
            },{})
            setGroupItems(items);
    },[cartItems])
  return (
    <View className="bg-white flex-1">
        {/* The back button */}
        <View className="relative py-4 shadow">
          <TouchableOpacity
          onPress={()=> navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className = "absolute z-10 rounded-full p-2 shadow top-4 left-2">
                <Icon name="arrow-left" size={30} color="white" />
            </TouchableOpacity>   
        </View>
        <View>
            {/* adding the description */}
            <Text className="text-center font-bold text-xl">Your Cart</Text>
            <Text className="text-center text-gray-500 text-xl">{restaurant.name}</Text>
        </View>
        {/* delivery time */}
        <View className="flex-row px-4 items-center"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
            <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full"  />
            {/* Text for the delivery time  */}

            <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>

            {/* A button to change that */}
            <TouchableOpacity> 
                <Text  className="font-bold p-2" style={{color: themeColors.text}}>Change</Text>
            </TouchableOpacity>
        </View>
        
        {/* displaying the cart dishes */}
        <ScrollView
             showsVerticalScrollIndicator= {false}
             contentContainerStyle={{
                paddingBottom : 50 
             }}
             className="bg-white pt-5"
             >
                {
                    Object.entries(groupItems).map(([key , items])=>{
                        let dish = items[0]
                        return(
                            <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                            {/*displaying the number of items in the cart  */}
                            <Text className="font-bold"
                            style={{color: themeColors.text}}>
                                {items.length} x
                            </Text>
                            <Image className="h-14 w-14 rounded-full" source={{uri: urlFor(dish.image).url()}}/>
                            <Text className="flex-1 font-bold text-gray-700">
                                {dish.name}
                            </Text>
                            <Text className="font-bold text-base">$ {dish.price}</Text>
                            <TouchableOpacity
                            onPress={()=>dispatch(removeFromCart({id: dish._id}))}
                            className="p-1 rounded-full"
                            style={{backgroundColor: themeColors.bgColor(1)}}>
                                <Icon name="minus" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                        
                        )
                       
                    })
                }


             </ScrollView>

             {/* calculation view (total cart) */}
             {/* Totals */}
             {cartItems.length ?
             <View className="p-6 px-8 rounded-t-3xl space-y-4"  style={{backgroundColor: themeColors.bgColor(0.2)}}>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-bold p-2">Subtotal</Text>
                    <Text className="text-gray-700 p-2 font-bold">${cartTotal}</Text>  
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-bold p-2">Delivery Fee</Text>
                    <Text className="text-gray-700 p-2 font-bold">${deliveryFee}</Text>  
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-bold p-2">Order Total</Text>
                    <Text className="text-gray-700 p-2 font-extrabold">${cartTotal + deliveryFee}</Text>  
                </View>
                {/* adding the placeorder button */}
                  <TouchableOpacity 
                   onPress={()=> navigation.navigate('OrderPreparing')}
                  style={{backgroundColor: themeColors.bgColor(1)}} 
                  className ="p-3 rounded-full">
                    <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                  </TouchableOpacity>
             </View>
 : ''}
    </View>
  )
}


export default CartScreen 