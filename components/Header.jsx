import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    greeting: {
        fontSize: 16,
        color: 'gray',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
