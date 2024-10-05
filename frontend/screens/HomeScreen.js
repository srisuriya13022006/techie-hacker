import React, { useState, useLayoutEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SafeViewAndroid from '../components/SafeViewAndroid';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PhotoScreenModal from './PhotoScreenModal';
import PhotoScreenComponent from './PhotoScreenComponent';
import History from './History';
import Home from './Home';

import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    
    { // set header false
        const navigation = useNavigation();
        useLayoutEffect(()=>{
            navigation.setOptions({
                headerShown : false,
            })
        }, [])
    }
    const [modalVisible, setModalVisible] = useState('');
    const[dishRecommendation, setDishRecommendation] = useState();


    const customTabBarStyle = ({route}) => {
        return {
            tabBarIcon: ({ focused, color, size }) => {

                if (route.name === 'Home') {
                    return <Ionicons name="md-home" size={30} color={color} />
                } else if (route.name === 'History') {
                    return <FontAwesome name="history" size={32} color={color} />
                }

            },
            tabBarActiveTintColor: '#736CD1',
            tabBarInactiveTintColor: '#cfcccd',
            allowFontScaling: true,
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14, fontWeight: 500, fontFamily: 'RobotoMedium' },
            tabBarStyle: { height: 60, borderTopColor: '#736CD1', paddingBottom: 8, paddingTop: 5 },
        }
    }

    const [reload, setReload] = useState();
    const [page, setPage] = useState('');
    
    return (
        <SafeAreaView style={{...SafeViewAndroid.AndroidSafeArea}}>
            <Tab.Navigator initialRouteName={"/"} screenOptions={customTabBarStyle} >
                <Tab.Screen name="Home" children={ ()=><Home reload={reload} page={page} setPage={setPage} setModalVisible={setModalVisible} dishRecommendation={dishRecommendation} />} 
                options={{
                    tabBarLabel: 'Home',
                    }}
                />
                <Tab.Screen name="Photo" component={PhotoScreenComponent} options={{
                    tabBarButton: () => (<PhotoScreenModal setReload={setReload} setPage={setPage} modalVisible={modalVisible} setModalVisible={setModalVisible} setDishRecommendation={setDishRecommendation} />),
                }} />
                <Tab.Screen name="History" children={()=><History reload={reload} />} 
                options={{
                    tabBarLabel: 'History',
                }}/> 
            </Tab.Navigator>
        </SafeAreaView>
    );

}


