import { Layout } from "../../layouts/Layout";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import perfil from '../../assets/perfil.webp'
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';

import { actions, discoveryItems, services } from "./helper";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useState } from "react";
import { FourDots } from "../../components/FourDots";
import { COLORS } from "../../styles/theme";
import { BottomMenu } from "../../components/BottomMenu";
export const Home = () => {

    const [closeEye, setCloseEye] = useState(true)
    const [favorite, setFavorite] = useState(false)

    const handleInfo = () => {
        setCloseEye(prev => !prev);
    };

    const handleFavorite = () => {
        setFavorite(prev => !prev)

    }
    return (
        <Layout>
            {/* topContainer */}
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.blankSpace} />
                <View style={styles.topContainer}>
                    <View style={styles.topRowPrimary}>
                        <Image
                            style={styles.perfilImg}
                            source={perfil}
                            alt='foto de perfil do usuario' />


                        <View style={styles.topIconsContainer}>
                            <Pressable onPress={handleInfo}>
                                {closeEye ?
                                    <Icon name="eye-off" size={20} color='white' />
                                    :
                                    <Icon name="eye" size={20} color='white' />}
                            </Pressable>

                            <Icon name="help-circle" size={20} color='white' />
                            <Icon name="mail" size={20} color='white' />
                        </View>
                        <View style={styles.dotPerfil} />
                    </View>

                    <Text style={styles.textTop}>
                        Olá, Elon Musk
                    </Text>
                </View>
                {/* ==========MAIN CONTAINER */}


                <View style={styles.mainContainer}>
                    <View style={styles.mainPrimary}>
                        <Text style={styles.mainSubTitle}>Conta</Text>
                        <Icon2 name="arrow-forward-ios" size={24} color='gray' />
                    </View>

                    <View style={{ minHeight: 27 }}>
                        {closeEye ?
                            <FourDots size={24} />
                            :
                            <Text style={styles.mainSubTitle}>R$ 1.300.000.000.000,00</Text>}
                    </View>

                    {/* Opcçõesde pagamento/deposito */}
                    <View style={styles.fullWidthSection}>
                        <ScrollView
                            contentContainerStyle={styles.containerIconsOpt}
                            horizontal
                            showsHorizontalScrollIndicator={false}>

                            {/* TODO: MAPEAR aqui!!!  */}
                            {actions.map((item, index) => {
                                const IconComponent = item.icon //recebe props
                                return (
                                    <View key={index} style={styles.containerIcons}>
                                        <Pressable
                                            style={({ pressed }) => [styles.iconsBorder, pressed && styles.buttonPressed]}
                                        >
                                            <IconComponent
                                                name={item.iconName}
                                                size={24}
                                                color="black"
                                            />
                                        </Pressable>


                                        <Text>{item.title}</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>

                    </View>

                    <Pressable
                        style={({ pressed }) => [styles.myCreditCards, pressed && styles.buttonPressed]}>
                        <Icon5 name='credit-card-multiple-outline' size={22} />
                        <Text>Meus Cartões</Text>
                    </Pressable>

                    {/* Separador */}
                    <View style={styles.separator} />

                    <Icon5 name='credit-card-outline' size={22} />
                    <View style={styles.mainPrimary}>
                        <Text style={styles.mainSubTitle}>Cartão de Crédito</Text>
                        <Icon2 name="arrow-forward-ios" size={24} color='gray' />
                    </View>

                    <Text style={styles.opacitytext}>Fatura Atual</Text>
                    <View style={{ minHeight: 28 }}>
                        {closeEye ?
                            <FourDots size={22} />
                            :
                            <Text style={styles.mainSubTitle}>R$ 200.000,00</Text>}

                    </View>
                    <View style={{ minHeight: 18 }}>
                        {closeEye ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.opacitytext}>Limite disponivel: </Text>
                                <FourDots size={17.5} color="gray" />
                            </View>
                            :
                            <Text style={styles.opacitytext}>Limite disponivel: R$: 1.000.000,00</Text>}
                    </View>



                    {/* Separador */}
                    {services.map((item) => {
                        const IconComponent = item.icon;

                        return (
                            <View key={item.id} style={styles.mappedOpt}>
                                <View style={styles.separator} />

                                <IconComponent
                                    name={item.iconName}
                                    size={item.iconSize}
                                    color="black"
                                />

                                <View style={styles.mainPrimary}>
                                    <Text style={styles.mainSubTitle}>{item.title}</Text>
                                    <Icon2 name="arrow-forward-ios" size={24} color="gray" />
                                </View>

                                {item.hasDots && closeEye ? (
                                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 16 }}>
                                        <Text>Até</Text>
                                        <FourDots size={14} color="black" />
                                        <Text>para você</Text>
                                    </View>
                                ) : (
                                    <Text>{item.description}</Text>
                                )}

                            </View>
                        );
                    })}
                    {/* Separador */}
                    <View style={styles.separator} />
                    <Text style={styles.mainSubTitle}>Descubra Mais</Text>
                    <View style={styles.fullWidthSection}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.discoveryWrapper}
                        >
                            {discoveryItems.map((item) => (
                                <View key={item.id} style={styles.dicoveryContainer}>

                                    <View style={{ flexDirection: 'row', gap: 8 }}>
                                        <Text style={{ fontWeight: "600", fontSize: 16 }}>
                                            {item.title}
                                        </Text>
                                        {item.new && (
                                            <View style={styles.newBadge}>
                                                <Text style={styles.newBadgeText}>NOVO</Text>
                                            </View>
                                        )}
                                    </View>

                                    <Text style={{ marginBottom: 10 }}>
                                        {item.description}
                                    </Text>

                                    <PrimaryButton text={item.buttonText} />
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={styles.reviewContainer}>
                        <Pressable onPress={handleFavorite}>
                            {favorite ?
                                <Icon4 name='heart' size={24} color={COLORS.background} />
                                :
                                <Icon4 name='heart-o' size={24} color={COLORS.background} />}
                        </Pressable>
                        <Text style={{ color: COLORS.background, fontSize: 20 }}>Avalie essa Tela</Text>
                    </View>




                    <View style={styles.blankSpace2} />
                </View>
            </ScrollView>
            <BottomMenu />
        </Layout >
    )
}
