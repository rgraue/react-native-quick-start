import React from 'react';
import { Input, Layout } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '@store';
import { MyButton } from './myButton.component';
import { useState } from 'react';
import { TodoRealmContext, Todo } from '@appRealm';
import Realm from 'realm';

const { useRealm } = TodoRealmContext;

export const TodoForm = () => {
  const [todoName, setTodoName] = useState('');
  const realm = useRealm();

  const todoNames = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch();

  function handleAddTodo() {
    const id = new Realm.BSON.ObjectId();
    console.log(todoName);
    dispatch(
      addTodo({
        id: id.toHexString(),
        name: todoName,
      }),
    );
    realm.write(() => {
      console.log('realm write', todoName);
      realm.create('Todo', Todo.generate(id, todoName));
    });
    console.log('redux', todoNames);
  }

  return (
    <Layout>
      <Input
        placeholder="Enter todo"
        value={todoName}
        onChangeText={nextValue => setTodoName(nextValue)}
      />
      <MyButton text={'Add Todo'} buttonHandler={handleAddTodo} />
    </Layout>
  );
};
