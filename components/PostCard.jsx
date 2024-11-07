import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PostCard({ post }) {

    return (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: post.avatar }} />
                <View>
                    <Text style={styles.userName}>{post.user}</Text>
                    <Text style={styles.time}>{`Posted a track • ${post.time}`}</Text>
                </View>
            </View>

            <Image style={styles.trackImage} source={{ uri: post.imageUrl }} />

            <View style={styles.trackInfo}>
                <Text style={styles.trackTitle}>{post.trackTitle}</Text>
                <Text style={styles.trackDetails}>{`${post.user} • ${post.playCount} plays • ${post.duration}`}</Text>
            </View>

            <View style={styles.actions}>
                <View style={styles.actionItem}>
                    <Ionicons name="heart-outline" size={20} color="gray" />
                    <Text style={styles.actionText}>{post.likes}</Text>
                </View>
                <View style={styles.actionItem}>
                    <Ionicons name="chatbubble-outline" size={20} color="gray" />
                    <Text style={styles.actionText}>{post.comments}</Text>
                </View>
                <View style={styles.actionItem}>
                    <Ionicons name="share-outline" size={20} color="gray" />
                    <Text style={styles.actionText}>{post.shares}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontWeight: 'bold',
    },
    time: {
        color: '#888',
    },
    trackImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    trackInfo: {
        marginVertical: 10,
    },
    trackTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    trackDetails: {
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        marginLeft: 4,
        color: 'gray',
    },
});
