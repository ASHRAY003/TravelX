import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../configs/firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Colors } from '../../constants/Colors';
import PlaceCard from './PlaceCard';

const PlannedTrip = ({ details }) => {

    const [userTrips, setUserTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = auth.currentUser;

    useEffect(() => {
        user && getMyTrips();
    }, [user]);

    const getMyTrips = async () => {
        setLoading(true);
        setUserTrips([]);
        const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            setUserTrips((prev) => [...prev, doc.data()]);
        });

        setLoading(false);
    };

    if (!details || details.length === 0) {
        return <Text>No trip details available</Text>;
    }

    return (
        <ScrollView>
            <Text style={{
                fontSize: 20,
                fontWeight: '500',
                marginTop: 20,
                marginBottom: 10
            }}>⛺ Plan Details</Text>

            {/* Iterate over the passed daily itinerary (details) */}
            {details.map((dayData, index) => (
                <View key={index} style={{
                    marginBottom: 20,
                    border: 1,
                    borderRadius: 15,
                    borderColor: Colors.lightgrey
                }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>
                        Day {dayData.day}: {dayData.title}
                    </Text>
                    <Text style={{ fontStyle: 'italic', marginBottom: 5 }}>
                        {dayData.description}
                    </Text>

                    {/* Display activities for each day */}
                    {dayData.activities && dayData.activities.map((activity, activityIndex) => (
                        <PlaceCard activity={activity} />
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

export default PlannedTrip;
