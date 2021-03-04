import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity, View, TextInput, Image, ImageBackground } from 'react-native';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    nameText = (text) => { this.setState({ name: text }) }
    passwordText = (text) => { this.setState({ password: text }) }

    // validatae the value
    validateAndToHome = () => {
        let { name, password } = this.state
        if (name.length && password.length) {
            this.props.navigation.navigate('main')
        }
        else alert('please fill all the detail..')
    }
    render() {
        return (
            <View>
                <ImageBackground source={require('../../../assets/image/shopping.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={style.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Image source={require('../../../assets/image/flipkart.jpg.png')} style={{ width: '100%', height: 80 }} />
                            <View style={style.header}><Text style={style.headerText}>Login</Text></View>
                            <View>
                                <Text>Name</Text>
                                <TextInput onChangeText={(text) => this.nameText(text)} placeholder="Enter your name" style={style.input}></TextInput>
                                <Text>Password</Text>
                                <TextInput onChangeText={(text) => this.passwordText(text)} placeholder="Enter your password" style={style.input}></TextInput>
                                <TouchableOpacity onPress={this.validateAndToHome} style={[style.btn, {marginLeft: 100}]}><Text>Submit</Text></TouchableOpacity>
                                <View style={style.sign}>
                                    <Text>Don't have an Account?</Text>
                                    <TouchableOpacity style={style.btn} onPress={() => this.props.navigation.navigate('signup')}><Text>Signup</Text></TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        marginHorizontal: 40,
        marginVertical: 170,
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
    input: {
        marginBottom: 10,
        paddingLeft: 12,
        width: 300,
        borderRadius: 4,
        borderColor: 'crimson',
        height: 50,
        backgroundColor: 'white'
    },
    sign: {
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',

    },
    btn: {
        width: 100,
        margin: 4,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderColor: 'crimson',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 7,
        // marginBottom: 40
    }
})