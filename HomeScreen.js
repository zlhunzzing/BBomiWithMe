import React, { useState } from 'react';
import { View, Image, Button, Text } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [isAction, setIsAction] = useState(false)
  const defaultImg = require('./assets/default.png')
  const actionImg = require('./assets/stroke.gif')

  const onClickStrokeBtn = () => {
    if (isAction) return
    setIsAction(true)
    setTimeout(() => setIsAction(false), 3000)
  }

  return (
    <View flex>
      <View style={style.backgroundImg}>
        <Image source={isAction ? actionImg : defaultImg} />
      </View>
      <View style={style.menu}>
        {!isAction &&
          <Button
            style={style.btn}
            label="쓰다듬기"
            labelStyle={style.label}
            onPress={onClickStrokeBtn}
          />}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  backgroundImg: {
    position: 'absolute',
  },
  menu: {
    flex: 1,
    marginBottom: 100,
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