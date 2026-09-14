import { Dimensions, StyleSheet, TextInput } from "react-native";
import { theme } from "../../global/themes";  


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        
    },
    scrollContent: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
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
        width: '100%',
        maxWidth: 360,
        height: Dimensions.get('window').height / 2,
        minHeight: 360,
        flexShrink: 0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        boxSizing: 'border-box',
        borderRadius: 20,
        marginBottom: 70,
    },
    boxImage: {
        width: 210,
        height: 210,
    },
    TextInput: {
        width: '100%',
        minWidth: 0,
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderWidth: 2,
        borderColor: theme.colors.cinza,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 44,
        marginHorizontal: 8,
        paddingVertical: 0,
        paddingHorizontal: 0,
        minWidth: 0,
        minHeight: 0,
        color: theme.colors.titulo,
        fontSize: 16,
        lineHeight: 22,
        textAlignVertical: 'center',
        includeFontPadding: false,
        backgroundColor: 'transparent',
    },
    inputFocused: {
        borderWidth: 0,
        outlineWidth: 0,
    },

    button: {
        marginTop: 20,
        padding: 15,
        paddingHorizontal: 100,
        backgroundColor: theme.colors.botao,
        borderRadius: 50,
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    }

});