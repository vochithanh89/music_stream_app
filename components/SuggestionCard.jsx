import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SuggestionCard = ({ imageUri, title, artist }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 14,
        color: 'gray',
    },
});

export default SuggestionCard;
