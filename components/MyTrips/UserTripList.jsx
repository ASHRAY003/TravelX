import { View, Text, Image } from 'react-native'
import React from 'react'

const UserTripList = ({ userTrips }) => {
    return (
        <View>
            <View style={{
                marginTop: 20
            }}>
                <Image source={require('./../../assets/images/plane.gif')}
                    style={{
                        width: '100%',
                        height: 240,
                        objectFit: 'cover',
                        borderRadius: 15
                    }} />
            </View>
        </View>
    )
}

export default UserTripList