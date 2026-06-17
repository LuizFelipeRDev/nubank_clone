import { SecundaryButton } from "../../components/SecundaryButton";
import { Layout } from "../../layouts/Layout";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather";
import { Image, Text, View } from 'react-native';
import nuLogo from '../../assets/nuLogo.webp';
import { styles } from './style';

export const Login = () => {
    
    const navigation = useNavigation();

    return (
        <Layout>
        <View style={styles.container}>

            {/* Container-Top */}
            <View style={styles.logoContainer}>

                <Image
                    style={styles.logo}
                    source={nuLogo}
                    alt='Logo do nubank'
                    resizeMode='contain'
                />
            </View>

            {/* Container-MAIN */}
            <View style={styles.mainContainer}>
                <Text style={styles.mainText}>Para deixar você ainda mais seguro,
                    precisamos que você insira uma senha
                    para acessar seu aplicativo.</Text>

                <View style={styles.subMainContainer}>
                    <Text style={styles.subMainText}>Saiba mais sobre o porque dessa iniciativa</Text>
                    <Icon name="arrow-up-right" size={24} color="white" />
                </View>

            </View>

            {/* Container-Botton */}
            <View style={styles.bottonContainer}>
                <SecundaryButton
                    text="Usar senha do celular"
                    onPress={() => navigation.navigate('StackLock')}
                />

                <Text style={styles.subTextBotton}>Essa senha é a mesma que voce usa para desbloquear o celular.</Text>

            </View>

        </View>
        </Layout>
    )
}
