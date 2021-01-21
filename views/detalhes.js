import React from 'react';
import 'react-native-gesture-handler';
import Style from '../style/style.js';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Detalhes(props) {
  return (
    <View style={Style.container}>
      <TouchableOpacity style={Style.blueCircle}>
        <View style={Style.blueCircle2} />
      </TouchableOpacity>
      <Text style={Style.homeBemvindo}>Bem vindo, João</Text>
      <View>
        <Text style={Style.homeText}>Caminhões Cadastrados</Text>
        <Text style={Style.truckText}>Volvo 2018</Text>
        <View style={Style.grayBoxDetalhes}>
          <Image
            style={Style.yellowTruck}
            source={require('../img/yellowtruck.png')}
          />
        </View>
        <View>
          <Text style={Style.dadosText}> Nome: </Text>
          <Text style={Style.dadosText}> Placa: </Text>
          <Text style={Style.dadosText}> Cidade: </Text>
          <Text style={Style.dadosText}> Estado: </Text>
          <Text style={Style.dadosText}> País: </Text>
          <Text style={Style.dadosText}> Telefone: </Text>
          <Text style={Style.dadosText}> Endereço: </Text>
          <Text style={Style.dadosText}> CEP: </Text>
          <Text style={Style.dadosText}> RG: </Text>
          <Text style={Style.dadosText}> CPF: </Text>
        </View>
        <TouchableOpacity style={Style.editarDados}>
          <Text style={Style.textEditar}> EDITAR DADOS </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.rastrearCaminhao}
          onPress={() => props.navigation.navigate('Localização')}>
          <Text style={Style.textRastrear}> RASTREAR CAMINHÃO </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
