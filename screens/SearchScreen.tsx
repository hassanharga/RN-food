import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import apiService from '../services/api';

const SearchScreen = ({ props }: any) => {
  const [term, setTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [results, setResults] = useState([]);
  const onTermSubmitHandler = async (searchedItem: string) => {
    try {
      const data = await apiService.get('/search', {
        params: {
          term: searchedItem,
          limit: 50,
          location: 'new york',
        },
      });
      setResults(data.data.businesses);
      setErrorMsg('');
    } catch (error) {
      setErrorMsg('somthing went wrong');
    }
  };

  useEffect(() => {
    onTermSubmitHandler('pasta');
  }, []);

  const filterResults = (price: string) => {
    return results.filter((result: any) => result.price === price);
  };

  return (
    <View style={{ marginLeft: 10, flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(term: string) => {
          setTerm(term);
        }}
        onTermSubmit={() => {
          onTermSubmitHandler(term);
        }}
      />

      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {/* <Text>We have {results.length} results</Text> */}
      <ScrollView>
        <ResultList results={filterResults('$')} title='Cost Effective' />
        <ResultList results={filterResults('$$')} title='Bit Pricier' />
        <ResultList results={filterResults('$$$')} title='Big Spender' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
