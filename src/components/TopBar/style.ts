import { COLORS } from "../../styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:12,
        paddingHorizontal: 30,
        paddingBottom: 12,
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