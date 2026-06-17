
import { Layout } from "../../layouts/Layout";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Octicons";
import { styles } from './style';
import IconLock from "react-native-vector-icons/EvilIcons";

export const LockScreen = () => {

  const navigation = useNavigation()

  return (
    <Layout>
      <TouchableOpacity style={styles.container} activeOpacity={1}
        onPress={() => navigation.navigate('StackHome')}
      >
        <View style={styles.lockScreenWrapper}>
          <View style={styles.infoContainer}>
            <IconLock name='lock' size={38} color='green' />
            <Text style={{fontWeight:"semibold", fontSize: 20}}>Nubank</Text>
            <Text>Desbloqueie seu celular</Text>
          </View>

          <View style={{ gap: 50, marginBottom: 40 }}>
            <View style={styles.dotRow}>
              <Icon name="dot-fill" size={26} color="" />
              <Icon name="dot-fill" size={26} color="" />
              <Icon name="dot-fill" size={26} color="" />
            </View>
            <View style={styles.dotRow}>
              <Icon name="dot-fill" size={26} color="" />
              <Icon name="dot-fill" size={26} color="" />
              <Icon name="dot-fill" size={26} color="" />
            </View>

            <View style={styles.dotRow}>
              <Icon name="dot-fill" size={26} color="" />
              <Icon name="dot-fill" size={26} color="" />
              <Icon name="dot-fill" size={26} color="" />
            </View>

          </View>


        </View>



      </TouchableOpacity>
    </Layout>
  )
}
