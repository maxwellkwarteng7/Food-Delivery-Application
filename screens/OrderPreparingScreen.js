import {Image , View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
    // Then we move back to the delivery screen
       navigation.navigate('Delivery');
        } ,3000)
    },[])
  return (
    <View className="flex-1 bg-white justify-center items-center">
        <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
    </View>
  )
}

export default OrderPreparingScreen