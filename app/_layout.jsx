import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { createTripContext } from '../context/createTripContext'

const _layout = () => {
  const [tripData, setTripData] = useState([])

  return (
    <createTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{
        headerShown: false
      }}  >
        <Stack.Screen name="index" options={{
          headerShown: false
        }} />
        <Stack.Screen name='(tabs)'
          options={{
            headerShown: false
          }} />
      </Stack>
    </createTripContext.Provider>
  )
}

export default _layout