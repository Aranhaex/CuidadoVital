import { StyleSheet } from "react-native";
import { theme } from "../../global/themes";    
import { TextInputProps } from "react-native";

const styles = StyleSheet.create({
    TextInput: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: theme.colors.cinza,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        color: theme.colors.cinza,
        
    },
    placeholder: {
        color: theme.colors.cinza,
        fontSize: 12,
    }
});