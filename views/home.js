import React from 'react';
import 'react-native-gesture-handler';
import Style from '../style/style.js';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home(props) {
  return (
    <View>
      <ScrollView style={Style.scrollView}>
        <View style={Style.container}>
          <TouchableOpacity style={Style.blueCircle}>
            <View style={Style.blueCircle2} />
          </TouchableOpacity>
          <Text style={Style.homeBemvindo}>Bem vindo, João</Text>
          <Text style={Style.homeText}>Seus dados de acesso</Text>
          <View style={Style.grayBox}>
            <Text style={Style.grayBoxBigText}> 26 </Text>
            <Text style={Style.grayBoxSmallText}>
              Acesso nos últimos 7 dias
            </Text>
          </View>
          <Text style={Style.homeText}>Caminhões Cadastrados</Text>
          <View
            style={Style.grayBox}
            onPress={() => props.navigation.navigate('Cadastrados')}>
            <Text style={Style.grayBoxBigText}> 52 </Text>
            <Text style={Style.grayBoxSmallText}>Caminhões Cadastrados</Text>
          </View>
          <Text style={Style.homeText}>Analytics</Text>
          <View
            style={Style.grayBox}
            onPress={() => props.navigation.navigate('Dados')}>
            <Text style={Style.grayBoxBigText}> 26 </Text>
            <Text style={Style.grayBoxSmallText}>
              Acessos nos últimos 7 dias
            </Text>
          </View>
          <View style={Style.grayBox}>
            <Text style={Style.grayBoxBigText}> 41 </Text>
            <Text style={Style.grayBoxSmallText}>Viagens Realizadas</Text>
          </View>
          <View style={Style.grayBox}>
            <Text style={Style.grayBoxBigText}> 102 </Text>
            <Text style={Style.grayBoxSmallText}>Fretes Realizados</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
