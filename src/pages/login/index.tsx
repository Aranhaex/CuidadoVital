import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, Image, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";
import { theme } from "../../global/themes";


type LoginProps = {
    onCadastroPress: () => void;
};

export default function Login({ onCadastroPress }: LoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
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
            <Text style={{ color: theme.colors.links, marginBottom: 10, alignSelf: "flex-end" }}>Esqueceu a senha?</Text>

            <Pressable style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
            <Text style={{ color: theme.colors.links, marginTop: 10 }}>Entrar com CPF</Text>
            <Text style={{ color: theme.colors.links, marginTop: 10 }}>
                Não possui uma conta?{' '}
                <Text style={{ fontWeight: "bold" }} onPress={onCadastroPress}>Cadastre-se</Text>
            </Text>

        </View>
        </ScrollView>

        </KeyboardAvoidingView>
    );
}