import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';

export default function App() {
  const [screen, setScreen] = React.useState<'login' | 'cadastro'>('login');

  return (
    <View style={styles.container}>
      {screen === 'login' ? (
        <Login onCadastroPress={() => setScreen('cadastro')} />
      ) : (
        <Cadastro onLoginPress={() => setScreen('login')} />
      )}
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4F0F1',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
