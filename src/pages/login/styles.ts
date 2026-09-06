import { Dimensions, StyleSheet, TextInput } from "react-native";
import { theme } from "../../global/themes";  


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignContent: 'center',
        justifyContent: 'center',
        
    },
    logoContainer: {
        height:Dimensions.get('window').height/3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    logoText: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 4,
        color: theme.colors.titulo,
        
    },
    box: {
        height:Dimensions.get('window').height/4,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 20,
        marginBottom: 70,
    },
    boxImage: {
        width: 210,
        height: 210,
    },
    TextInput: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: theme.colors.cinza,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        marginHorizontal: 8,
        padding: 0,
        backgroundColor: 'transparent',
    },
    inputFocused: {
        borderWidth: 0,
        outlineWidth: 0,
    }

});