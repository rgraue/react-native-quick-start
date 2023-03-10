import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationRoot } from '@navigation';
import { Provider } from 'react-redux';
import { store } from '@store';
import { TodoRealmContext } from '@appRealm';

const { RealmProvider } = TodoRealmContext;

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <RealmProvider>
        <Provider store={store}>
          <NavigationRoot />
        </Provider>
      </RealmProvider>
    </ApplicationProvider>
  );
}

export default App;
