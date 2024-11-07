import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import FilterTags from '../../components/FilterTags';
import TrackCard from '../../components/TrackCard';

const trackData = [
    { id: '1', image: 'https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', liked: true },
    { id: '2', image: 'https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '3:35', liked: true },
    { id: '3', image: 'https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=', title: 'Blinding Lights', artist: 'Ashley Scott', songCount: '4 songs', isPlaylist: true },
    { id: '4', image: 'https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=', title: 'Levitating', artist: 'Anthony Taylor', plays: '9M', duration: '7:48', liked: true },
    { id: '5', image: 'https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=', title: 'Astronaut in the Ocean', artist: 'Pedro Moreno', plays: '23M', duration: '3:36', liked: true },
    { id: '6', image: 'https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=', title: 'Dynamite', artist: 'Elena Jimenez', plays: '10M', duration: '6:22', liked: true },
];

export default function Library() {
    return (
        <View style={styles.container}>
            <Header name="Library" showGreeting={false} />
            <FilterTags />
            <FlatList
                data={trackData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TrackCard track={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});
