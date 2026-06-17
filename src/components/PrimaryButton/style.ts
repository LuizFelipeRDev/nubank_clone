import { COLORS } from "../../styles/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        padding: 12,
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:"flex-start"
        
    },
    text:{
        fontSize:14,
        fontWeight:'600',
        color:COLORS.primary
    }
})