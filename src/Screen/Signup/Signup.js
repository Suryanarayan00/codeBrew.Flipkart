import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, StyleSheet, TextInput, ImageBackground, ScrollView } from 'react-native';


export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
        }
    }


    nameText = (text) => { this.setState({ name: text }) }
    emailText = (text) => { this.setState({ email: text }) }
    passwordText = (text) => { this.setState({ password: text }) }
    phoneNumberText = (text) => { this.setState({ phoneNumber: text }) }

    validateAndToHome = () => {
        let { name, password, email, phoneNumber } = this.state
        if (name.length && password.length && email.length && phoneNumber.length) {
            this.props.navigation.navigate('main')
        }
        else alert('please fill all the detail..')
    }
    render() {
        return (
            <ImageBackground source={require('../../../assets/image/shopping.jpg')} style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <SafeAreaView style={style.container}>
                    <Image source={require('../../../assets/image/flipkart.jpg.png')} style={{marginTop: 10, width: '100%', height: 80 }} />
                        <View style={style.header}><Text style={style.headerText}>Signup</Text></View>
                        <View>
                            <Text style={style.txt}>Name</Text>
                            <TextInput onChangeText={(text) => this.nameText(text)} placeholder="Enter your name" style={style.input}></TextInput>
                            <Text style={style.txt}>Email</Text>
                            <TextInput onChangeText={(text) => this.emailText(text)} placeholder="Enter your email" style={style.input}></TextInput>
                            <Text style={style.txt}>Phone Number</Text>
                            <TextInput onChangeText={(text) => this.phoneNumberText(text)} placeholder="Enter your password" style={style.input}></TextInput>
                            <Text style={style.txt}>Password</Text>
                            <TextInput onChangeText={(text) => this.passwordText(text)} placeholder="Enter your password" style={style.input}></TextInput>
                            <TouchableOpacity onPress={this.validateAndToHome} style={[style.btn, {marginLeft: 100}]}><Text>Submit</Text></TouchableOpacity>
                        </View>
                        <View style={style.login}>
                            <Text>Already have an Account?</Text>
                            <TouchableOpacity style={style.btn} onPress={() => this.props.navigation.navigate('login')}><Text>Login</Text></TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </ImageBackground>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40,
        marginVertical: 120,
        backgroundColor: '#1493ff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    header: {
        paddingTop: 70,
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'sans-serif',
        color: 'crimson',
    },
    txt: {
        paddingVertical: 5
    },
    input: {
        marginBottom: 10,
        paddingLeft: 2,
        width: 300,
        borderRadius: 4,
        paddingLeft: 12,
        height: 40,
        backgroundColor: 'white'
    },
    login: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        paddingTop: 100,
        paddingBottom: 20

    },
    btn: {
        margin: 4,
        width: 100,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderColor: 'crimson',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 8, 
    }
})