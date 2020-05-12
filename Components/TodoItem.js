import React, { useState, setState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';




export default function TodoItem({ item , toggleState }) {

    return (
        <View>
            <TouchableOpacity onPress={toggleState}>
                <Text style={{textDecorationLine: item.state === true ? 'line-through': 'none' ,textDecorationColor: 'red',     color: 'white',
        width: 250,
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        backgroundColor: 'rgb(32, 35, 39)',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize:25,}} >{item.text} </Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    item: {
        
        color: 'white',
        width: 250,
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        backgroundColor: 'rgb(32, 35, 39)',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})