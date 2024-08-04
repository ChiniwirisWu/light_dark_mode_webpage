import React from "react";
import { View, FlatList, StyleSheet, Text, Platform, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeaderItem = ({ title, index, color })=>{
  return (
    <View key={ index } style={ styles.item }>
      <Text style={[ styles.text, { color: color } ]}>{ title }</Text>
    </View>
  )
}

export default function Header({ mode, onPress }){
  const data = ['Home', 'Contact','Products','Wiki']
  return (
    <View style={ [ styles.headerContainer, { backgroundColor: (mode == 'light') ? '#fff' : '#000' } ] }>
      <View style={ styles.container }>
        <FlatList
          horizontal
          contentContainerStyle={ styles.listContainer }
          data={ data }
          renderItem={ ({item, index})=> <HeaderItem title={ item } index={ index } color={ (mode == 'light') ? '#000' : '#fff' } /> }
        />
      </View>
      <TouchableHighlight onPress={ ()=> onPress() } style={ styles.buttonContainer } underlayColor={ (mode == 'light') ? '#000' : '#fff' }>
        <MaterialCommunityIcons
           name='theme-light-dark'
           color={ (mode == 'light') ? '#000' : '#fff' }
           size={ 20 }
        />
      </TouchableHighlight>
    </View>
  ) 
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center' ,
     
  },
  container: {
    flex: 1,
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100px',
  },
  listContainer: {
    ...Platform.select({
      android: {
        height: 100,
        alignItems: 'center',
        gap: 5,
        paddingLeft: 5
      },
      default: {
        height: 40,
        alignItems: 'center',
        gap: 10,
        paddingLeft: 10
      }
    })
  },
  item: {
    cursor: 'pointer'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 20
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
})
