import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/firebaseconfig'

const signIn = () => {
    const navigation = useNavigation()
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onSignIn = () => {
        if (!email && !password) {
            ToastAndroid.show("Enter All fields", ToastAndroid.BOTTOM)
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                router.replace('/(tabs)/myTrip')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                if (errorCode == 'auth/invalid-credential') {
                    ToastAndroid.show("Invalid Credential", ToastAndroid.BOTTOM)
                }
            });



    }

    return (
        <View style={{
            marginTop: 25, padding: 25, backgroundColor: Colors.white,
            height: '100%', padding: 25
        }}>
            <Text style={{ fontSize: 30, textAlign: 'left' }}>Let's Sign You IN</Text>

            <Text style={{ fontSize: 30, textAlign: 'left', color: Colors.grey, marginTop: 20 }}>Welcome Back</Text>


            <Text style={{ fontSize: 20, textAlign: 'left', color: Colors.grey, marginTop: 10 }}>Where have you been?</Text>

            <View style={{ marginTop: 50 }}>
                <Text>Enter Email</Text>
                <TextInput placeholder='email' style={stylesheet.input} onChangeText={(value) => setEmail(value)} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} placeholder='Enter Password' style={stylesheet.input} onChangeText={(value) => setPassword(value)} />
            </View>

            <TouchableOpacity style={stylesheet.signIn} onPress={onSignIn}>
                <Text style={{ color: Colors.white, textAlign: 'center' }}>SignIn</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                padding: 25, backgroundColor: Colors.white, borderRadius: 15,
                marginTop: 15
            }} onPress={() => router.replace('auth/signUp')}>
                <Text style={{ color: Colors.primary, textAlign: 'center' }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}
const stylesheet = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.grey

    },
    signIn: {
        padding: 25, backgroundColor: Colors.primary, borderRadius: 15,
        marginTop: 15
    }
})

export default signIn