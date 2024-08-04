import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import {styles} from './styles';

import { Task } from '../../components/Task';


export function Home() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('')
  const [imageToggled, setImageToggled] = useState(false);
  const [taskStates, setTaskStates] = useState<{ [key: string]: boolean }>({});

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });


    function handleTaskAdd() {
      if(tasks.includes(taskName)) {
        return Alert.alert("Tarefa já existe", "Já existe esta tarefa na lista!")
      }

      setTasks( prevState => [...prevState, taskName])
      setTaskName('');

    }

    function handleTaskRemove(name: string) {

      Alert.alert("Remover", `Remover a tarefa ${name}?`, [
        {
          text: "Sim",
          onPress: () => setTasks(prevState => prevState.filter(Task => Task !== name))
        },
        {
          text: "Não",
          style: "cancel" 
        }
      ])
    }

    function toggleTaskState (taskId: string) {
        setTaskStates(prevState => ({
            ...prevState,
            [taskId]: !prevState[taskId],
          }));
    }

    const totalTasks = tasks.length;
    const completedTasks = Object.values(taskStates).filter(state => state).length;


  return (
    
    <View style={styles.container}>
      <Image source={require('../../../assets/AppIcons/Logo.png')} style={styles.logo} />

      <Text style={styles.listDate}>Tarefas do dia - {formattedDate}</Text>

      <View style={styles.form}>
      <TextInput 
      style={styles.input} 
      placeholder='Adicione tarefas aqui' 
      placeholderTextColor='#6B6B6B'
      onChangeText={setTaskName}
      value={taskName}
      />

      <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
        <Text style={styles.buttomText}>+</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.countersContainer}>
        <Text style={styles.counter}>Criadas: {totalTasks}</Text>
        <Text style={styles.counter}>Concluídas: {completedTasks}</Text>
      </View>

      {totalTasks === 0 ? (
        <Text style={styles.listEmptyText}>
          Você ainda não tem tarefas cadastradas. Crie tarefas e organize seus itens a fazer.
        </Text>
      ) : (
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.listEmptyText}>Nenhuma tarefa na lista. Por favor adicione uma nova.</Text>}
        renderItem={({item}) => (  
          <Task 
          key={item}
          name={item} 
          onRemove={() => handleTaskRemove(item)}
          isDone={taskStates[item] || false}
          toggleTaskState={() => toggleTaskState(item)}
          />
        )}
      />
    )}
    </View>
  );
}