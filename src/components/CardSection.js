import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

export default CardSection

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
})
