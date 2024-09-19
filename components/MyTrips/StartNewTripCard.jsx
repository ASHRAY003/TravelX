import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export const StartNewTripCard = () => {
    const router = useRouter()
    return (
        <View style={{
            padding: 20, marginTop: 50, display: 'flex', alignItems: 'center', gap: 20
        }}>
            <Entypo name="location-pin" size={34} color="black" />
            <Text style={{
                fontSize: 25, fontWeight: 80
            }}>No Trips Planned Yet</Text>

            <Text style={{
                fontSize: 20, color: Colors.grey
            }}>Let's Plan One now</Text>

            <TouchableOpacity onPress={(value) => {
                router.push('/create-trip/searchPlace')
            }} style={{
                padding: 10, backgroundColor: Colors.primary,
                borderRadius: 50, paddingHorizontal: 30
            }}>
                <Text style={{ color: Colors.white, fontSize: 17 }}>Start New Trip </Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartNewTripCard