import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import apiService from '../services/api';

const ResultShow: React.FC = () => {
  const route: any = useRoute();
  const [result, setResult] = useState<any>(null);

  const getResult = async (id: string) => {
    try {
      const result = await apiService.get(`/${id}`);
      setResult(result.data);
    } catch {
      console.log('something went wrong');
    }
  };
  useEffect(() => {
    if (route && route.params) {
      const id = route.params.id;
      getResult(id);
    }
  }, []);

  return (
    <View style={styles.container}>
      {result && (
        <>
          <Text> {result.name}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  image: {
    height: 200,
    width: 300,
    margin: 10,
  },
});

export default ResultShow;
