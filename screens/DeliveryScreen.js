import { Image ,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {featured} from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView , {Marker} from 'react-native-maps';
import {themeColors} from '../theme/index'
import Icon  from 'react-native-vector-icons/Feather'
import {useDispatch, useSelector} from 'react-redux';
import { emptyCart } from '../slices/cartSlice';




const DeliveryScreen = () => {
    const restaurant = useSelector(state=> state.restaurant.restaurant)
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // cancelling the order 
    const cancelOrder = ()=>{
      navigation.navigate('Home')
      dispatch(emptyCart());
    }
  return (
    <View className="flex-1">
      {/* we will be using a map view here */}
      <MapView 
      initialRegion={{
        latitude : restaurant.lat , 
        longitude: restaurant.lng , 
        latitudeDelta : 0.04 , 
        longitudeDelta : 0.05 
      }}
      className= "flex-1"
      mapType='standard'
      >
        <Marker 
        coordinate={{
            latitude: restaurant.lat , 
            longitude: restaurant.lng , 
        }}
        title = {restaurant.name}
        description={restaurant.description}
        pinColor={themeColors.bgColor(1)}
        />
      </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between  px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                    <Text className="text-3xl font-extrabold text-gray-700">
                      20-30 minutes  
                    </Text>
                    <Text className="mt-2 text-gray-700 font-semibold">
                      Your order is on it's way!
                    </Text>
                </View>
                <Image className="w-24 h-24" source={require('../assets/images/bikeGuy2.gif')}/>
            </View>
             <View 
             style={{backgroundColor: themeColors.bgColor(0.8)}}
             className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                <View className="p-1 rounded-full"
                style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
                    <Image source={require('../assets/images/deliveryGuy.png')}
                    className="h-16 w-16 rounded-full"/>     
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-white text-lg font-bold" >
                        Maxwell Kofi Agyei
                    </Text>
                    <Text className="text-white text-lg font-semibold">
                        Delivery man
                    </Text>
                </View>
                <View className="flex-row items-center space-x-3 mr-3">
                    <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Icon name="phone" style={{color: 'green' , backgroundColor: 'white'}} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white p-2 rounded-full"
                    onPress={cancelOrder}
                    >
                        <Icon name="x" style={{color: 'red' , backgroundColor: 'white'}} size={24} />
                    </TouchableOpacity>
                </View>
             </View>
        </View>
    </View>
  )
}

export default DeliveryScreen