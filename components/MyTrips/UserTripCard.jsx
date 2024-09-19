import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import { GOOGLE_MAPS_API_KEY } from '../../constants'

const UserTripCard = ({ trip }) => {
    const formatData = (data) => {  //fn to convert data to json format
        return JSON.parse(data)
    }
    return (
        <View style={{
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'
        }}>
            {/* <Image style={{
                height: 100, width: 100,
                borderRadius: 10
            }} source={require('./../../assets/images/plane.gif')} /> */}
            <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + formatData(trip.TripData).locationInfo?.photoref + '&key=' + GOOGLE_MAPS_API_KEY }}
                style={{
                    height: 100, width: 100,
                    borderRadius: 10
                }} />


            <View >
                <Text style={{
                    fontSize: 20,
                }}>{trip.tripPlan?.tripDetails?.location}</Text>
                <Text style={{
                    fontSize: 15,
                    color: Colors.grey
                }}>{moment(formatData(trip.TripData).startDate).format('DD MMM YYYY') || "no date"}</Text>
                <Text style={{
                    fontSize: 15,
                    color: Colors.grey
                }}>{formatData(trip.TripData).traveller.title}</Text>
            </View>
        </View>
    )
}

export default UserTripCard