import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTaskStatus }) => {
    return (
      <View>
        {}
        <FlatList
          data={tasks} 
          renderItem={({ item }) => (
            <TaskItem task={item} toggleTasktStatus={toggleTaskStatus} />
          )}
          keyExtractor={item => item.id} 
        />
      </View>
    );
  };
  
  export default TaskList;