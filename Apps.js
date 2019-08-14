import React , {Component} from 'react';
import { View,ActivityIndicator } from 'react-native';
import { createStackNavigator ,createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SettingScreen from './screens/SettingScreen';
import DeckScreen from './screens/DeckScreen';
import MapScreen from './screens/MapScreen';
import ReviewScreen from './screens/ReviewScreen';


 class Apps extends Component{
   render(){
     const Review = createStackNavigator({
          Review : { screen : ReviewScreen },
          Setting : { screen : SettingScreen },
     })

     const Main = createBottomTabNavigator({
             Map : { screen : MapScreen },
             Deck : { screen : DeckScreen },
             Review : { screen : Review },
     })

     const MainNavigator = createBottomTabNavigator({
       Authenticate : { screen : AuthScreen },
       Welcome : { screen : WelcomeScreen },
       Main : { screen : Main },
     })

     const Nav = createAppContainer(MainNavigator);

     return (
       <View>
         <Nav />
       </View>
     );
   }
 }

export default Apps;
