import React from 'react';
import 'react-native-gesture-handler';
import Style from '../style/style.js';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Localizacao(props) {
  return (
    <View style={Style.container}>
      <TouchableOpacity style={Style.blueCircle}>
        <View style={Style.blueCircle2} />
      </TouchableOpacity>
      <Text style={Style.homeBemvindo}>Bem vindo, João</Text>
      <View style={Style.primeiraRoda}>
        <View style={Style.segundaRoda}>
          <View style={Style.terceiraRoda}>
            <Image
              style={Style.yellowTruckRastrear}
              source={require('../img/yellowtruck.png')}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={Style.textLocalizacao}>Buscando informações...</Text>
        <Text style={Style.bigTextLocalizacao}>100%</Text>
        <ActivityIndicator size="small" color="#3a3967" />
        <TouchableOpacity
          style={Style.editarDados}
          onPress={() => props.navigation.navigate('GPS')}>
          <Text style={Style.textEditar}> IR PARA A LOCALIZAÇÃO </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.editarDados}
          onPress={() => props.navigation.navigate('Detalhes')}>
          <Text style={Style.textEditar}> INTERROMPER LOCALIZAÇÃO </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
