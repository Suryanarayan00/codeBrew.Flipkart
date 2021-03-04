import React, { Component } from "react"
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileBodyCard from "../../../Component/ProfileBodyCard";




export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profileDetail: [
                {
                    title: 'Flipkart Plus',
                    titleCaption: 'Your membership will auto renew on 29th Sep 2021',
                    titleTag: '',
                    footText: 'VIEW YOUR MEMBERSHIP',
                },
                {
                    title: 'My Orders',
                    titleCaption: '',
                    titleTag: '',
                    footText: 'VIEW ALL ORDERS',
                },
                {
                    title: 'Flipkart Pay Later',
                    titleCaption: '',
                    titleTag: '$20/ $2000',
                    footText: 'VIEW DETAILS',
                },
                {
                    title: 'My Cards & Wallet',
                    titleCaption: '',
                    titleTag: '$0',
                    footText: 'VIEW DETAILS',
                },
                {
                    title: 'My Reviews',
                    titleCaption: '',
                    titleTag: '',
                    footText: 'VIEW YOUR Q&A',
                },
                {
                    title: 'My Addresses',
                    titleCaption: 'codeBrew Labs, sector 28, Chandigarh',
                    titleTag: '',
                    footText: 'VIEW 6 MORE',
                },
            ]
        }
    }


    render() {
        let {profileDetail} = this.state
        return (
            <SafeAreaView style={style.container}>
                <ScrollView>
                <Image style={style.profileImage} source={require('../../../../assets/image/profileImage.jpg')}/>
                <View>
                    {profileDetail.map((Value, index)=>{
                        return(<ProfileBodyCard key={index} data={Value} />)
                    })}
                </View>
                <View style={style.foot}>
                    <TouchableOpacity style={style.bottomText}><Ionicons
          name='notifications' size={20}/><Text style={style.bottomBorder}>Language setting</Text></TouchableOpacity>
                    <TouchableOpacity style={style.bottomText}><Ionicons
          name='settings' size={20}/><Text style={style.bottomBorder}>Account Setting</Text></TouchableOpacity>
                    <TouchableOpacity style={style.bottomText}><Ionicons
          name='log-out' size={20}/><Text style={style.bottomBorder}>Logout of this browser</Text></TouchableOpacity>
                    <TouchableOpacity style={style.bottomText}><Ionicons
          name='notifications' size={20}/><Text style={style.bottomBorder}>Logout of all devices</Text></TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const style = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        width: '100%',
    },
    profileImage: {
        height: 300,
        width: '100%',
    },
    foot: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        margin: 4,
        paddingLeft: 20,
        justifyContent: 'center',
        
    },
    bottomText: {
        display: 'flex',
        flexDirection: 'row',
        margin: 8,
        paddingBottom: 10
    },
    bottomBorder: {
        fontSize: 15,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke',
    }
})