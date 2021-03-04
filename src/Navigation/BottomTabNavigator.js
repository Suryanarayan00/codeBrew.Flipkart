import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Cart, Home, LatestDeals, Profile } from '../Screen';



const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            activeColor="#1493ff"
            inactiveColor='#484848'
            fontWeight='bold'
            barStyle={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'lightgrey'}}
        >
            <Tab.Screen name="home" component={Home}
                options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='home' color={color} size={26} />) }}
            />

            <Tab.Screen name="deals" component={LatestDeals}
                options={{
                    tabBarLabel: 'Deals',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} style={{fontWeight: 'bold'}} />
                    ),
                }} />

            <Tab.Screen name="cart" component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    ),
                }} />

            <Tab.Screen name="profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
}