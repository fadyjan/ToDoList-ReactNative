    import React, { useState, setState } from 'react';
    import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
    import { render } from 'react-dom';




    export default function Buttons() {
        const [flag,setFlag] =useState(1);

        return (
            <View style={styles.container}>
            <Button
                onPress={() => setFlag(1)}
                title="All"
                color=" rgb(224, 36, 94);"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => setFlag(2)}
                title="Active"
                color=" rgb(224, 36, 94);"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => setFlag(3)}
                title="Done"
                color=" rgb(224, 36, 94);"
                accessibilityLabel="Learn more about this purple button"
            />
            <Flag props={flag}/>
            
            </View>
            


        );


    }

    const styles = StyleSheet.create({
        container: {

            flex: 1,
            flexDirection: 'row',
            width:350,
            flexBasis:70,
            color: 'red',
            // backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-around',
        },

        tex: {
            color: 'red'
        }
    });