import React, { useState ,useEffect} from 'react'
import { View ,Text,StyleSheet,FlatList,Image,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native'
import Latestmovies from '../json/Latestmovies';
import Topbar from './Topbar';
import { useNavigation } from '@react-navigation/native';
import Rating from './Rating';
const TodayMovies = () => {
  const BASE_URL = 'https://moviereviews-1.onrender.com';
  const [isDataLoaded,setIsDataLoaded]=useState(false);

  const [todayMovies,setTodayMovies]=useState([]);
   const navigation=useNavigation();
   const fetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/moviestoday`);
        const data = await response.json();
        
        setTodayMovies(data);
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
    {/* <Text style={styles.telugumovietext}>Movies Release Today</Text> */}
    {isDataLoaded ? (
        todayMovies.length > 0 ? (
            <ScrollView>
                {todayMovies.map((item, index) => (
                    <View key={index} style={styles.AllTeluguMovies}>
                        <TouchableOpacity onPress={() => navigation.navigate("Review", { movie: item })}>
                            <Image source={{ uri: item.imageUrl }} style={styles.telugumoviePic} />
                            <View style={{ display: "flex", flexDirection: "row", marginTop: 10, justifyContent: "space-between", padding: 10 }}>
                                <Text style={{ color: "white", alignItems: "center", fontWeight: "bold", textAlign: "center", fontSize: 15 }}>{item.title}</Text>
                                <Text><Rating rating={item.rating} /></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        ) : (
            <View style={{ display: "flex", flex: 1, justifyContent: "center", textAlign: "center", alignItems: "center", alignContent: "center" }}>
                <Text style={{ color: "white" }}>No Movie Release Today. We found No Data About Today Movies.</Text>
            </View>
        )
    ) : (
        <ActivityIndicator size='large' color="white" style={{flex:1,alignItems:"center"}}/>
    )}
</View>

    </>
  )
}

export default TodayMovies
const styles= StyleSheet.create({
  containerTMR:{
    height:"100%",
    flexDirection:"column",
    paddingLeft:10,
    // marginBottom:50,
    backgroundColor:"#1e1e1e"
  },
  defaultData:{
      display:"flex",
      flexDirection:"column",
      padding:20,
  },
  defaultDataImages:{
    width:"100%", 
    backgroundColor:"black",
    height:200,
    borderRadius:10,
    resizeMode:"cover",
    padding:10,
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