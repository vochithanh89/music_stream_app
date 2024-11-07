import { FlatList } from "react-native-web";
import PostCard from "../../components/PostCard";
import Header from "../../components/Header";

export default function Feed() {

    const data = [
        {
            id: '1',
            user: 'Jessica Gonzalez',
            avatar: 'https://assets.capitalfm.com/2022/43/ed-sheeran--1666953393-editorial-short-form-0.jpg',
            time: '3d',
            trackTitle: 'FLOWER',
            imageUrl: 'https://assets.capitalfm.com/2022/43/ed-sheeran--1666953393-editorial-short-form-0.jpg',
            playCount: 125,
            duration: '05:15',
            likes: 20,
            comments: 3,
            shares: 1,
        },
        {
            id: '2',
            user: 'William King',
            avatar: 'https://assets.capitalfm.com/2022/43/ed-sheeran--1666953393-editorial-short-form-0.jpg',
            time: '5d',
            trackTitle: 'Me',
            imageUrl: 'https://assets.capitalfm.com/2022/43/ed-sheeran--1666953393-editorial-short-form-0.jpg',
            playCount: 245,
            duration: '05:15',
            likes: 45,
            comments: 9,
            shares: 2,
        },
    ];

    return (
        <>
            <Header name="Feed" showGreeting={false} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </>
    )
}