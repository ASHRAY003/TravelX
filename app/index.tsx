import { View, Text } from 'react-native'
import React from 'react'
import Login from './../components/Login'
import {auth} from './../configs/firebaseconfig'
import { Redirect } from 'expo-router'

const index = () => {
  const user=auth.currentUser;

  return (
    <View>
      
     {user?<Redirect href={'./myTrip'}/>:
      <Login/>}
    </View>
  )
}

export default index