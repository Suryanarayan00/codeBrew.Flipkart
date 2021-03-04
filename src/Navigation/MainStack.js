import React, {Fragment} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationString from '../constants/navigationString';
import {Login, OrderDetail, Signup } from '../Screen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function() {
    return (
            <Fragment>
                <Stack.Screen name='main' component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name= 'orderDetail' component={OrderDetail}/>
            </Fragment>
    )
}