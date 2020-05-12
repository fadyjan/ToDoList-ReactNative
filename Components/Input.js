import React, { useState, setState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput ,Button} from 'react-native';
import { render } from 'react-dom';

export default function Input({submitHandler} ) {
    const [text,setText] = React.useState('');
    return (
        <View style={styles.container}>
             <TextInput
                style={{ height: 40, width: 200, borderColor: 'rgb(224, 36, 94)',borderBottomWidth:1 , color:'white' ,}}
                placeholder='New Todo ....'
                 onChangeText={setText}
                 value={text}

            /> 

            <Button
                onPress={()=>submitHandler(text)}
                title="Add"
                color=" rgb(224, 36, 94);"
                accessibilityLabel="Learn more about this purple button"
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        width:250,
        flexBasis:70,
        flexDirection: 'row',
        color: 'red',
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    tex: {
        color: 'red'
    }
});