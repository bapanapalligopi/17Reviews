import {View,Text,StyleSheet,FlatList,Image,Dimensions,ScrollView} from 'react-native'
import movie3 from '../images/movie3.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import Rating from './Rating';
import AccordionItem from './AccordionItem';
import { useRoute } from '@react-navigation/native';

export default function MovieReview(){
    const route=useRoute();
    const {movie}= route.params;
    return(
            <ScrollView>
                <View style={styles.container}>
                <View style={styles.brandInfo}><Text style={styles.brandInfoText}>Hello,Welcome to 17Reviews</Text></View>
                <View style={styles.reviewContainer}>
                    <Image source={{ uri: movie.imageUrl }} style={styles.movieImage}/>
                    {/* <View style={styles.overlay}>
                       
                        <View style={styles.rating}><Rating rating={4}/></View>
                        <View><Text style={styles.view}>👁️121234567890</Text></View>
                    </View> */}
                </View>
                <View style={styles.NameContainer}>
                    <View><Text style={styles.NameLabel}>Movie Name: </Text></View>
                    <View><Text style={styles.NameValue}>{movie.title}.</Text></View>
                </View>

                <View style={styles.NameContainer}>
                    <View><Text style={styles.NameLabel}>Director Name: </Text></View>
                    <View><Text style={styles.NameValue}>{movie.director}.</Text></View>
                </View>
                <View style={styles.NameContainer}>
                    <View><Text style={styles.NameLabel}>Release date: </Text></View>
                    <View><Text style={styles.NameValue}>{movie.releaseDate}.</Text></View>
                </View>
                <View style={styles.NameContainer}>
                    <View><Text style={styles.NameLabel}>Genre: </Text></View>
                    <View><Text style={styles.NameValue}>{movie.genre}.</Text></View>
                </View>
                <View style={styles.NameContainer}>
                    <View><Text style={styles.NameLabel}>Rating: </Text></View>
                    <View style={styles.rating}><Rating rating={movie.rating}/></View>
                </View>
                <View style={styles.NameContainer}>
                    <View><Text style={styles.NameLabel}>Duration: </Text></View>
                    <View><Text style={styles.NameValue}>{movie.duration} Minutes.</Text></View>
                </View>
                <View style={styles.NameContainerStory}>
                    <View><Text style={styles.NameLabelStory}>Story</Text></View>
                    <View><Text style={styles.NameValue}>{movie.story}.</Text></View>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Producers">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.producers}</Text>
                 
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Cast">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.cast}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Cinematographer">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.cinematographer}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Editor">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.editor}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Review">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.reviewDescription}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Plus Points">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.plusPoints}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Minus Points">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.minusPoints}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Technical Aspects">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.technicalAssets}</Text>
                  </AccordionItem>
                </View>
                <View style={styles.NameContainer}>
                  <AccordionItem title="Music">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.musicDirector}</Text>
                  </AccordionItem>
                </View>
              
                <View style={styles.NameContainer}>
                  <AccordionItem title="Verdict">
                  <Text style={{ color:"white",textAlign:"justify"}}>{movie.verdict}</Text>
                  </AccordionItem>
                </View>   
            </View>
            </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1e1e1e"
    },
    brandInfo:{
        marginTop:10,
        alignItems:"center",
       
    },
    brandInfoText:{
        fontWeight:"bold",
        fontSize:20,
        color:"white"
    },
    reviewContainer:{
        marginTop:20,
        padding:10,
    },
    movieImage:{
        width:"100%",
        height:300,
        borderRadius:10,
    },
    overlay:{
        position:"absolute",
        top:275,
        right:14, 
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        gap:20,
    },
    rating:{
        marginTop:3,
    },
    heart:{
        fontSize:20,
    },
    view:{
        fontSize:20,
        color:"white"
    },
    NameContainer:{
        padding:10,
        display:"flex",
        flexDirection:"row",
       
    },
    NameContainerStory:{
        display:"flex",
        flexDirection:"column",
        padding:10,
    }
    ,
    NameLabelStory:{
        fontWeight:"bold",
        fontSize:25,
        color:"white",
        marginBottom:15,
    },
    NameLabel:{
        fontWeight:"bold",
        fontSize:15,
        color:"white",
        
    },
    NameValue:{
        paddingRight:10,
        marginRight:20,
        fontSize:15,
        fontWeight:"400",
        textTransform:"capitalize",
        textAlign:"justify",
        color:"white",
       
        
    }
})
