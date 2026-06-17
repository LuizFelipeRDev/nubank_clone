import { COLORS } from "../../styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 15,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99
    },
    iconsWrapper: {
        display: 'flex',
        gap: 6,
        flexDirection: 'row',
        color: COLORS.primary,
        alignItems: 'center'
    },
    text: {
        color: COLORS.primary
    },
    bateria: {
        transform: [
            { rotate: "90deg" }
        ],
    },
})