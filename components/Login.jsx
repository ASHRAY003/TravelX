import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Login = () => {
    const router=useRouter()
  return (
    <View>
      <Image source={require('./../assets/images/travelfp.jpg')}
            style={{width:'100%',height:450
            }}
        />
        <View style={stylesheet.container}>
            <Text style={{fontSize:28, fontFamily:'outfit-bold', textAlign:'center',
                marginTop:30
            }}>Your Own Travel Planner</Text>

            <Text style={{
                textAlign:'center',fontSize:17,color:'#7d7d7d'
            }}>Discover your next adventures effortlessly!</Text>

            <TouchableOpacity style={stylesheet.button}
                onPress={()=>router.push('./auth/signIn')}
            > 

                <Text style={{color:Colors.white, textAlign:'center', fontSize:17}}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const stylesheet=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        marginTop:-20,
        height:'100%',
        borderRadius:10,
        padding:25
    },
    button:{
        padding:15,
        margin:15,
        backgroundColor:Colors.primary,
        borderRadius:99

    }
})

export default Login