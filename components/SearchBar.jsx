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
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
});

export default SearchBar;
