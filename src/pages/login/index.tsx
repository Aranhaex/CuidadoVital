import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.boxImage} />
            <Text style={styles.logoText}>Bem-vindo de volta</Text>
        </View>
        <View style={styles.box}>
            
            <Input 
                placeholder="Digite seu E-mail ou CPF"
                value={email}
                onChangeText={setEmail}
                iconLeftName="account-outline"
            />
            
            <Input 
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry={!showPassword}
                iconRightName={showPassword ? "eye-off-outline" : "eye-outline"}
                iconRightPress={() => setShowPassword((visible) => !visible)}
            />
            
        </View>

        </View>
    );
}