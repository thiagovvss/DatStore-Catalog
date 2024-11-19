import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';



export default function Aparelhos(props) {

    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }

        return`${desc.substring(0,22)}...`;

    }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image
            source={props.img}
            style={styles.apImg}
        />

    <Text style={styles.apText}>
        {filterDesc(props.children)}
    </Text>

    <View opacity={0.4}>   
        <Text style={styles.apText}>{props.cost}</Text>
    </View> 

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:'2%',
        alignItems: 'center',
        justifyContent:'center',
    },
    apImg:{
        width: 250,
        height:230,
    },
    apText:{
        fontSize: 20,
    }
});