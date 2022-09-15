import { Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';
import FlashMessage from "react-native-flash-message";

import HeadersCarousel from '../components/Headers/HeadersCarousel';
import GetStarted from '../screen/WelcomeScreen/GetStarted';
import MarkYourFav from '../screen/WelcomeScreen/MarkYourFav';
import OpenAndStart from '../screen/WelcomeScreen/OpenAndStart';
import SplashedScreen from '../screen/WelcomeScreen/SplashedScreen';
import BottomTab from '../components/BottomTab/BottomTab';
import MovieDetail from '../screen/Home/MovieDetail';
import HeadersDetail from '../components/Headers/HeadersDetail';
import FullListMovie from '../screen/Home/FullListMovie';
import HeadersFullList from '../components/Headers/HeadersFullList';
import HeadersSearch from '../components/Headers/HeadersSearch';
import Login from '../screen/Login/Login';





const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const GetStartedTab = ({name}) => {
  console.log(name, '<<<<<<<<<');
  return (
    <Tab.Navigator
      keyboardDismissMode={'auto'}
      screenOptions={{
        tabBarBounces: false,
        tabBarHideOnKeyboard: true,
        animatioEnabled: false,
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: 'transparent',
          width: '70%',
          elevation: 0,
          shadowOpacity: 0,
          position: 'absolute',
          bottom: 77,
        },
        animatioEnabled: false,
        lazy: true,
        // tabBarLabelStyle: { ...globalStyle.fontWhite14, fontWeight: 'bold' },
      }}>
      <Tab.Screen
        name="welcome"
        component={GetStarted}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <View style={styles.indicatorScreenActive} />
            ) : (
              <View style={styles.indicatorScreenInActive} />
            ),
        }}
      />
      <Tab.Screen
        name="open-accept"
        component={OpenAndStart }
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <View
                style={[styles.indicatorScreenActiveOpenAcc, {left: -75}]}
              />
            ) : (
              <View
                style={
                  name === 'mark-your-fav'
                    ? [styles.indicatorScreenInActive, {left: -75}]
                    : [styles.indicatorScreenInActive, {left: -45}]
                }
              />
            ),
        }}
      />
      <Tab.Screen
        name="mark-your-fav"
        component={MarkYourFav}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <View style={[styles.indicatorScreenActive, {left: -150}]} />
            ) : (
              <View style={[styles.indicatorScreenInActive, {left: -120}]} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};


export class Route extends Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splashed">
            <React.Fragment>
              <Stack.Screen
                component={SplashedScreen}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="splashed"
              />
              <Stack.Screen
                component={Login}
                options={{
                  // title: null,
                  cardStyle: {backgroundColor: 'white'},
                  headerTransparent: true,
                  // headerShown: false,
                  header: HeadersSearch,
                }}
                name="login"
              />
              <Stack.Screen
                options={{
                  header: HeadersCarousel,
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                }}
                name="get-started">
                {props => (
                  <GetStartedTab
                    {...props}
                    name={this.props.global.carouselName}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="home"
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}>
                {props => (
                  <BottomTab
                    {...props}
                    VisibilityTab={this.props.global?.hideTab}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen
                component={MovieDetail}
                options={{
                  // title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  // headerShown: false,
                  header: HeadersDetail,
                }}
                name="movie-detail"
              />
              <Stack.Screen
                component={FullListMovie}
                options={{
                  // title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  // headerShown: false,
                  header: HeadersFullList,
                }}
                name="full-list"
              />
            </React.Fragment>
          </Stack.Navigator>
          <FlashMessage position="top" />
        </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    global: state.global,
  });
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Route);

const styles = StyleSheet.create({
    indicatorScreenActive: {
      width: 42,
      height: 11,
      backgroundColor: '#FAFAFC',
      borderRadius: 15,
    },
    indicatorScreenActiveOpenAcc: {
      width: 42,
      height: 11,
      backgroundColor: '#b1060f',
      borderRadius: 15,
    },
    indicatorScreenInActive: {
      width: 11,
      height: 11,
      borderRadius: 100,
      backgroundColor: '#b1060f',
    },
    iconWrapper: {
      paddingTop: 10,
      // paddingBottom: 8,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 10,
    },
  });