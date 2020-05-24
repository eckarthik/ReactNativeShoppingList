import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {v4 as uuidv4} from 'uuid';
import AddItem from './components/AddItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
});

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (item) => {
    if(!item) {
      Alert.alert('Error','Please type something', [{text:'Ok'}])
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text: item}, ...prevItems];
      });
    }
    
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) =>
          <ListItem item={item} deleteItem={deleteItem} />
        }
      />
      <AddItem addItem={addItem} />
    </View>
  );
};

export default App;
