import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const OptionCard = ({ option, selectTraveller }) => {
    return (
        <View style={[{
            padding: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.lightgrey,
            borderRadius: 20
        }, selectTraveller?.id == option?.id && { borderWidth: 2 }]}>
            <View>
                <Text style={{
                    fontSize: 20
                }}>{option?.title}</Text>
                <Text style={{
                    fontSize: 17,
                    color: Colors.grey
                }}>{option?.desc}</Text>
            </View>
            <Text style={{
                fontSize: 40
            }}>
                {option.icon}
            </Text>
        </View>

    )
}

export default OptionCard