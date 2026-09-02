import React, {forwardRef} from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { theme } from "../../global/themes";
import { styles } from "../../pages/login/styles";



type InputProps = TextInputProps & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconLeftName?: string;
    iconRightName?: string;
    placeholder?: string;
    iconLeftPress?: () => void;
    iconRightPress?: () => void;
};
const Input = forwardRef<TextInput, InputProps>((props, ref) => {
    return (
        <TextInput
            ref={ref}
            style={styles.TextInput}
            {...props}
        />
    );
});


export default Input;