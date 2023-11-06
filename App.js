// import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
//Task = todo item

export default function App() {

  const taskInputHandler = (enteredText) => {
    console.log(enteredText);
  }
  const addTaskHandler = () => {
    console.log("should add task");
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
        onPress={() => addTaskHandler}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.task}>
          <Text style={styles.itemList}>taskname goes here</Text>
          <View style={styles.taskButtons}>
            <TouchableOpacity
              onPress={() => { console.log("should delete task") }}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View >
        <View style={styles.task}>
          <Text style={styles.itemList}>taskname goes here</Text>
          <View style={styles.taskButtons}>
            <TouchableOpacity
              onPress={() => { console.log("should delete task") }}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View >
      </ScrollView>
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