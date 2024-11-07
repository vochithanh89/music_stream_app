import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChartCard = ({ title, description, imageUri }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 120,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 80,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    description: {
        fontSize: 12,
        color: 'gray',
    },
});

export default ChartCard;
