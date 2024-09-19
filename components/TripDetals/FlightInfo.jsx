import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const FlightInfo = ({ flightData }) => {
    return (

        <View style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors.lightgrey,
            borderRadius: 10,
            padding: 10
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>✈️Flights</Text>

                <TouchableOpacity style={{
                    backgroundColor: Colors.primary,
                    padding: 5,
                    width: 100,
                    borderRadius: 15,
                    marginTop: 7

                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.white,
                        fontWeight: 'bold'
                    }}>Book Here</Text>
                </TouchableOpacity>

            </View>

            <Text style={{
                fontSize: 15,
                marginTop: 7,
                fontWeight: '400'
            }}>Airline: Delta</Text>
            <Text>Price:{flightData?.flightPrice}</Text>

        </View>
    )
}

export default FlightInfo