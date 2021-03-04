import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'


export default function CartCard(props) {
    let {data} = props
    const { id,
        image1,
        name,
        type,
        discountPrice,
        originalPrice,
        offPrice, num } = data;
    return (
        <SafeAreaView style={style.card}>
            <View style={style.cardHead}>
                <View>
                    <Text style={style.headTitle}>{name}</Text>
                    <Text style={style.headCaption}>{type}</Text>
                    {/* <Text style={style.rating}>{rating}</Text> */}
                </View>
                <Image source={image1} style={{width:150, height: 100, resizeMode: 'contain'}}/>
            </View>
            <View style={style.cardBody}>
                <View>
                    <View style={style.price}>
                        <View><Text style={style.discountPrice}>{discountPrice}</Text></View>
                        <View><Text style={style.actulaPrice}>{originalPrice}</Text></View>
                        <View><Text style={style.discount}>{offPrice}</Text></View>
                    </View>
                    <Text style={style.offer}>3 offer Available</Text>
                    <Text style={style.deliveryTime}>deliver by tuesDay</Text>
                </View>
                <TouchableOpacity style={style.btn}><Text>Qty: <Text>{num}</Text></Text></TouchableOpacity>
            </View>
            <View style={style.cardFoot}>
                <TouchableOpacity><Text style={[style.button, {borderRightWidth: 1,paddingLeft: 50, paddingRight: 80 , borderRightColor: 'lightgrey', }]}> Save for Later</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[style.button, {borderLeftWidth: 1,paddingRight: 50, paddingLeft: 81, borderLeftColor: 'lightgrey',}]}>Remove</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    card: {
        marginVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center'
    },
    cardHead: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
    headTitle: {
        // margin: 2,
        fontSize: 20,
        color: 'black'
    },
    headCaption: {
        color: 'grey',
        fontSize: 12,
        // fontWeight: 'bold',
        margin: 2,
        marginVertical: 6,
    },
    rating: {
        backgroundColor:'green',
        padding: 4,
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
        width: 70
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        // margin: 4,
        alignItems: 'center'
    },
    discountPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginRight: 5,
    },
    actulaPrice: {
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold',
        margin: 2,
    },
    discount: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 2
    },
    offer: {
        color: 'green',
        fontSize: 12,
        // fontWeight: 'bold'
        marginVertical: 2
    },
    deliveryTime: {
        fontWeight: 'bold',
        fontSize: 12,
        margin: 3,
        color: 'black'
    },
    btn: {
        borderRadius: 4,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'grey',
        height: 45,
        padding: 10
    },
    cardFoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'lightgrey',
        borderWidth: 1,
        padding: 5
    },
    button: {
        borderRadius: 4,
        padding: 5,
        fontWeight: 'bold',

    }

})