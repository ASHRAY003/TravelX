import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { createTripContext } from '../../context/createTripContext'
import { AI_PROMPT } from '../../constants/options'
import { chatSession } from '../../configs/aiModelConfig'
import { useRouter } from 'expo-router'
import { auth, db } from './../../configs/firebaseconfig'
import { doc, setDoc } from 'firebase/firestore'

const generateTrip = () => {

    const { tripData, setTripData } = useContext(createTripContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const user = auth.currentUser

    useEffect(() => {
        tripData && generateAITrip()
    }, [])


    const generateAITrip = async () => {
        setLoading(true)
        const finalPrompt = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData?.totalnodays)
            .replace('{totalNights}', tripData?.totalnodays - 1)
            .replace('{traveller}', tripData?.traveller?.title)
            .replace('{budget}', tripData?.budget)
            .replace('{totalDays}', tripData?.totalnodays)
            .replace('{totalNights}', tripData?.totalnodays - 1)
        console.log("hello")
        console.log(finalPrompt)

        const result = await chatSession.sendMessage(finalPrompt); //send the ai prompt
        console.log(result.response.text());

        const tripResp = JSON.parse(result.response.text())

        console.log("done")
        setLoading(false)

        //router.push('/(tabs)/myTrip')
        const docId = (Date.now()).toString()
        const result_ = await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user.email,
            tripPlan: tripResp, //AI result
            TripData: JSON.stringify(tripData),  //user selected data
            docId: docId
        })

        router.push('/(tabs)/myTrip')

    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 30,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 45,
                textAlign: 'center'
            }}>Please Wait...</Text>

            <Text style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 40
            }}>Working to generate the trip</Text>

            <Image source={require('./../../assets/images/plane.gif')}
                style={{
                    width: '100%',
                    height: 300,
                    objectFit: 'contain'
                }} />

            <Text style={{
                fontSize: 20,
                color: Colors.grey,
                textAlign: 'center'
            }}>Do Not Go Back</Text>
        </View>
    )
}

export default generateTrip