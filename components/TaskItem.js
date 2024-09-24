import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const TaskItem = ({ task, toggleTaskStatus }) => {
    return (
      <TouchableOpacity
        style={[styles.item, task.done && styles.done]}
        onPress={() => toggleTaskStatus(task.id)}
      >
        {}
        <Text style={[styles.text, task.done && styles.textDone]}>{task.text}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      padding: 15, 
      marginBottom: 10, 
      backgroundColor: 'white', 
      borderRadius: 7,  
    },
    
    text: {
      fontSize: 20, 
    },

    textDone: {
      textDecorationLine: 'line-through', // Yliviivaus valmiiksi merkitylle tehtävälle
      color: 'gray', // Harmaa väri yliviivatulle tekstille
  },
  });
  
  export default TaskItem;