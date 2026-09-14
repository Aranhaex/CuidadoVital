import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    logoContainer: {
        height:Dimensions.get('window').height/3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    boxImage: {
        width: 210,
        height: 210,
    },
    logoText: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 4,
        color: theme.colors.titulo,
    },
    box: {
        width: "100%",
        maxWidth: 360,
        minHeight: 430,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        boxSizing: "border-box",
        borderRadius: 20,
        marginBottom: 30,
    },
    input: {
        width: "100%",
        minWidth: 0,
        flexShrink: 1,
        marginBottom: 8,
    },
    checkboxRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: theme.colors.cinza,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    checkboxChecked: {
        backgroundColor: theme.colors.botao,
        borderColor: theme.colors.botao,
    },
    checkmark: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    terms: {
        color: theme.colors.titulo,
        fontSize: 13,
    },
    termsLink: {
        color: theme.colors.links,
        fontWeight: "bold",
    },
    button: {
        width: "100%",
        marginTop: 28,
        paddingVertical: 14,
        alignItems: "center",
        backgroundColor: theme.colors.botao,
        borderRadius: 50,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginText: {
        color: theme.colors.titulo,
        marginTop: 12,
    },
    loginLink: {
        color: theme.colors.links,
        fontWeight: "bold",
    },
});