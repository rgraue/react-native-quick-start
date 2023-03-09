import {List, ListItem, Layout} from '@ui-kitten/components';
import {TodoRealmContext, Todo} from '@appRealm';
import {StyleSheet} from 'react-native';

const {useQuery} = TodoRealmContext;

export const TodoList = () => {
  const data = useQuery(Todo);

  console.log(data);
  return (
    <Layout style={style.container}>
      <List
        style={style.item}
        data={[...data]}
        renderItem={({item}) => (
          <ListItem title={`${item.name}, ${item._id}`} />
        )}
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
  item: {
    height: 180,
    width: 380,
  },
});
