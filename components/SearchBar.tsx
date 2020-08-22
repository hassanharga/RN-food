import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  term: string;
  onTermChange: (term: string) => void;
  onTermSubmit: () => void;
};

const SearchBar: React.FC<Props> = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
        placeholder='Search'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default SearchBar;
