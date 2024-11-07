import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';

export default Index = () => {
    return (
        <ImageBackground
            source={require('../assets/images/launch_screen/background.png')}
            style={styles.background}
        >
            <View style={styles.overlay}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/launch_screen/sound_wave.png')} style={styles.logo} />
                </View>

                {/* Title */}
                <Text style={styles.title}>Welcome to Music App</Text>
                <Text style={styles.dots}>...</Text>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Start listening</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        fontSize: 40,
        color: 'white',
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dots: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
