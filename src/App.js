import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './components/Button/Button';
import tw from 'twrnc';  
import { FlatList } from 'react-native';


export default function App() {

  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState('');

const renderElements = ({item}) => <Text style={tw`text-black `}>{item}</Text>
 

const addTask = () => {
 if(task.length > 0){
  setTasks([...tasks,task]);}
  setTask('');
}


  return (
    <SafeAreaView>
    <View style={tw`mt-20 flex `}>
      <Text>Testing</Text>
      <FlatList
      keyExtractor={(item, index) => index.toString()}
      testID='flatlist'
      data={tasks}
      renderItem={renderElements}
      />
      <TextInput onChangeText={setTask}  testID='input-area' placeholder='add your task here..' />
      <Button onClick={addTask} title="Add Task"/>
       
    </View>
    </SafeAreaView>
  );
}


