import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';
import { GOOGLE_MAPS_API_KEY } from '../../constants';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const UserTripList = ({ userTrips }) => {
    console.log("userTrips: ", userTrips);
    const latestTrip = JSON.parse(userTrips[0].TripData)
    console.log("tripdata", latestTrip)
    const router = useRouter()

    // const handlePress = () => {
    //     router.push({
    //         pathname: '/tripDetails', // Ensure this matches your routing configuration
    //         params: {
    //             trip: JSON.stringify(userTrips) // Serialize the trip data for passing as params
    //         }
    //     });
    // };

    return userTrips && (

        <View>
            <View >
                {latestTrip?.locationInfo?.photoref ?
                    <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + latestTrip.locationInfo?.photoref + '&key=' + GOOGLE_MAPS_API_KEY }}
                        style={{
                            height: 240,
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: 15
                        }} />
                    :
                    <Image source={require('./../../assets/images/plane.gif')}
                        style={{
                            width: '100%',
                            height: 240,
                            objectFit: 'cover',
                            borderRadius: 15
                        }} />
                }
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontStyle: 'italic',
                        fontSize: 24
                    }}>
                        {userTrips[0]?.tripPlan?.tripDetails?.location || "Location not available"}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontSize: 17,
                            color: Colors.grey
                        }}>{moment(latestTrip?.startDate).format('DD MMM YYYY') || "no date"}</Text>
                        <Text style={{
                            fontSize: 17,
                            color: Colors.grey
                        }}>
                            🚌{latestTrip?.traveller?.title}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push({
                        pathname: '/tripDetails', // Ensure this matches your routing configuration
                        params: {
                            trip: JSON.stringify(userTrips) // Serialize the trip data for passing as params
                        }
                    })}
                        style={{
                            backgroundColor: Colors.primary,
                            borderRadius: 15,
                            padding: 15,
                            marginTop: 15

                        }}>
                        <Text style={{
                            color: Colors.white,
                            textAlign: 'center',

                        }}>See Your Plan</Text>
                    </TouchableOpacity>
                </View>

                {userTrips.map((trip, index) => (
                    // <UserTripList trip={trip} key={index} />
                    <UserTripCard trip={trip} key={index} />
                ))}
            </View>
        </View>
    )
}

export default UserTripList