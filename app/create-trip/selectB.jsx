import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { selectBudgetOptions } from '../../constants/options'
import OptionCard from '../../components/createTrip/OptionCard'
import { createTripContext } from '../../context/createTripContext'
import { Colors } from '../../constants/Colors'

const selectB = () => {
    const navigation = useNavigation()
    const [selectedOption, setSelectedOption] = useState()
    const { tripData, setTripData } = useContext(createTripContext)
    const router = useRouter()


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])
    useEffect(() => {
        selectedOption && setTripData({
            ...tripData, budget: selectedOption?.title
        })
    }, [selectedOption])

    const onClickContinue = () => {
        if (!selectedOption) {
            ToastAndroid.show('Select a Budget', ToastAndroid.LONG)
        }
        router.push('/create-trip/reviewTrip')

    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 35
            }}>Budget</Text>

            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20
                }}>Choose your spending habit</Text>

                <FlatList
                    data={selectBudgetOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{
                            marginVertical: 10
                        }}
                            onPress={() => setSelectedOption(item)}>
                            <OptionCard
                                option={item} selectTraveller={selectedOption}
                            />
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity //continue button
                    onPress={onClickContinue}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.primary,
                        borderRadius: 15,
                        marginTop: 20

                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.white,
                        fontSize: 20
                    }}>Continue</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default selectB