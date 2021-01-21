import * as React from 'react';
import 'react-native-gesture-handler';
import Login from './views/login';
import Home from './views/home';
import Cadastrados from './views/cadastrados';
import Detalhes from './views/detalhes';
import Localizacao from './views/localizacao';
import Gps from './views/gps';
import Dados from './views/dados';
import Settings from './views/settings';
import About from './views/about';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Stackers() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastrados" component={Cadastrados} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Localização" component={Localizacao} />
      <Stack.Screen name="GPS" component={Gps} />
      <Stack.Screen name="Dados" component={Dados} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Página Inicial" component={Stackers} />
        <Drawer.Screen name="Dados do Motorista" component={Dados} />
        <Drawer.Screen name="Caminhões Cadastrados" component={Cadastrados} />
        <Drawer.Screen name="Configurações" component={Settings} />
        <Drawer.Screen name="Sobre" component={About} />
        <Drawer.Screen name="Sair" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
