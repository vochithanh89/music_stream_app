import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SuggestionCard from '../../components/SuggestionCard';
import CategoryTitle from '../../components/CategoryTitle';
import ChartCard from '../../components/ChartCard';
import TrendingAlbumCard from '../../components/TrendingAlbumCard';
import ArtistCard from '../../components/ArtistCard';

export default Home = () => {

    const imageTest = 'https://www.billboard.com/wp-content/uploads/2022/09/Christina-Aguilera-2022-cr-Bethany-Vargas-billboard-1548.jpg?w=942&h=623&crop=1';

    return (
        <ScrollView style={styles.container}>
            <Header name="Ashley Scott" />
            <SearchBar />

            <CategoryTitle title="Suggestions for you" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <SuggestionCard imageUri={imageTest} title="Reflection" artist="Christina Aguilera" />
                <SuggestionCard imageUri={imageTest} title="In The Stars" artist="Benson Boone" />
            </ScrollView>

            <CategoryTitle title="Charts" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <ChartCard imageUri={imageTest} title="Top 50 Canada" description="Daily chart-toppers update" />
                <ChartCard imageUri={imageTest} title="Top 50 Global" description="Daily chart-toppers update" />
            </ScrollView>

            <CategoryTitle title="Trending albums" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <TrendingAlbumCard imageUri={imageTest} title="ME" artist="Jessica Gonzalez" />
                <TrendingAlbumCard imageUri={imageTest} title="Magna nost" artist="Brian Thomas" />
            </ScrollView>

            <CategoryTitle title="Popular artists" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <ArtistCard imageUri={imageTest} name="Jennifer Wilson" />
                <ArtistCard imageUri={imageTest} name="Elizabeth Hall" />
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    horizontalScroll: {
        paddingLeft: 20,
    },
});