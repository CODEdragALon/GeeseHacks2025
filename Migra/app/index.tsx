import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Migra</Text>
            <StatusBar style="auto" />
            <Link href="/1getstarted" style={{ color: 'blue' }}>Get Started</Link>
            <Link href="/3signin" style={{ color: 'blue' }}>Sign Up</Link>
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
});