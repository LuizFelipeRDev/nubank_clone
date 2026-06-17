import { COLORS } from "../../styles/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal:40,
        paddingBottom:20
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
    },

    logo: {
        width: 60,
        height: 40,

    },
    mainContainer:{
        display:"flex",
    },
    mainText:{
        fontSize:17,
        color: COLORS.primary,
        marginBottom:26,
        lineHeight:28
    },
    subMainContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        color:COLORS.primary,
        gap:10
    },
    subMainText:{
        color:COLORS.primary,
        fontSize:12
    },
    //BottonContainer
    bottonContainer:{
        display:'flex',
        width:"100%",
        gap:20
    },
    subTextBotton:{
        color: COLORS.secudary,
        fontSize:10
    }

})