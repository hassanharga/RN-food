import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import apiService from '../services/api';
import Swiper from 'react-native-swiper';

const ResultShow: React.FC = () => {
  const route: any = useRoute();
  const [result, setResult] = useState<any>(null);

  const getResult = async (id: string) => {
    try {
      const data = await apiService.get(`/${id}`);
      const result = data.data;
      // console.log(result);

      setResult(result);
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
          <View>
            <Swiper
              dotStyle={styles.dotStyle}
              loop
              autoplay
              activeDotStyle={styles.activeDotStyle}
            >
              {result &&
                result.photos.length > 0 &&
                result.photos.map((item: any, index: number) => (
                  <View key={index} style={styles.slide1}>
                    <Image style={styles.image} source={{ uri: item }} />
                    <Text style={styles.text}>{result.name}</Text>
                  </View>
                ))}
            </Swiper>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  dotStyle: {
    backgroundColor: '#5c77a9',
  },
  activeDotStyle: {
    backgroundColor: 'red',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#5c77a9',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: '100%',
  },
});

export default ResultShow;
