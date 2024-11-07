import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search-outline" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="feed"
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-outline" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="library-outline" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
