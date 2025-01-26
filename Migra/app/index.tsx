import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Link href="/1aslides" style={{ color: 'blue' }}>Get Started</Link>
            <Link href="/2signin" style={{ color: 'blue' }}>Sign In</Link>
            <Link href="/3languages" style={{ color: 'blue' }}>Languages</Link>
            <Link href="/4help" style={{ color: 'blue' }}>Help</Link>
            <Image source={require('../assets/images/1.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});