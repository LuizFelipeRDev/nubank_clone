import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";



export const styles = StyleSheet.create({
    container: {
        gap: 20

    },
    topContainer: {
        display: 'flex',
        gap: 20,
        paddingHorizontal: 30,
    },
    separator: {
        borderBottomWidth: 2,
        borderColor: COLORS.tertiary,
        marginHorizontal: -30
    },

    topRowPrimary: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    perfilImg: {
        width: 80,
        height: 80,
        borderRadius: 99
    },
    dotPerfil: {
        backgroundColor: COLORS.primary,
        height: 20,
        width: 20,
        position: 'absolute',
        borderRadius: 99,
        borderColor: COLORS.background,
        borderWidth: 3,
        left: 60,
        top: 10
    },
    topIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    textTop: {
        color: COLORS.primary,
        fontSize: 16,
        paddingBottom: 20
    },

    mainContainer: {
        backgroundColor: COLORS.primary,
        paddingTop: 20,
        paddingHorizontal: 30,
        gap: 20
    },
    mainPrimary: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
    },
    mainSubTitle: {
        fontSize: 20,
        fontWeight: 600
    },
    opacitytext: {
        color: COLORS.quartenary
    },

    containerIconsOpt: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    containerIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginRight: 10

    },
    iconsBorder: {
        backgroundColor: COLORS.tertiary,
        padding: 26,
        borderRadius: 99
    },
    myCreditCards: {
        backgroundColor: COLORS.tertiary,
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        gap: 10
    },

    discoveryWrapper: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    fullWidthSection: {
        marginHorizontal: -30,
    },
    dicoveryContainer: {
        backgroundColor: COLORS.tertiary,
        padding: 20,
        borderRadius: 12,
        width: 270,
        marginRight: 12,
        gap: 8,
        justifyContent: 'space-between'
    },
    mappedOpt: {
        gap: 20
    },


    blankSpace: {
        height: 50
    },
    buttonPressed: {
        backgroundColor: COLORS.quinary,
    },
}) 