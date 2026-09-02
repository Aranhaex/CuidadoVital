import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";

export default function Login() {
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.boxImage} />
            <Text style={styles.logoText}>Bem-vindo de volta</Text>
        </View>
        <View style={styles.box}>
            
            <Input placeholder="Digite seu E-mail ou CPF" />
            
            <Input placeholder="Digite sua senha" secureTextEntry />
            
        </View>

        </View>
    );
}