import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import * as Linking from 'expo-linking';

export default function ButtonCard() {
  const openWebsite = async () => {
    const url = 'https://github.com/AnnaLangner/mobile_app';

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Can not open the URL: ${url}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Something go wrong.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Click the button to open the website</Text>
      <Pressable
        onPress={openWebsite}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      >
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
