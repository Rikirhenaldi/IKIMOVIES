import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FloatingButton from '../Button/FloatingButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeadersCarousel = () => {
  const global = useSelector(store => store.global);
  const navigation = useNavigation();
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.rowWrapper}>
          <Image
            source={
              global.carouselName === 'open-accept'
                ? require('../../assets/icon/logo.png')
                : require('../../assets/icon/logo2.png')
            }
            style={styles.image}
          />
          <Text
            style={
              global.carouselName === 'open-accept' ? styles.text2 : styles.text
            }>
            IKI MOVIES
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('mark-your-fav')}
          style={styles.button}>
          <Text style={styles.textButton}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.floating}>
        <FloatingButton
          color={global.carouselName === 'open-accept' ? 'white' : 'red'}
          route={
            global.carouselName === 'get-started'
              ? 'open-accept'
              : global.carouselName === 'open-accept'
              ? 'mark-your-fav'
              : 'login'
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    top: Platform.OS === 'ios' ? 57 : 57,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  image: {
    width: 25,
    height: 25,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'FugazOne-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 7,
    marginTop: 2
  },
  text2: {
    fontFamily: 'FugazOne-Regular',
    fontSize: 16,
    color: '#b1060f',
    marginLeft: 7,
    marginTop: 2
  },
  textButton: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#b1060f',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -4,
  },
  floating: {
    top: windowHeight - 155,
    position: 'absolute',
    right: 30,
  },
});

export default HeadersCarousel;
