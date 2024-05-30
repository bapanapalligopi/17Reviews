import {View,Text,StyleSheet,FlatList,Image,Dimensions,TouchableOpacity,ActivityIndicator,ScrollView} from 'react-native'
import Latestmovies from '../json/Latestmovies';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
export function Movies({language}){
    const BASE_URL = 'https://moviereviews-1.onrender.com';
    const [TeluguMovies,setTeluguMovies]=useState([]);
    const [isDataLoaded,setIsDataLoaded]=useState(false);

    const navigation=useNavigation();
    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/movies`);
            const data = await response.json();
            setTeluguMovies(data);
            setIsDataLoaded(true)
        } catch (error) {
            console.log("The error is:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <View style={styles.containerTMR}>
            <TouchableOpacity onPress={()=>navigation.navigate("All Movies",{Specificlanguage:language})}>
            <Text style={styles.telugumovietext}>{language} Movie Reviews  <Icon name="greater-than"color="white" size={15}/></Text>
            </TouchableOpacity>
            {isDataLoaded?
            <FlatList
             data={TeluguMovies}
             horizontal
             showsHorizontalScrollIndicator={false}
             renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate("Review",{movie:item})}>
                        <View style={styles.AllTeluguMovies}>
                        <Image source={{ uri: item.imageUrl }} style={styles.telugumoviePic}></Image>
                    </View>
                    </TouchableOpacity>
                );
             }}
             keyExtractor={(item)=>item.id.toString()}
             style={{ android: { overflow: 'hidden' } }}
            />:(
                <ScrollView horizontal={true}>
                    <View style={styles.AllTeluguMoviesDefault}>
                    <View style={styles.telugumoviePicDefault}></View>
                    <View style={styles.telugumoviePicDefault}></View>
                    <View style={styles.telugumoviePicDefault}></View>
                    <View style={styles.telugumoviePicDefault}></View>
                    <View style={styles.telugumoviePicDefault}></View>
                    </View>
                </ScrollView>
            )}
        </View>
    );
}
const styles=StyleSheet.create({
    containerTMR:{
      flexDirection:"column",
      marginTop:10,
      paddingLeft:10
    },
    telugumovietext:{
        fontWeight:"bold",
        fontSize:18,
        color:"white"
    },
    AllTeluguMovies:{
        marginTop:20,
    },
    telugumoviePic:{
        width:205,
        height:130,
        borderRadius:10,
        marginRight:10,
    },
    AllTeluguMoviesDefault:{
        display:"flex",
        flexDirection:"row",
        gap:20,
    },
    telugumoviePicDefault:{
        backgroundColor:"black",
        width:205,
        height:130,
        borderRadius:10,
        marginRight:10,
    }
  })