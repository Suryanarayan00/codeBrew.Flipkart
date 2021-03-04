import React, { Component } from "react"
import { View, Image, TextInput, TouchableOpacity, Text, SafeAreaView, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import CartCard from "../../../Component/CartCard"
import imagePath from "../../../constants/imagePath"

export default class Cart extends Component {

    state={price:0}

    render() {
        let {price} = this.state
        var cardData=[]
        if (this.props.route.params && this.props.route.params.data){
            cardData = this.props.route.params.data
            for(let i=0; i<cardData.length; i++){
                price = cardData[i].discountPrice +price
            }
        }
        
        return (
            <SafeAreaView style={{ backgroundColor: 'whitesmoke' }}>
                <ScrollView>
                    <View style={style.bodyTop}>
                        <Text style={{ fontWeight: 'bold' }}>Deliver to Chandigarh, Chandigarh</Text>
                        <TouchableOpacity><Text style={style.btn}>Change</Text></TouchableOpacity>
                    </View>
                    {cardData.map((Value, key) => {
                        return (<CartCard key={key} data={Value} />)
                    })}
                <View style={style.cartFoot}>
                    <View>
                        <Text style={style.totalPrice}>$ <Text>{price}</Text></Text>
                        <Text style={style.priceDetail}>View Price Detail</Text>
                    </View>
                    <TouchableOpacity><Text style={style.btn1}>Place Order</Text></TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}




const style = StyleSheet.create({
    header: {
        display: 'flex',
        paddingTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#694fad'
    },
    bodyTop: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    btn: {
        padding: 5,
        color: 'skyblue',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'whitesmoke'
    },
    cartFoot: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent:'space-between',
        backgroundColor: 'white'
    },
    totalPrice: {
        fontWeight:'bold',
        fontSize: 17
    },
    priceDetail: {
        color: 'green',
        fontSize: 12,
        fontWeight: 'bold'
    },
    btn1: {
        padding: 10,
        borderColor: 'crimson',
        borderWidth: 1,
        borderRadius: 5,
        fontWeight:'bold',
        backgroundColor: 'crimson'
    }
})