import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import TaskItem from './components/taskItem'; //Task = todo item - component

export default function App() {

  const[enteredTask, setEnteredTask] = useState(''); //enteredTask = taskname - standaard is dir een lege string
  const[tasks, setTasks] = useState([]); //taskList = [task1, task2, task3]

  const [editIndex, setEditIndex] = useState(-1); //editIndex = -1 

  const taskInputHandler = (enteredText) => {
    /*console.log(enteredText);*/
    setEnteredTask(enteredText);
  }
  const addTaskHandler = () => {
    console.log(enteredTask);
    console.log("should add task");
    setTasks(currentTasks => [...currentTasks, enteredTask]);
  }

  const renderItem = (itemData) => {
    return(
    <View style={styles.task}>
      {console.log(itemData)}
    <Text style={styles.itemList}>{itemData.item}</Text>
    <View style={styles.taskButtons}>
      <TouchableOpacity
        onPress={() => { console.log("should delete task", itemData.index) }}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View >
    )
  }

  const deleteTaskHandler = (itemData) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(itemData, 1);
    setTasks(updatedTasks); 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>To Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        onChangeText={taskInputHandler}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addTaskHandler()}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList renderItem={renderItem} data={tasks}/>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  }
});