import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
    const [searchText, setSearchText] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const data = [
        'Me',
        'me illum id aliquip',
        'me lorem',
        'Me Gonzalez',
        'Me irure esse',
        'Me Exercitation',
        'Me Sint aliquip duis deseru',
    ];

    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
            const results = data.filter((item) => item.toLowerCase().includes(text.toLowerCase()));
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    const clearSearch = () => {
        setSearchText('');
        setFilteredResults([]);
    };

    const renderItem = ({ item }) => (
        <Pressable style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="What you want to listen to"
                    value={searchText}
                    onChangeText={handleSearch}
                />
                {searchText ? (
                    <Pressable onPress={clearSearch} style={styles.clearButton}>
                        <Ionicons name="close-circle" size={20} color="black" />
                    </Pressable>
                ) : null}
            </View>
            <FlatList
                data={filteredResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#00aced',
        borderRadius: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    clearButton: {
        paddingHorizontal: 10,
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    item: {
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 16,
    },
});
