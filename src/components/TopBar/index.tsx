import { Text, View } from "react-native";
import IconA from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from './style';
export const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>9:22</Text>
      <View style={styles.iconsWrapper}>
        <Icon name="signal-cellular-alt" size={24} color="white" />


        <IconA name="battery-2" size={24} color="white" />

      </View>
    </View>
  )
}
