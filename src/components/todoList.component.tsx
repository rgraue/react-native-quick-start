import React from 'react';
import { List, ListItem, Layout, Text, Icon } from '@ui-kitten/components';
import { TodoRealmContext, Todo } from '@appRealm';
import { StyleSheet } from 'react-native';
import { ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoSliceObject } from '@store';

const { useQuery } = TodoRealmContext;

export const TodoList = () => {
  const realmData = useQuery(Todo);
  const reduxDate: TodoSliceObject[] = useSelector(
    (state: any) => state.todos.todos,
  );

  const isReduxAccessory = id => {
    const match = reduxDate.filter(reduxElement => reduxElement.id === id);

    if (match.length !== 0) {
      return <Icon name="star" />;
    }

    return;
  };

  const Item = ({
    item,
  }: ListRenderItemInfo<Todo & Realm.Object<unknown, never>>) => {
    return (
      <ListItem
        title={<Text>{item.name}</Text>}
        description={<Text>{item._id.toHexString()}</Text>}
        accessoryRight={isReduxAccessory(item._id.toHexString())}
      />
    );
  };

  return (
    <Layout style={style.container}>
      <List
        style={style.list}
        data={[...realmData]}
        renderItem={item => Item(item)}
      />
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    borderColor: 'white',
    borderWidth: 1,
  },
  list: {
    height: 180,
    width: 380,
  },
});
