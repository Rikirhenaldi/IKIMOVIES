
import { Text, View , StyleSheet, Dimensions, Image, Platform} from 'react-native'
import React, { Component } from 'react'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';

import Home from '../../screen/Home/Home';
import Search from '../../screen/Search/Search';
import Favorite from '../../screen/Favorite/Favorite';
import Profile from '../../screen/Profile/Profile';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Tab = createMaterialTopTabNavigator();

const BottomTab = ({VisibilityTab}) => {
    const getTabBarVisible = route => {
      const params = route.params;
      if (params) {
        if (params.tabBarVisible === false) {
          return 'none';
        }
      }
      return 'flex';
    };
    return (
      <Tab.Navigator
        tabBarPosition={'bottom'}
        keyboardDismissMode={'auto'}
        tabBarIndicator={false}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarIndicatorStyle: {backgroundColor: 'transparent'},
          tabBarIconStyle: {width: windowWidth >= 1280 || windowHeight >= 1232 ? 120: windowWidth >= 838 ? 100: 80},
          tabBarContentContainerStyle: VisibilityTab ? {height: 0} : {
            flex: 1,
            paddingBottom: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40: 20,
            paddingTop: windowWidth >= 1280 || windowHeight >= 1232 ? 8: windowWidth >= 838 ? 7:4,
            backgroundColor: '#1f1d2c'
          },
          animatioEnabled: false,
          tabBarPressColor: 'transparent',
          lazy: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: null,
            cardStyle: {backgroundColor: 'transparent'},
            headerTransparent: true,
            tabBarOptions: {
              indicatorStyle: {
                opacity: 0,
              },
            },
            tabBarIcon: ({focused}) => (
              <View style={styles.iconWrapper}>
                {focused ? (
                  <Image
                    source={require('../../assets/icon/homeActive.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      marginBottom: 6
                    }}
                  />
                ) : (
                  <Image
                  source={require('../../assets/icon/home.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      marginBottom: 6
                    }}
                  />
                )}
                <Text
                  style={{
                    color: focused ? '#e50913' : '#9092A6',
                    fontSize: windowWidth >= 1280 || windowHeight >= 1232 ? 17: windowWidth >= 838 ? 15: 11,
                    fontFamily: 'Manrope-Bold',
                    fontWeight: '500',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={({route}) => ({
            title: null,
            cardStyle: {backgroundColor: 'transparent'},
            headerTransparent: true,
            tabBarStyle: {
              display: getTabBarVisible(route),
            },
            tabBarIcon: ({focused}) => (
              <View style={styles.iconWrapper}>
                {focused ? (
                  <Image
                  source={require('../../assets/icon/searchActive.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                    }}
                  />
                ) : (
                  <Image
                  source={require('../../assets/icon/search.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                    }}
                  />
                )}
                <Text
                  style={{
                    color: focused ? '#e50913' : '#9092A6',
                    fontSize: windowWidth >= 1280 || windowHeight >= 1232 ? 17: windowWidth >= 838 ? 15: 11,
                    fontFamily: 'Manrope-Bold',
                    fontWeight: '500',
                  }}>
                  Search
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            title: null,
            cardStyle: {backgroundColor: 'transparent'},
            headerTransparent: true,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconWrapper}>
                {focused ? (
                  <Image
                  source={require('../../assets/icon/favoriteActive.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                    }}
                  />
                ) : (
                  <Image
                  source={require('../../assets/icon/favorite.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:25,
                    }}
                  />
                )}
                <Text
                  style={{
                    color: focused ? '#e50913' : '#9092A6',
                    fontSize: windowWidth >= 1280 || windowHeight >= 1232 ? 17: windowWidth >= 838 ? 15 : 11,
                    fontFamily: 'Manrope-Bold',
                    fontWeight: '500',
                  }}>
                  Favorite
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: null,
            cardStyle: {backgroundColor: 'transparent'},
            headerTransparent: true,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconWrapper}>
                {focused ? (
                  <Image
                  source={require('../../assets/icon/userActive.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      marginBottom: 4
                    }}
                  />
                ) : (
                  <Image
                  source={require('../../assets/icon/user.png')}
                    resizeMode="contain"
                    style={{
                      width: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      height: windowWidth >= 1280 || windowHeight >= 1232 ? 50: windowWidth >= 838 ? 40:20,
                      marginBottom: 4
                    }}
                  />
                )}
                <Text
                  style={{
                    color: focused ? '#e50913' : '#9092A6',
                    fontSize: windowWidth >= 1280 || windowHeight >= 1232 ? 17: windowWidth >= 838 ? 15: 11,
                    fontFamily: 'Manrope-Bold',
                    fontWeight: '500',
                  }}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    );
  };

const mapStateToProps = state => ({
    auth: state.auth,
    global: state.global,
  });
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);

const styles = StyleSheet.create({
  iconWrapper: {
    paddingTop: 10,
    // paddingBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  labelWrapper: {
    // paddingBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    // paddingVertical: 10,
    // backgroundColor: 'yellow',
  },
});