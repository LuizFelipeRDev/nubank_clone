import { COLORS } from "../../styles/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingVertical: 30,
        borderRadius:50,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    },
    text:{
        fontSize:14,
        fontWeight:'600'
    }
})