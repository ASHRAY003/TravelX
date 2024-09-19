import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { getPhotoRef } from '../../services/GooglePlacesApi'
import { GOOGLE_MAPS_API_KEY } from '../../constants'

const HotelCard = ({ item }) => {
    useEffect(() => {
        GetGooglePhotoRef()
    }, [])
    const [photoref, setPhotoRef] = useState();

    const GetGooglePhotoRef = async () => {
        const result = await getPhotoRef(item.name)
        setPhotoRef(result.results[0].photos[0].photo_reference)
        console.log(photoref)
    }
    return (
        <View style={{
            marginRight: 15,
            width: 180,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Colors.lightgrey,
            padding: 10
        }}>

            <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photoref + '&key=' + GOOGLE_MAPS_API_KEY }}
                style={{
                    height: 240,
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: 15
                }} />
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '300'
                }}>{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text>⭐ {item.rating}</Text>
                    <Text>💸 {item.price}</Text>
                </View>

            </View>
        </View>
    )
}

export default HotelCard