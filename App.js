import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import  Header  from './components/header';
import React, { useState } from 'react';

export default function App() {
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

  return (
    <ImageBackground source={ background } style={{ width: '100%', height: '100%' }}>
      <Header mode={ mode } onPress={ onModeChange } />
    </ImageBackground>
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
