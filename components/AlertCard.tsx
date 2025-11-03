import { Text, View, StyleSheet } from 'react-native';

export default function AlertCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>The button has been pressed</Text>
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
    fontFamily: 'UnifrakturCook_700Bold',
    color: '#1b8732',
  }
});
