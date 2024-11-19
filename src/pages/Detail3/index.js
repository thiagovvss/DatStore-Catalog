import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Dot from '../../component/Dot';


export default function Detail3({navigation}) {

  navigation.setOptions({
    headerTitle: 'APPLE'
  })

 return (
   <ScrollView style={styles.container}>

    <Image
      source={require('../../assets/2.jpg')}
      style={styles.image}
      resizeMode='cover'
    />

    <View>

      <View style={styles.line} />

      <View opacity={0.4}>
        <Text style={[styles.title, {fontSize:35}]}> IPHONE 14 128GB </Text>
      </View>
  
      <View>
        <Text style={[styles.title, {fontSize:25}]}> R$4190,00 </Text>
      </View>

      <View style={styles.dotContainer}>
        <Dot color="#006400"/>
        <Dot color="#DAA520"/>
        <Dot color="#DC143C"/>
        <Dot color="#87CEFA"/>
      </View>

      <View style={styles.line} />

      <Text opacity={0.7} style={styles.wpp}
            onPress={
                () => {Linking.openURL('https://w.app/datstore')}
            }>
         COMPRAR 
      </Text>

      <View style={styles.line} />

      <View style={styles.textContent}>
        <Text opacity={0.4} style={styles.textTitle}>
          ESPECIFICAÇÕES
        </Text>

        <Text style={styles.textContent}>
        O Apple iPhone 14 é um dos smartphones iOS mais avançados e completos que existem em circulação. Tem um grande display de 6.1 polegadas com uma resolução de 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 14 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. 
        </Text>
      </View>

    </View>


   </ScrollView>

  

  );


}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%',
    height: 700
  },
  title:{
    paddingHorizontal: '5%',
    textAlign:'center', 
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 3,
    marginTop: 30,
    marginBottom: 20,
    margin:50
  },
  dotContainer:{
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  },
  textContent:{
    fontSize: 20,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
    textAlign: 'justify',
    
  },
  textTitle:{
    fontSize: 30,
    lineHeight: 50,
    textAlign:'center'
  },
  wpp:{
    fontSize: 30,
    textAlign:'center',
    backgroundColor: '#32CD32', width: '50%', marginLeft: '25%',
    padding: 3, 
    borderRadius: 90
  }
})