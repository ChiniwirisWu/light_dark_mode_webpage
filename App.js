import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import  Header  from './components/header';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Screen = ({ navigation }) =>{
    const [background, setBackground] = Platform == 'android' ? 
      useState(require('./assets/blue_sky_phone.jpg'))
      : useState(require('./assets/blue_sky.jpg')) 
    const [mode, setMode] = useState('light')

    const onModeChange = ()=>{
      setMode((mode == 'light') ? 'dark' : 'light')
      setBackground(
        (Platform == 'android') ? (
          (mode == 'light') ? require('./assets/knight_phone.jpg') : require('./assets/blue_sky_phone.jpg')
        ) : (
          (mode == 'light') ? require('./assets/knight.jpg') : require('./assets/blue_sky.jpg') 
        )
      )
    }


  const onNavigate = (title)=>{
    navigation.navigate(title.toLowerCase())
  }

  return (
    <ImageBackground source={ background } style={{ width: '100%', height: '100%' }}>
      <Header mode={ mode } onPress={ onModeChange } onNavigate={ onNavigate } />
    </ImageBackground>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Screen}
          options={{title: 'home'}}
        />
      <Stack.Screen
        name="contact"
        component={Screen}
        options={{title:'contact'}}
      />
      <Stack.Screen
        name="products"
        component={Screen}
        options={{title:'products'}}
      />
      <Stack.Screen
        name="wiki"
        component={Screen}
        options={{title:'wiki'}}
      />
      </Stack.Navigator>
    </NavigationContainer>
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
