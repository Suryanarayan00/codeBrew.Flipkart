import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationString from '../constants/navigationString';
import { Login, Signup } from '../Screen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function () {
    return (
        <Fragment>
            <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
        </Fragment>
    )
}