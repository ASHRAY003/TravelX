import { View, Text, Modal, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment'
import { createTripContext } from '../../context/createTripContext';
//import DatePicker from 'react-native-modern-datepicker'


const selectDate = () => {
    const router = useRouter()
    const navigation = useNavigation()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const { tripData, setTripData } = useContext(createTripContext)

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
            headerTransparent: true

        })
    }, [])
    // function handleChange(propDate) {
    //     setdate(propDate)
    //     console.log(date);
    // }  //modern date picker

    const onDateSelection = () => {  //continue button functionaluty
        if (!startDate && !endDate) {
            ToastAndroid.show('Select Date', ToastAndroid.LONG)
            return;
        }
        const totalnodays = endDate.diff(startDate, 'days')
        console.log(totalnodays + 1)
        setTripData({
            ...tripData, startDate: startDate,
            endDate: endDate,
            totalnodays: totalnodays + 1
        })
        router.push('/create-trip/selectB')

    }
    const onDateChange = (date, type) => {
        console.log(date, type)
        if (type == 'START_DATE') {
            setStartDate(moment(date))
        }
        else {
            setEndDate(moment(date))
        }

    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 35,
                marginTop: 20
            }}>TravelDates</Text>

            {/* <Modal
                animationType='slide'
            >
                <DatePicker
                    mode='calendar'
                    selected={date}
                    onDateChange={handleChange}
                />
            </Modal>  // this is for modern date picker*/}
            <View style={{
                marginTop: 30
            }}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection={true}
                    minDate={new Date()} //past dates disable 
                    maxRangeDuration={5}

                />
            </View>
            <TouchableOpacity //continue button
                onPress={onDateSelection}
                style={{
                    padding: 15,
                    backgroundColor: Colors.primary,
                    borderRadius: 15,
                    marginTop: 20

                }}
            //onPress={(value) => { router.push('') }}
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

export default selectDate