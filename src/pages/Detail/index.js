import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Dot from '../../component/Dot';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'APPLE'
  })

 return (
   <ScrollView style={styles.container}>

    <Image
      source={require('../../assets/1.jpg')}
      style={styles.image}
      resizeMode='cover'
    />

    <View>

      <View style={styles.line} />

      <View opacity={0.4}>
        <Text style={[styles.title, {fontSize:35}]}> IPHONE 13 128GB </Text>
      </View>
  
      <View>
        <Text style={[styles.title, {fontSize:25}]}> R$3699,00 </Text>
      </View>

      <View style={styles.dotContainer}>
        <Dot color="#FFC0CB"/>
        <Dot color="#A020F0"/>
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
        O Apple iPhone 13 é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 2532x1170 pixels. As funcionalidades oferecidas pelo Apple iPhone 13 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. 
        Respeitável a câmera de 12 megapixels que permite ao Apple iPhone 13 tirar fotos com uma resolução de 4000x3000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 7.7 milímetros, o que torna o Apple iPhone 13 realmente interessante.
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