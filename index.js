/**
 * @format
 */

 import 'react-native-gesture-handler';
 import {AppRegistry} from 'react-native';
 import React from 'react';
 import App from './App';
 import Route from './src/routes/Route';
 import {name as appName} from './app.json';
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/integration/react';
 import reduxConfig from './src/redux/store';
 import AsyncStorage from '@react-native-async-storage/async-storage'; 
 // import 'react-native-reanimated'
 
 const redux = reduxConfig();
 const Main = () => {
     return (
       <Provider store={redux.store}>
         <PersistGate persistor={redux.persistor}>
           <Route />
         </PersistGate>
       </Provider>
     );
   };
 
 AppRegistry.registerComponent(appName, () => Main);
 