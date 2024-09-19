import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="myTrip" options={{
                tabBarIcon: ({ color }) => <Entypo name="location" size={24} color="black" />,
                tabBarLabel: 'MyTrip'
            }} />
            {/* <Tabs.Screen name='discover' options={{
            tabBarLabel:'Discover',
            tabBarIcon:({color})=><Entypo name="globe" size={24} color="black" />
        }}/> */}
            <Tabs.Screen name='profile' options={{
                tabBarIcon: ({ color }) => <FontAwesome5 name="head-side-virus" size={24} color="black" />
            }} />
        </Tabs>
    )
}

export default _layout