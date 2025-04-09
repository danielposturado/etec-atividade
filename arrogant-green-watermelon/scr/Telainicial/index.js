import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao Catálogo de Produtos!</Text>
      <Button 
        title="Ver Produtos"
        onPress={() => navigation.navigate('Products')}
      />
      <Button 
        title="Informações"
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
