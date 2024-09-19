import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { getPhotoRef } from '../../services/GooglePlacesApi'
import { GOOGLE_MAPS_API_KEY } from '../../constants'

const PlaceCard = ({ activity }) => {

    useEffect(() => {
        GetGooglePhotoRef()
    }, [])
    const [photoref, setPhotoRef] = useState();

    const GetGooglePhotoRef = async () => {
        const result = await getPhotoRef(activity.name)
        setPhotoRef(result.results[0].photos[0].photo_reference)
        console.log(photoref)
    }
    return (
        <View style={{
            marginBottom: 20,
            borderWidth: 1,
            borderRadius: 15,
            padding: 10,
            borderColor: Colors.lightgrey,
        }}>
            <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photoref + '&key=' + GOOGLE_MAPS_API_KEY }}
                style={{
                    width: '100%',
                    borderRadius: 15,
                    height: 120,
                    marginBottom: 10
                }} />
            <Text style={{ fontWeight: 'bold' }}>{activity.name}</Text>
            <Text>{activity.details}</Text>

            <Text>⌚Time to Spend: <Text style={{ fontWeight: 'bold' }}>{activity.timeToSpend}</Text> </Text>
            <Text>🎟️Ticket Pricing: <Text style={{ fontWeight: 'bold' }}>{activity.ticketPricing}</Text></Text>

        </View>
    )
}

export default PlaceCard