import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { GOOGLE_MAPS_API_KEY } from '../../constants';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetals/FlightInfo';
import { auth, db } from '../../configs/firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import HotelList from '../../components/TripDetals/HotelList';
import PlannedTrip from '../../components/TripDetals/PlannedTrip';

const TripDetails = () => {

    ///////////////////////////////////
    const [userTrips, setuserTrips] = useState('')
    const user = auth.currentUser
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        user && getMyTrips()
    }, [user])

    const getMyTrips = async () => {
        setLoading(true)
        setuserTrips([])
        const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data())
            setuserTrips(prev => [...prev, doc.data()]) //now usertrip is not 0
        })

        setLoading(false)
    }

    //////////////////////////////////

    const navigation = useNavigation();
    const { trip } = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState({});
    const [parsedTripData, setParsedTripData] = useState(null); // To hold the parsed TripData
    //const latestTrip = JSON.parse(userTrips[0].TripData)
    const formatData = (data) => {  //fn to convert data to json format
        return JSON.parse(data)
    }
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });

        try {
            // Parse the main trip object
            const parsedTrip = typeof trip === 'string' ? JSON.parse(trip) : trip;
            setTripDetails(parsedTrip);

            // Parse the nested TripData string
            const parsedTripData = JSON.parse(parsedTrip[0].TripData); // Notice parsedTrip[0] to access the first object in the array
            setParsedTripData(parsedTripData);
        } catch (error) {
            console.error('Error parsing trip data:', error);
        }
    }, []);

    useEffect(() => {
        // Log the parsed trip details and TripData for debugging
        console.log('tripDetails:', tripDetails);
        console.log('parsedTripData:', parsedTripData);
    }, [tripDetails, parsedTripData]);

    return (
        <ScrollView>
            {parsedTripData?.locationInfo?.photoref ? (
                <Image
                    source={{
                        uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                            parsedTripData.locationInfo.photoref +
                            '&key=' + GOOGLE_MAPS_API_KEY,
                    }}
                    style={{
                        height: 330,
                        width: '100%',
                        borderRadius: 10,
                    }}
                />


            ) : (
                <Text >No image available</Text>
            )}

            <View style={{
                padding: 15,
                backgroundColor: Colors.white,
                height: '100%',
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30

            }}>

                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>{userTrips[0]?.tripPlan?.tripDetails?.location}</Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 5,
                    marginTop: 5
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: Colors.grey
                    }}>{moment(parsedTripData?.startDate).format('DD MMM YYYY') || "no date"}</Text>

                    <Text style={{
                        fontSize: 15,
                        color: Colors.grey
                    }}>- {moment(parsedTripData?.endDate).format('DD MMM YYYY') || "no date"}</Text>

                </View>
                <Text style={{
                    fontSize: 15,
                    color: Colors.grey
                }}>🚌 {parsedTripData?.traveller.title}</Text>

                {/* flightInfo */}
                <FlightInfo flightData={userTrips[0]?.tripPlan?.tripDetails?.flightDetails} />

                {/* HotelList */}
                <HotelList hotelList={userTrips[0]?.tripPlan?.hotelOptions} />

                {/* TripPlan */}
                <PlannedTrip details={userTrips[0]?.tripPlan?.dailyItinerary} />



            </View>





        </ScrollView>
    );
};

export default TripDetails;
