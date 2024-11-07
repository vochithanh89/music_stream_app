import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TrendingAlbumCard = ({ title, artist, imageUri }) => {
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
        width: 120,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    artist: {
        fontSize: 14,
        color: 'gray',
    },
});

export default TrendingAlbumCard;
