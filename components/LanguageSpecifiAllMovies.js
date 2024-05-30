import { useRoute } from "@react-navigation/native";
import { useState ,useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { View,Text,StyleSheet ,ActivityIndicator,Image,TouchableOpacity,FlatList} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
function LanguageSpecificAllMovies(){
    const [numColumns, setNumColumns] = useState(2);
    const [isDataLoaded,setIsDataLoaded]=useState(false);
    const BASE_URL = 'https://moviereviews-1.onrender.com';
    const [LanguageMovies,setLangaugeMovies]=useState([]);
    const route=useRoute();
    const navigation=useNavigation();
    const language=route.params.Specificlanguage.toUpperCase();
    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/allmovies?lang=${language}`);
            const data = await response.json();
            setLangaugeMovies(data);
            setIsDataLoaded(true)
        } catch (error) {
            console.log("The error is:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
    //   <View><ActivityIndicator size="large" color="white"/></View>
    <View style={styles.container}>
           {isDataLoaded ? (
        LanguageMovies.length > 0 ? (
            <FlatList
           data={LanguageMovies}
           showsHorizontalScrollIndicator={false}
           renderItem={({item})=>{
               return (
                   
                       <View style={styles.AllMovies}>
                       <Image source={{ uri: item.imageUrl }} style={styles.moviePic}></Image>
                      <TouchableOpacity onPress={()=>navigation.navigate("Review",{movie:item})}>
                      <Icon name="reviews" color="green" size={50} style={{marginTop:50,}}/>
                      </TouchableOpacity>
                       </View>
               );
            }}
            keyExtractor={(item)=>item.id.toString()}
            style={{ android: { overflow: 'hidden' } }}
           
           />
        ) : (
            <View style={{ display: "flex", flex: 1, justifyContent: "center", textAlign: "center", alignItems: "center", alignContent: "center" }}>
                <Text style={{ color: "white",fontSize:30, }}>oops! No Movie Found.</Text>
            </View>
        )
    ) : (
        <ActivityIndicator size='large' color="white" style={{flex:1,alignItems:"center"}}/>
    )}
    </View>
    );
}
export default LanguageSpecificAllMovies;
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#1e1e1e",
        height:"100%"
    },
    AllMovies:{
        marginTop:20,
        padding:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    moviePic:{
        // width:150,
        width:250,
        height:150,
        borderRadius:10,
        marginRight:10,
        
    },
})