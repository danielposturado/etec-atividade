import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image 
    source = {{ uri: 'https://img.freepik.com/psd-gratuitasflor-cineraria-png-isolada-em-fundo-transparente_191095-10910.jpg'}}
    style = {{width: 100, height: 100}}
    />
      <Text style={styles.infoText}>Este é o catálogo de produtos.</Text>
      <Text>Feito pelo Daniel</Text>
      <Button 
        title="Voltar"
        onPress={() => navigation.goBack()}
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
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default InfoScreen;
