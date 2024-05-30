import React, { useState ,useEffect} from 'react'
import { View ,Text,StyleSheet,FlatList,Image,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Rating from './Rating';
const TopRated = () => {
  const BASE_URL = 'https://moviereviews-1.onrender.com';
  const [isDataLoaded,setIsDataLoaded]=useState(false);
  const [topRatedMovies,setTopRatedMovies]=useState([]);
  const navigation=useNavigation();
   const fetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/topratedmovies`);
        const data = await response.json();
        setTopRatedMovies(data);
        setIsDataLoaded(true);
    } catch (error) {
        console.log("The error is:", error);
    }
}

useEffect(() => {
    fetchData();
}, []);
  return (
    <>     
      <View style={styles.containerTMR}>
            {isDataLoaded ? (
                topRatedMovies.length > 0 ? (
                    <ScrollView>
                        {topRatedMovies.map((item, index) => (
                            <View key={index} style={styles.AllTeluguMovies}>
                                <TouchableOpacity onPress={() => navigation.navigate("Review", { movie: item })}>
                                    <Image source={{ uri: item.imageUrl }} style={styles.telugumoviePic} />
                                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:10,padding:10,}}>
                                        <Text style={{color:"white",fontWeight:"bold",fontSize:15,}}>{item.title}</Text>
                                        <Text><Rating rating={item.rating} /></Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                ) : (
                    <View style={styles.noMovies}>
                        <Text style={styles.noMoviesText}>No Movie has rating above 4.</Text>
                    </View>
                )
            ) : (
                <ActivityIndicator size='large' color='white' style={{flex:1,}} />
            )}
        </View>
    </>
  )
}

export default TopRated
const styles= StyleSheet.create({
  containerTMR:{
    height:"100%",
    flexDirection:"column",
    paddingLeft:10,
    // marginBottom:50,
    backgroundColor:"#1e1e1e"
  },
  telugumovietext:{
      fontWeight:"bold",
      fontSize:20,
      color:"white"
  },
  AllTeluguMovies:{
      marginTop:20,
      marginLeft:10,
      marginRight:10,
     
  },
  telugumoviePic:{
      width:"100%",
      height:200,
      borderRadius:10,
      marginRight:10,
      resizeMode:"cover",
  
  },
  
})