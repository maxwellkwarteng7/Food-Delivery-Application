import { View, Image,  Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Feather'
import {themeColors} from '../theme/index'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../client/sanity'



const RestaurantCard = ({item}) => {
    const navigation = useNavigation();
  return (
     <TouchableWithoutFeedback
     onPress={()=> navigation.navigate('Restaurant',{...item})}
     
     >
        {/* designing the restaurant screen */}

        <View 
        style={{shadowColor: themeColors.bgColor(0.2),
        shadowRadius: 7
        }} 

        className="bg-white rounded-3xl shadow-lg m-3 p-2">
            <Image className="h-36 w-64 rounded-t-3xl" source={{uri : urlFor(item.image).url()}} />
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2">{item.name}
                </Text>
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.stars}
                        </Text>
                        <Text className="text-gray-700">
                            ({item.reviews} review) . <Text className="font-semibold">{item?.type?.name}</Text>

                        </Text>
                    </Text>
                </View>
                {/* The restaurant address */}
                <View className="flex-row items-center space-x-1"> 
                <Icon name="map-pin" color="gray" size={15} />
                <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>

            </View>
            </View>
        </View>

     </TouchableWithoutFeedback>
  )
}

export default RestaurantCard