import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FilterTags() {
    const tags = ['Playlists', 'New tag', 'Songs', 'Albums', 'Artists'];

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
                {tags.map((tag) => (
                    <View key={tag} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    tag: {
        alignSelf: 'flex-start',
        backgroundColor: '#f3f3f3',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginRight: 10,
    },
    tagText: {
        color: '#333',
    },
});
