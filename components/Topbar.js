import {View,Image,StyleSheet,Text,TextInput} from 'react-native'
import logo from '../images/logo.jpg'
import { useState } from 'react';
export default function Topbar(){
    const [serachInput,setSearchInput]=useState("");
   return(
    <View style={styles.containerTopbar}>
       <View style={{flex:1,flexDirection:"row"}}>
       <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.brand}>Reviews</Text>
       </View>
       <View>
        <TextInput placeholder='Enter Movie name'   onChangeText={setSearchInput} style={styles.serachInputStyle} cursorColor="black" placeholderTextColor="black"/>
       </View>
    </View>
   );
}
const styles=StyleSheet.create({
    containerTopbar:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:10,
      paddingRight:10,
     
    },
    logo:{
        width:50,
        height:40,
        borderRadius:10,
    },
    brand:{
        marginTop:5,
        fontWeight:"bold",
        fontSize:20,
        color:"black"
    },
    serachInputStyle:{
    width:200,
    height:40,
    borderRadius:10,
    padding:10,
    borderWidth:2,
    borderStyle:"solid",
    borderColor:"black",
    color:"black"

    }
  })