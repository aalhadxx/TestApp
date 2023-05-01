import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Eggs'},
    {id: Math.random(), text: 'Bread'},
    {id: Math.random(), text: 'Juice'},
  ]);

  const addItem = (text) => { 
    if (!text) {
      Alert.alert('Error', 'cannot add empty value', [{text: 'OK'}]);
    } else {    
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
        });
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem} />
      <FlatList
      data={items} 
      renderItem = {({item}) => <ListItem item={item} deleteItem={deleteItem} />}
       />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default App;
