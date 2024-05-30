import {View,Text,StyleSheet,ScrollView,RefreshControl} from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { LatestMovies } from './LatestMovies';
import { Movies } from './Movies';
export default function Home(){
  
    

    return (
        <View style={styles.containerHome}>            
            <ScrollView >
            {/* <Topbar/> */}
            <LatestMovies/>
            <Movies language="Telugu"/>
            <Movies language="Tamil"/>
            <Movies language="Hindi"/>
            <Movies language="Malayalam"/>
            <Movies language="Kannada"/>
            <Movies language="English"/>
            <View style={{marginTop:20,marginBottom:20,flex:1}}><Text style={{color:"white",textAlign:"center"}}>No More Movies</Text></View>
            </ScrollView>

        </View>
    );
}
const styles=StyleSheet.create({
  containerHome:{
    flex:1,
    paddingTop:0,
    backgroundColor:"#1e1e1e"
    
    
  }
})