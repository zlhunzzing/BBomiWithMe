import React from 'react';
import { View, Button } from 'react-native-ui-lib';
import { StyleSheet, ImageBackground } from 'react-native';

const defaultImg = require('./assets/icon.png')

export default function HomeScreen() {
  return (
    <View flex>
      <ImageBackground source={defaultImg} style={style.backgroundImg}>
        <View style={style.menu}>
          <Button style={style.btn} label="쓰다듬기" labelStyle={style.label} />
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center'
  },
  menu: {
    marginBottom: 100,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    opacity: 0.6,
  },
  btn: {
    backgroundColor: 'pink',
    width: '70%'
  },
  label: {
    color: 'black',
    fontSize: 18
  }
});