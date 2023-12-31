import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from './components/TabBarIcon';
import CalendarView from './components/CalendarView';
import SettingsView from './components/SettingsView';
import AddUsersView from './components/AddUsersView';
import AnniversaryView from './components/AnniversaryView';
import TodosView from './components/TodosView';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Calendar"
          component={CalendarView}
          options={{
            tabBarIcon: (props) => <TabBarIcon name="calendar" {...props} />,
          }}
        />
        <Tab.Screen
          name="Todos"
          component={TodosView}
          options={{
            tabBarIcon: (props) => <TabBarIcon name="todos" {...props} />,
          }}
        />
        <Tab.Screen
          name="Anniversary"
          component={AnniversaryView}
          options={{
            tabBarIcon: (props) => <TabBarIcon name="anniversary" {...props} />,
          }}
        />
        <Tab.Screen
          name="Add Users"
          component={AddUsersView}
          options={{
            tabBarIcon: (props) => <TabBarIcon name="users" {...props} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsView}
          options={{
            tabBarIcon: (props) => <TabBarIcon name="settings" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
