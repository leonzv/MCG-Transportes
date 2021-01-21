import React from 'react';
import 'react-native-gesture-handler';
import Style from '../style/style.js';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Dados(props) {
  return (
    <View>
      <ScrollView style={Style.scrollView}>
        <View style={Style.container}>
          <TouchableOpacity style={Style.blueCircle}>
            <View style={Style.blueCircle2} />
          </TouchableOpacity>
          <Text style={Style.homeBemvindo}>Bem vindo, João</Text>
          <Text style={Style.homeText}>Analytics</Text>
          <View style={Style.grayBoxDados}>
            <Text style={Style.grayBoxBigTextDados}> 26 </Text>
            <Text style={Style.grayBoxSmallTextDados}>
              Acessos nos últimos 7 dias
            </Text>
            <View style={Style.coluna1} />
            <View style={Style.coluna2} />
            <View style={Style.coluna3} />
            <View style={Style.coluna4} />
            <View style={Style.coluna5} />
          </View>
          <View style={Style.grayBoxDados}>
            <Text style={Style.grayBoxBigTextDados}> 41 </Text>
            <Text style={Style.grayBoxSmallTextDados}>Viagens Realizadas</Text>
            <View style={Style.coluna1} />
            <View style={Style.coluna2} />
            <View style={Style.coluna3} />
            <View style={Style.coluna4} />
            <View style={Style.coluna5} />
          </View>
          <View style={Style.grayBoxDados}>
            <Text style={Style.grayBoxBigTextDados}> 102 </Text>
            <Text style={Style.grayBoxSmallTextDados}>Fretes Realizados</Text>
            <View style={Style.coluna1} />
            <View style={Style.coluna2} />
            <View style={Style.coluna3} />
            <View style={Style.coluna4} />
            <View style={Style.coluna5} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
