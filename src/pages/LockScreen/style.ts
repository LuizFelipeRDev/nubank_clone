import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lockScreenWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '90%',
        marginBottom: 40
    },

    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10

    },
    newBadge: {
        backgroundColor: '#820AD1',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 99,
    },

    newBadgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },

    dotRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 80,
        fontSize: 35
    }
})