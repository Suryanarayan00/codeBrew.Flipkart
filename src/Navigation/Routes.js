import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationString from '../constants/navigationString';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {AuthStack()}
                {MainStack()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}



// function LogoTitle() {
//     return (
//         <View style={style.header}>
//             <Image style={{width:160, height:'100%'}} source={require('../../assets/image/flipkartNav.jpg')}/>
//             <TouchableOpacity><Image style={{width:35, height:'100%'}} source={require('../../assets/image/cart.jpg')}/></TouchableOpacity>
//         </View>
//     );
// }