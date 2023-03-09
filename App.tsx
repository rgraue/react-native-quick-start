import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, TodoScreen} from '@screens';
import {Provider} from 'react-redux';
import {store} from '@store';
import {TodoRealmContext} from '@appRealm';

const {RealmProvider} = TodoRealmContext;
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <RealmProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Todo" component={TodoScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </RealmProvider>
    </ApplicationProvider>
  );
}

export default App;
