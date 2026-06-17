import React from 'react'
import { View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { styles } from './style';

type Props = {
    size: number,
    color?:string;
}

export const FourDots = ({ size, color = "black" }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Icon
          key={index}
          name="dot-fill"
          size={size}
          color={color}
        />
      ))}
    </View>
  );
};
