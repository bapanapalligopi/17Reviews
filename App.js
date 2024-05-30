import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Ionicons from '@expo/vector-icons/Ionicons'
import VectorIcon from 'react-native-vector-icons/FontAwesome'
import TodayMovies from './components/TodayMovies';
import MovieReview from './components/MovieReview';
import Developer from './components/Developer';
import logo from './images/logo.jpg'
import TopRated from './components/TopRated';
import LanguageSpecificAllMovies from './components/LanguageSpecifiAllMovies';

const tab =createBottomTabNavigator();
const stack=createStackNavigator();

function HomeTabNavigation(){
  return (
    <tab.Navigator screenOptions={{
      tabBarStyle:{
        backgroundColor:"black",
        borderWidth:0,
        borderColor:"black"
      }
    }}>
      <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home" color="white" size={24} />
            ),
            tabBarActiveTintColor:"white",
            
            headerTitle: () => (
              <View><Text style={{fontWeight:"bold",color:"white",fontSize:20,}}>17Reviews</Text></View>
            ),
            headerTitleAlign:"left",
            headerStyle:{
              backgroundColor:"black"
            },
          
          }}
        />
        <tab.Screen name='Movies Today' component={TodayMovies}
        options={{tabBarIcon:()=>(<Ionicons name="film-outline" size={30} color="white"/>), tabBarActiveTintColor:"white",
        headerTitle: () => (
          <View><Text style={{fontWeight:"bold",color:"white",fontSize:20,borderColor:"black",borderWidth:0}}>Movies Today</Text></View>
        ),
        headerTitleAlign:"left",
        headerStyle:{
          backgroundColor:"black",
          borderColor:"black"
        },
      
      }}
        />
        <tab.Screen name='Search' component={TodayMovies}
        options={{tabBarIcon:()=>(<Ionicons name="search" size={30} color="white"/>), tabBarActiveTintColor:"white",
        headerTitle: () => (
          <View><Text style={{fontWeight:"bold",color:"white",fontSize:20,borderColor:"black",borderWidth:0}}>Movies Today</Text></View>
        ),
        headerTitleAlign:"left",
        headerStyle:{
          backgroundColor:"black",
          borderColor:"black"
        },
      
      }}
        />
         <tab.Screen name='Top Rated' component={TopRated}
        options={{tabBarIcon:()=>(<VectorIcon name="gratipay" size={30} color="white"/>), tabBarActiveTintColor:"white",
        headerTitle: () => (
          <View><Text style={{fontWeight:"bold",color:"white",fontSize:20,borderColor:"black",borderWidth:0}}>Top Rated Movies </Text></View>
        ),
        headerTitleAlign:"left",
        headerStyle:{
          backgroundColor:"black",
          borderColor:"black"
        },
      
      }}
        />
       
        <tab.Screen name='Developer Details' component={Developer}
        options={{tabBarIcon:()=>(<Ionicons name="person" size={30} color="white"/>), tabBarActiveTintColor:"white",
        headerTitle: () => (
          <View><Text style={{fontWeight:"bold",color:"white",fontSize:20,}}>Developer</Text></View>
        ),
        headerTitleAlign:"left",
        headerStyle:{
          backgroundColor:"black"
        },
      }
      }
        
        />
      </tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
          <stack.Navigator>
              <stack.Screen name='17 reviews' component={HomeTabNavigation} options={{headerShown:false}}/>
              <stack.Screen name="Review" component={MovieReview} options={{
                headerStyle:{
                  backgroundColor:"black",
                },
                headerTintColor:"white"
              }}/>
              <stack.Screen name='All Movies' component={LanguageSpecificAllMovies} options={{
                headerStyle:{
                  backgroundColor:"black",
                },
                headerTintColor:"white"
              }}/>
          </stack.Navigator>
    </NavigationContainer>
    );
   
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:20,
    paddingTop:50
  },
  
});
