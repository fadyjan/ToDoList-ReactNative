import React, { useState, setState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
import Input from './Components/Input'

import TodoItem from './Components/TodoItem'

export default function UselessTextInput() {
  const [todos, setTodos] = useState([
    { text: 'studying', key: "1", state: true },
    { text: 'playing', key: "2", state: false },
    { text: 'sleeping', key: "3", state: true },
    { text: 'eating', key: "4", state: false },
  ])

  const [flag, setFlag] = useState(1);
  const [viewTodos, setViewTodos] = useState([])

  useEffect(() => {
    changeVisibleTodos(flag)

  }, [flag, todos])

  const changeVisibleTodos = (flag) => {
    switch (flag) {
      case 1:
        setViewTodos(todos);
        break;
      case 2:
        setViewTodos(todos.filter((item) => item.state));
        break;
      case 3:
        setViewTodos(todos.filter((item) => !item.state));
        break;

      default:
        break;
    }

  };


  const toggleState = (index) => {

    const newTodo = todos.map((item, i) => {

      if (i === index) {
        return { ...item, state: !item.state }
      }
      return item;

    })

    setTodos(newTodo)

  }


  const submitHandler = (text) => {
    setTodos(() => {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString(), state: false },
          ...prevTodos
        ]
      })
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tex}>Jankovic ToDo</Text>
      <Input submitHandler={submitHandler} />

      <View style={styles.test}>

        <TouchableOpacity
          onPress={() => { setFlag(1) }}
          color=" rgb(224, 36, 94);"
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { setFlag(2) }}
          color=" rgb(224, 36, 94);"

        >
          <Text>Active</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => {
            setFlag(3)
          }}
          backgroundColor="rgb(224, 36, 94);"

        >
          <Text>Done</Text>
        </TouchableOpacity>

      </View>

      <FlatList

        data={viewTodos}
        renderItem={({ item, index }) => {

          return <TodoItem item={item} toggleState={() => { toggleState(index) }}> </TodoItem>

        }

        }

        keyExtractor={(item) => String(item.key)}


      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    color: 'red',
    backgroundColor: 'rgb(56,56,56)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  test: {

    flex: 1,
    flexDirection: 'row',
    width: 350,
    flexBasis: 70,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
  },


  tex: {

    textAlign: 'center',
    fontSize: 47,
    paddingTop: 35,
    fontWeight: "bold",
    color: 'white',
    fontStyle: 'italic',
    width: 350,
  },
});


