//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {colors} from '../../utils/constants';
import styles from '../todo/style';
import Icon from 'react-native-vector-icons/AntDesign';
import EditModal from '../editModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(todo.text);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Delete Todo
  const deleteTodo = () => {
    Alert.alert('Deletion Process', `Delete the selected todo?`, [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const filtredTodos = todos.filter(item => item.id !== todo.id);
          AsyncStorage.setItem('@todos', JSON.stringify(filtredTodos)).then(
            () => setTodos(filtredTodos),
          );
        },
        style: 'destructive',
      },
    ]);
  };
  // Change Completed Todo
  const changeCompleted = () => {
    Alert.alert('Task Status', `Change Todo's task status?`, [
      {
        text: 'Cancel',
      },
      {
        text: 'Mark',
        onPress: () => {
          const updatedTodos = todos.map(item => {
            if (item.id === todo.id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          });
          AsyncStorage.setItem('@todos', JSON.stringify(updatedTodos)).then(
            () => setTodos(updatedTodos),
          );
        },
        style: 'destructive',
      },
    ]);
  };
  // Edit Todo
  const editTodo = () => {
    if (willEditText === '') {
      setIsError(true);
      setErrorMessage('*Text Field Cannot Be Blank. Please check.');
      setTimeout(() => {
        setIsError(false);
        setErrorMessage('');
      }, 2000);
      return;
    }
    const tempArr = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todo.id) {
        tempArr.push(todos[i]);
      } else {
        const updateTodos = {
          ...todo,
          text: willEditText,
        };
        tempArr.push(updateTodos);
      }
    }
    AsyncStorage.setItem('@todos', JSON.stringify(tempArr)).then(
      () => setTodos(tempArr),
      setOpenModal(false),
    );
  };
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>
          {todo?.text}{' '}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCompleted}>
          <Icon
            name={todo?.completed === true ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
      <EditModal
        willEditText={willEditText}
        setWillEditText={setWillEditText}
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        onConfirm={editTodo}
        hasError={isError}
        errorMessage={errorMessage}
      />
    </View>
  );
};

//make this component available to the app
export default Todo;
