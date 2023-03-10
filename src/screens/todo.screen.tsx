import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { MyButton, TodoForm, TodoList } from '@components';
import { StyleSheet } from 'react-native';

export const TodoScreen = ({ navigation }) => {
  function switchPage() {
    navigation.navigate('Home');
  }
  return (
    <Layout style={style.container}>
      <Text>TODO List</Text>
      <TodoForm />
      <TodoList />
      <MyButton text={'Go Back'} buttonHandler={switchPage} />
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
