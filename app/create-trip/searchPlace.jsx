import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '../../constants';
import { createTripContext } from '../../context/createTripContext'



const searchPlace = () => {
    const navigation = useNavigation();
    const router = useRouter();

    const { tripData, setTripData } = useContext(createTripContext)
    useEffect(() => {
        navigation.setOptions = ({
            headerShown: false,
            headerTransparent: true,
            headerTitle: 'search'
        })
    }, [])

    useEffect(() => {
        console.log(tripData)
    }, [tripData])

    return (
        <View style={{
            padding: 25, backgroundColor: Colors.white,
            height: '100%'
        }}>

            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    setTripData({
                        locationInfo: {
                            name: data.description,
                            coordinates: details?.geometry.location,
                            photoref: details?.photos[0]?.photo_reference,
                            url: details?.url
                        }
                    })
                    router.push('/create-trip/selectTraveller')
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'en',
                }}

                styles={{
                    textInputContainer: {
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 25

                    }
                }}
            />
        </View>
    )
}

export default searchPlace