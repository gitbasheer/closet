import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.iconStyle}/>
            <TextInput style={styles.inputStyle} placeholder="Search" />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#E2E5Ed',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        fontSize: 60,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;