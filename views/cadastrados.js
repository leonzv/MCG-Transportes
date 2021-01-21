import React from 'react';
import 'react-native-gesture-handler';
import Style from '../style/style.js';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Cadastrados(props) {
  return (
    <View>
      <ScrollView style={Style.scrollView}>
        <View style={Style.container}>
          <TouchableOpacity style={Style.blueCircle}>
            <View style={Style.blueCircle2} />
          </TouchableOpacity>
          <Text style={Style.homeBemvindo}>Bem vindo, João</Text>
          <Text style={Style.homeText}>Caminhões Cadastrados</Text>
          <View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.grayBoxCadastro}>
              <Text style={Style.grayBoxTextCadastro}> VOLVO - 2018 </Text>
              <TouchableOpacity
                style={Style.verButton}
                onPress={() => props.navigation.navigate('Detalhes')}>
                <Text style={Style.verText}>VER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
