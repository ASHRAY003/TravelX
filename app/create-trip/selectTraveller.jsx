import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { selectTravelList } from '../../constants/options'
import OptionCard from '../../components/createTrip/OptionCard'
import { createTripContext } from '../../context/createTripContext'

const selectTraveller = () => {

    const navigation = useNavigation();
    const router = useRouter()
    const [selectTraveller, setselectTraveller] = useState()
    const { tripData, setTripData } = useContext(createTripContext)

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'select'
        })
    }, [])

    useEffect(() => {
        setTripData({ ...tripData, traveller: selectTraveller })

    }, [selectTraveller])

    useEffect(() => {
        console.log(tripData)
    }, [tripData])

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 35, marginTop: 20
            }}>Who's Travelling?</Text>

            <View style={{

                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20
                }}>Choose Your Travellers</Text>

                <FlatList
                    data={selectTravelList}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setselectTraveller(item)}
                            style={{
                                marginVertical: 10,
                            }}>
                            <OptionCard option={item} selectraveller={selectTraveller}
                            />
                        </TouchableOpacity>
                    )}

                />

            </View>
            <TouchableOpacity style={{
                padding: 15,
                backgroundColor: Colors.primary,
                borderRadius: 15,
                marginTop: 20

            }}
                onPress={(value) => { router.push('create-trip/selectDate') }}
            >
                <Text style={{
                    textAlign: 'center',
                    color: Colors.white,
                    fontSize: 20
                }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default selectTraveller