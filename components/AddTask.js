import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState('')

    const handleAddTask = () => {
      if (task.trim()) {
        addTask(task)
        setTask('')
      }
    };

    return (
        <View style={styles.container}>
          {}
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask} 
            placeholder="Enter task..." 
          />
          {}
          <Button title="Save" onPress={handleAddTask} />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        marginBottom: 20, 
      },
      input: {
        height: 60, 
        borderColor: '#ccc', 
        borderWidth: 1, 
        marginBottom: 10, 
        paddingHorizontal: 10, 
      },
    });
    
    export default AddTask;