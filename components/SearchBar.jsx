import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="What you want to listen to" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 20,
    },
});

export default SearchBar;
