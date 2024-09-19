import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/firebaseconfig'


const signUp = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const router = useRouter()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fname, setfname] = useState()



    const onCreateAccount = () => {
        // const auth = getAuth();

        if (!email && !password && !fname) {
            ToastAndroid.show("enter all details", ToastAndroid.BOTTOM)
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                router.replace('/myTrip')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
                // ..
            });
    }

    return (
        <View style={{
            marginTop: 25, padding: 25, backgroundColor: Colors.white,
            height: '100%', padding: 25
        }}>
            <Text style={{ fontSize: 30, textAlign: 'left' }}>Let's Sign You Up</Text>


            <View style={{ marginTop: 50 }}>
                <Text>Enter Name</Text>
                <TextInput placeholder='Name' style={stylesheet.input} onChangeText={(value) => setfname(value)} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text>Enter Email</Text>
                <TextInput placeholder='email' style={stylesheet.input} onChangeText={(value) => setEmail(value)} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} placeholder='Enter Password' onChangeText={(value) => setPassword(value)} style={stylesheet.input} />
            </View>

            <TouchableOpacity style={stylesheet.signIn} onPress={onCreateAccount}>
                <Text style={{ color: Colors.white, textAlign: 'center' }}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                padding: 25, backgroundColor: Colors.white, borderRadius: 15,
                marginTop: 15
            }} onPress={() => router.replace('auth/signIn')}>
                <Text style={{ color: Colors.primary, textAlign: 'center' }}>SignIn</Text>
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

export default signUp