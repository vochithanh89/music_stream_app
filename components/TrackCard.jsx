import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrackCard({ track }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.trackImage}
                source={{ uri: track.image }}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{track.title}</Text>
                <Text style={styles.subtitle}>
                    {track.artist} {track.plays ? ` • ${track.plays}` : ''} {track.duration ? ` • ${track.duration}` : ''} {track.songCount ? ` • ${track.songCount}` : ''}
                </Text>
            </View>
            {track.liked && <Ionicons name="heart" size={20} color="deepskyblue" />}
            {track.isPlaylist && <Ionicons name="chevron-forward" size={20} color="gray" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    trackImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#888',
    },
});
