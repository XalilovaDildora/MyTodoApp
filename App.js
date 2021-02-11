
import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos,setTodos]=useState([
    {text:'Kamolov Alisher', key:'1'},
    {text:'Salimova Lola', key:'2'}
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);
    });
  };
  const submitHandler=(text)=>{
setTodos((prevTodos)=>{
  return [
    {text:text,key:Math.random().toString()},
    ...prevTodos
  ]
})
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
<AddTodo submitHandler={submitHandler} />
<View style={styles.list}>
  <FlatList 
  data={todos}
  renderItem={({item})=>(
    <TodoItem item={item} pressHandler={pressHandler}/>
  )}
  />

</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  content:{
    padding:30,
  },
  list:{marginTop:15}
});
