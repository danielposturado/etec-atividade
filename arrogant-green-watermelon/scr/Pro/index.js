import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

// Adicionando a URL da imagem corretamente no objeto 'products'
const products = [
  { id: '1', name: 'Produto A', price: 'R$ 10,00', imageUrl: 'https://images.vexels.com/media/users/3/142546/isolated/preview/2f6d0faa355125320122dc57e8b07084-icone-de-camiseta.png' },
  { id: '2', name: 'Produto B', price: 'R$ 20,00', imageUrl: 'https://e7.pngegg.com/pngimages/122/930/png-clipart-trunks-green-shorts-beach-short-trunks-swimsuit-bottom.png'  },
  { id: '3', name: 'Produto C', price: 'R$ 30,00', imageUrl: 'https://cdn-images.farfetch-contents.com/28/33/16/41/28331641_57764727_600.jpg'  },
];

const ProductListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text>{item.name} - {item.price}</Text>
            {/* Renderizando a imagem somente se ela estiver disponível */}
            {item.imageUrl && (
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
              />
            )}
            <Button 
              title="Ver Detalhes"
              onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
            />
          </View>
        )}
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
  productContainer: {
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default ProductListScreen;
