import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";


export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: `${COLORS.tertiary}90`,
        borderRadius: 30,
    },
    rotateIcon: {
        transform: [{ rotate: "90deg" }]
    },
    containerIcon: {
        borderRadius: 99,
        padding: 20
    },

    buttonPressed: {
        backgroundColor: `${COLORS.background}20`,
    },
})