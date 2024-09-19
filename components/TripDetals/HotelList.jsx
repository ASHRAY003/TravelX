import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { getPhotoRef } from '../../services/GooglePlacesApi'
import HotelCard from './HotelCard'

const HotelList = ({ hotelList }) => {

    // useEffect(() => {
    //     GetGooglePhotoRef();
    // }, [])
    // const GetGooglePhotoRef = async () => {
    //     const result = await getPhotoRef('Nevada,USA')
    //     console.log(result?.results[0].photos)


    // }
    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: '500'
            }}>🏨 Hotel Recommendations</Text>

            <FlatList
                style={{
                    marginTop: 8
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={hotelList}
                renderItem={({ item, key }) => (
                    <HotelCard item={item} />
                )}
            />
        </View>
    )
}

export default HotelList