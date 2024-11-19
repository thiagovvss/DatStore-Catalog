import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Aparelhos from '../../component/Aparelhos';


export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require('../../assets/banner2.jpg')}
        style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>APARELHOS</Text>
          <Text style={[styles.text, {color: '#CECECF'} ]}>•</Text>
          <Text style={[styles.text, {color: '#CECECF'} ]}>APPLE</Text>
          <TouchableOpacity style={{ position:'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
            name='filter-list'
            size={24}
            color='#000'
            />
          </TouchableOpacity>
        </View>  
      </View>
        
        <View style={styles.line} />

        <ScrollView>

          <Text style={styles.text}>EM ALTA</Text>

          <View style={{ flexDirection:'row', justifyContent: 'space-around'}}>

            <Aparelhos img={require('../../assets/1.jpg')}cost="R$3699,00" onClick={()=> navigation.navigate('Detail')}>
              Iphone 13 128gb
            </Aparelhos>

            <Aparelhos img={require('../../assets/7.jpg')}cost="R$4890,00" onClick={()=> navigation.navigate('Detail2')}>
              Iphone 13 Pro Max 128gb
            </Aparelhos>

            <Aparelhos img={require('../../assets/2.jpg')}cost="R$4199,00" onClick={()=> navigation.navigate('Detail3')}>
              Iphone 14 128gb
            </Aparelhos>

          </View>

          <View style={{ flexDirection:'row', justifyContent: 'space-around'}}>

            <Aparelhos img={require('../../assets/9.jpg')}cost="R$5790,00" onClick={()=> navigation.navigate('Detail4')}>
              Iphone 14 Pro 128gb
            </Aparelhos>

            <Aparelhos img={require('../../assets/5.png')}cost="R$9790,00" onClick={()=> navigation.navigate('Detail5')}>
              Iphone 16 Pro Max 128gb
            </Aparelhos>

            <Aparelhos img={require('../../assets/4.png')}cost="R$5990,00" onClick={()=> navigation.navigate('Detail6')}>
              Iphone 16 128gb
            </Aparelhos>

          </View>


          <View style={{ flexDirection:'row', justifyContent: 'space-around'}}>

            <Aparelhos img={require('../../assets/3.jpg')}cost="R$4699,00" onClick={()=> navigation.navigate('Detail7')}>
              Iphone 15 128gb
            </Aparelhos>

            <Aparelhos img={require('../../assets/6.jpg')}cost="R$6990,00" onClick={()=> navigation.navigate('Detail8')}>
              Iphone 15 Pro Max 128gb
            </Aparelhos>

            <Aparelhos img={require('../../assets/8.jpg')}cost="R$3290,00" onClick={()=> navigation.navigate('Detail9')}>
              Iphone 12 128gb
            </Aparelhos>

          </View>

        </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 0,
  },
  image:{
    marginTop: 20,
    height: 260,
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    marginTop: 10,
  },
  text:{
    fontSize: 26,
    marginHorizontal:'1%',
    textAlign:'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 3,
    marginTop: -30,
  },

});