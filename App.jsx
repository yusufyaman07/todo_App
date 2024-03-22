//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Input from './src/components/input';
import Todo from './src/components/todo';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const App = () => {
  const [text, setText] = useState();
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    AsyncStorage.setItem('@todos', JSON.stringify([...todos, newTodo]))
      .then(() => {
        setTodos([...todos, newTodo]);
        setText('');
      })
      .catch(err => Alert.alert('Mistake', 'Something went wrong'));
    // setTodos([...todos, newTodo]);
    // setText('');
  };
  useEffect(() => {
    AsyncStorage.getItem('@todos')
      .then(res => {
        console.log(res);
        if (res !== null) {
          const parsedRes = JSON.parse(res);
          setTodos(parsedRes);
        }
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title={'My Todo App'} />
      <Input
        placeholder="enter todo"
        hasIcon
        iconName="pluscircle"
        value={text}
        onChangeText={text => setText(text)}
        onIconPress={addTodo}
      />
      <View style={generalStyles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={generalStyles.emptyText}>
            There Are No Registered Todos Yet
          </Text>
        ) : (
          <ScrollView style={generalStyles.scrollView}>
            {todos?.map(todo => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                todo={todo}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;
