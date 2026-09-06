import React, { forwardRef, useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import {
    mdiAccountOutline,
    mdiEyeOffOutline,
    mdiEyeOutline,
} from "@mdi/js";
import { styles } from "../../pages/login/styles";
import { theme } from "../../global/themes";

const iconPaths = {
    "account-outline": mdiAccountOutline,
    "eye-outline": mdiEyeOutline,
    "eye-off-outline": mdiEyeOffOutline,
};

type IconName = keyof typeof iconPaths;

function MdiIcon({ name }: { name: IconName }) {
    return (
        <Svg width={20} height={20} viewBox="0 0 24 24">
            <Path d={iconPaths[name]} fill="#D3D3D3" />
        </Svg>
    );
}

type Props = TextInputProps & {
    iconLeftName?: IconName,
    iconRightName?: IconName,
    iconLeftPress?: () => void,
    iconRightPress?: () => void,
};
export const Input = forwardRef<TextInput, Props>((props, ref) => {
    const {
        iconLeftName,
        iconRightName,
        iconLeftPress,
        iconRightPress,
        placeholderTextColor,
        ...rest
    } = props;
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.TextInput}>
        {iconLeftName && (
            iconLeftPress ? (
                <TouchableOpacity onPress={iconLeftPress}>
                    <MdiIcon name={iconLeftName} />
                </TouchableOpacity>
            ) : (
                <MdiIcon name={iconLeftName} />
            )
        )}

        <TextInput
            ref={ref}
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholderTextColor={placeholderTextColor ?? theme.colors.cinza}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
        />

        {iconRightName && (
            iconRightPress ? (
                <TouchableOpacity onPress={iconRightPress}>
                    <MdiIcon name={iconRightName} />
                </TouchableOpacity>
            ) : (
                <MdiIcon name={iconRightName} />
            )
        )}
        </View>
    );
    
});


export default Input;