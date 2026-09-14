import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Input from "../../components/Input";
import Logo from "../../assets/Logo.png";
import { styles } from "./styles";

type CadastroProps = {
	onLoginPress: () => void;
};

export default function Cadastro({ onLoginPress }: CadastroProps) {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [acceptedTerms, setAcceptedTerms] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image source={Logo} style={styles.boxImage} />
				<Text style={styles.logoText}>Crie Sua Conta</Text>
			</View>

			<View style={styles.box}>
				<Input placeholder="Nome Completo" iconLeftName="account-outline" style={styles.input} />
				<Input placeholder="CPF" iconLeftName="file-document-outline" style={styles.input} />
				<Input placeholder="E-mail" style={styles.input} />
				<Input
					placeholder="Senha"
					secureTextEntry={!showPassword}
					iconRightName={showPassword ? "eye-off-outline" : "eye-outline"}
					iconRightPress={() => setShowPassword((visible) => !visible)}
					style={styles.input}
				/>
				<Input
					placeholder="Confirmação de Senha"
					secureTextEntry={!showConfirmation}
					iconRightName={showConfirmation ? "eye-off-outline" : "eye-outline"}
					iconRightPress={() => setShowConfirmation((visible) => !visible)}
					style={styles.input}
				/>

				<Pressable style={styles.checkboxRow} onPress={() => setAcceptedTerms((accepted) => !accepted)}>
					<View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
						{acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
					</View>
					<Text style={styles.terms}>
						Aceito os <Text style={styles.termsLink}>Termos e Condições</Text>
					</Text>
				</Pressable>

				<Pressable style={styles.button} onPress={() => {}}>
					<Text style={styles.buttonText}>Cadastrar</Text>
				</Pressable>

				<Text style={styles.loginText}>
					Já tem conta? <Text style={styles.loginLink} onPress={onLoginPress}>Entrar</Text>
				</Text>
			</View>
		</View>
	);
}
