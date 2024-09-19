import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard'
import { collection, getDoc, getDocs, query, queryEqual, where } from 'firebase/firestore'
import { auth, db } from './../../configs/firebaseconfig'
import UserTripList from '../../components/MyTrips/UserTripListt'
import { useRouter } from 'expo-router'


const myTrip = () => {
    const [userTrips, setuserTrips] = useState('')
    const user = auth.currentUser
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        user && getMyTrips()
    }, [user])

    const router = useRouter()

    const getMyTrips = async () => {
        setLoading(true)
        setuserTrips([])
        const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data())
            setuserTrips(prev => [...prev, doc.data()]) //now usertrip is not 0
        })

        setLoading(false)
    }

    return (


        <ScrollView style={{ padding: 25, paddingTop: 55, backgroundColor: Colors.white, height: '100%' }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 35, fontWeight: 70
                }}>MyTrips</Text>

                <TouchableOpacity onPress={() => router.push('/create-trip/searchPlace')}>
                    <Ionicons name='add-circle' size={40} color="black" />
                </TouchableOpacity>

            </View>
            {loading && <ActivityIndicator size={'large'} color={Colors.primary} />}

            {userTrips?.length == 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}

        </ScrollView>

    )
}

export default myTrip