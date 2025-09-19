import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import LoginScreen from './screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login';
import MedManage from './screens/med-manage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      return unsubscribe;
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return <LoginScreen onLogin={() => setUser(auth?.currentUser)} />;
  }

  return (

    <View style={styles.container}>
      <Text>Welcome to MedMind!</Text>
      <Text>User: {user.email}</Text>
      <StatusBar style="auto" />
    </View>

    
    <NavigationContainer>
      <Stack.Navigator intialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="med-manage" component={MedManage}/>
      </Stack.Navigator>
      
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e0707ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
