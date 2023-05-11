import { Component } from 'react'
import {Database} from '@nozbe/watermelondb';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing Local Database
import {mySchema} from './database/schema';
import Task from './database/Task';

// Importing Components
import TitleBar from './components/TitleBar';
import BottomNav from './components/BottomNav';

const adapter = new SQLiteAdapter({
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: [Task],
});



const Stack = createNativeStackNavigator();

export default class App extends Component {

  
  render = () => {
    return (
      <DatabaseProvider database={database}>
        <PaperProvider>
        <NavigationContainer>
          {/* <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <NavBar {...props} />,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Garage" component={Garage} />
            <Stack.Screen name="Parts Shelf" component={PartsShelf} />
            <Stack.Screen name="Ideas / Inspiration" component={Inspiration} />
          </Stack.Navigator> */}
          <TitleBar />
          <BottomNav />
        </NavigationContainer>
        </PaperProvider>
      </DatabaseProvider>
    );
  };
}
