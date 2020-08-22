import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';

type Props = {
  title: string;
  results: any[];
};
const ResultList: React.FC<Props> = ({ title, results }) => {
  return (
    <View style={styles.container}>
      {results.length > 0 && <Text style={styles.title}>{title}</Text>}
      <FlatList
        horizontal
        data={results}
        renderItem={({ item }) => <ResultDetails result={item} />}
        keyExtractor={(data) => data.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
