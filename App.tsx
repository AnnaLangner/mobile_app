import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, UnifrakturCook_700Bold } from '@expo-google-fonts/unifrakturcook';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import StudentCard from './components/StudentCard';
import ButtonCard from './components/ButtonCard';
import AlertCard from './components/AlertCard';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    UnifrakturCook_700Bold,
  });
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1b8732" />
        <Text style={styles.paragraph}>Ładowanie czcionki...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#1b8732',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: 'UnifrakturCook_700Bold',
            color: '#1b8732',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ButtonCard" component={ButtonCard} />
        <Stack.Screen name="AlertCard" component={AlertCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Zadanie 1 - Przygotowanie środowiska i pierwsza aplikacja w Expo
      </Text>
      <Card>
        <StudentCard />
        <ButtonCard />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'UnifrakturCook_700Bold',
    color: '#1b8732',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
