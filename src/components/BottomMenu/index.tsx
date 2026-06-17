import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './style'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

export const BottomMenu = () => {
  return (
    <View style={styles.container}>
      <View  style={styles.innerContainer}>
        <Pressable style={({ pressed }) => [styles.containerIcon, pressed && styles.buttonPressed]}>
          <Icon1 size={30} name="swap-horizontal" style={styles.rotateIcon} />
        </Pressable>
        <Pressable style={({ pressed }) => [styles.containerIcon, pressed && styles.buttonPressed]}>
          <Icon1 size={30} name="currency-usd" />
        </Pressable>
        <Pressable style={({ pressed }) => [styles.containerIcon, pressed && styles.buttonPressed]}>
          <Icon1 size={30} name="shopping-outline" />
        </Pressable>
      </View>
    </View>
  )
}
