import React, { useState } from 'react';
import { View, Button } from 'react-native-ui-lib';
import { StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  const [isAction, setIsAction] = useState(false)
  const defaultImg = require('./assets/icon.png')
  const actionImg = require('./assets/favicon.png')

  const onClickStrokeBtn = () => {
    if (isAction) return
    setIsAction(true)
    setTimeout(() => setIsAction(false), 3000)
  }

  return (
    <View flex>
      <ImageBackground source={isAction ? actionImg : defaultImg} style={style.backgroundImg}>
        <View style={style.menu}>
          <Button
            style={style.btn}
            label="쓰다듬기"
            labelStyle={style.label}
            onPress={onClickStrokeBtn}
          />
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