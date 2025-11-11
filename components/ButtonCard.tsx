import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlertCard from '../components/AlertCard';

export default function ButtonCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Click the button to see the alert</Text>
      <Pressable
        onPress={() => navigation.navigate(AlertCard)}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
        <Image
          style={styles.logo}
          source={require('../assets/alert_button.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#1b8732',
  },
  logo: {
    height: 100,
    width: 100,
  },
});
