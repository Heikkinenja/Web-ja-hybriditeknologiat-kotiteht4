import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Component } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([]);

   useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, []);  

  const addTask = async (task) => {
    const newTasks = [...tasks, { id: Date.now().toString(), text: task, done: false }];
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

   
   const toggleTaskStatus = async (id) => {
    const updatedTasks = tasks.map(task => {
    return task.id === id ? { ...task, done: !task.done } : task;
   });
    
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

    const clearTasks = async () => {
      try {
        setTasks([]);
        await AsyncStorage.removeItem('tasks');
      } catch (error) {
        console.error(error);
      }
    }; 

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo list</Text>
        {}
        <AddTask addTask={addTask} />
        {}
        <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} />
        {}
        <Button title="Done" onPress={clearTasks} color="black" />
      </View>

    );
  };
  
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 60,
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center'
  },
});

export default App;

