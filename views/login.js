import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';
import react from 'react';

export default function Login(props) {
  const [nome, setNome] = react.useState('');
  const [email, setEmail] = react.useState('');
  console.log(props);
  return (
    <View style={Style.container}>
      <View style={Style.topContainer}>
        <Image
          style={Style.ewayTruck}
          source={require('../img/ewaytruck.png')}
        />
      </View>
      <View style={Style.botContainer}>
        <View>
          <Text style={Style.mcgt}>MCGTRANSPORTES</Text>
          <Text style={Style.rastreador}>R A S T R E A D O R</Text>
          <View>
            <Text style={Style.loginText}>Nome:</Text>
            <TextInput
              style={Style.textBox}
              onChangeText={(text) => setNome(text)}
              value={nome}
              placeholderTextColor="#fff"
              autoCapitalize="words"
            />
            <Text style={Style.loginText}>E-mail:</Text>
            <TextInput
              style={Style.textBox}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity
              style={Style.entrarButton}
              onPress={() => props.navigation.navigate('Home')}>
              <Text style={Style.entrarButtonText}> ENTRAR </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
