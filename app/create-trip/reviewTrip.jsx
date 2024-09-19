import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createTripContext } from '../../context/createTripContext';
import moment from 'moment';
const reviewTrip = () => {
    const navigation = useNavigation()
    const { tripData, setTripData } = useContext(createTripContext)
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 35, marginTop: 20
            }}>Review Your Trip</Text>

            <View>
                {/*dest info */}
                <View style={{
                    marginTop: 50,
                    display: 'flex ',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    {/* //<Ionicons name="location-sharp" size={34} color="black" /> */}
                    <Text style={{ fontSize: 20 }}>📍</Text>
                    <View>
                        <Text style={{ fontSize: 20, color: Colors.grey }}>Destination</Text>
                        <Text style={{ fontSize: 20 }}>{tripData?.locationInfo?.name}</Text>
                    </View>
                </View>

                {/* {date} */}
                <View style={{
                    marginTop: 30,
                    display: 'flex ',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    {/* //<Ionicons name="location-sharp" size={34} color="black" /> */}
                    <Text style={{ fontSize: 20 }}>📆</Text>
                    <View>
                        <Text style={{ fontSize: 20, color: Colors.grey }}>Travel Date</Text>
                        <Text style={{ fontSize: 20 }}>{moment(tripData?.startDate).format('DD MMM') + "To " +
                            moment(tripData?.endDate).format('DD MMM')} ({tripData?.totalnodays + "days"})</Text>
                    </View>
                </View>

                {/* who is travelling */}
                <View style={{
                    marginTop: 30,
                    display: 'flex ',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    {/* //<Ionicons name="location-sharp" size={34} color="black" /> */}
                    <Text style={{ fontSize: 20 }}>🚌</Text>
                    <View>
                        <Text style={{ fontSize: 20, color: Colors.grey }}>Who's Travelling</Text>
                        <Text style={{ fontSize: 20 }}>{tripData?.traveller?.title}</Text>
                    </View>
                </View>

                {/* Budget */}

                <View style={{
                    marginTop: 30,
                    display: 'flex ',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    {/* //<Ionicons name="location-sharp" size={34} color="black" /> */}
                    <Text style={{ fontSize: 20 }}>💰</Text>
                    <View>
                        <Text style={{ fontSize: 20, color: Colors.grey }}>Budget</Text>
                        <Text style={{ fontSize: 20 }}>{tripData?.budget}</Text>
                    </View>
                </View>

                <TouchableOpacity //continue button
                    onPress={() => router.replace('/create-trip/generateTrip')}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.primary,
                        borderRadius: 15,
                        marginTop: 80

                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.white,
                        fontSize: 20
                    }}>Build My Trip</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default reviewTrip