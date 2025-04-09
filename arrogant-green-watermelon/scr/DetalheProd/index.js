import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Produto A', description: 'Descrição do Produto A', price: 'R$ 10,00' },
  { id: '2', name: 'Produto B', description: 'Descrição do Produto B', price: 'R$ 20,00' },
  { id: '3', name: 'Produto C', description: 'Descrição do Produto C', price: 'R$ 30,00' },
];

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const product = products.find(p => p.id === productId);

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
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
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailScreen;
