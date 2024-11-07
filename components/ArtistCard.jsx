import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ArtistCard = ({ name, imageUri }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        width: 100,
        marginRight: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 5,
        backgroundColor: '#000',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
    },
});

export default ArtistCard;
