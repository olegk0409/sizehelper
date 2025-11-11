import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Gender } from '../utils/types';

const layoutImages = {
  'Women': require('@/assets/images/layouts/woman.png'),
  'Men': require('@/assets/images/layouts/man.png'),
  'Kids': require('@/assets/images/layouts/kid.png'),
}

const layoutAspect = {
  'Women': 190 / 225,
  'Men': 205 / 225,
  'Kids': 168 / 225,
}

const screenWidth = Dimensions.get('window').width;

type Props = {
  gender: Gender;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}

const HumanLayout: React.FC<Props> = ({gender, a, b, c, d, e}) => {
  const imageSize = {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4 / layoutAspect[gender]
  }

  const renderPage = () => {
    switch (gender) {
      case 'Women':
        return (
          <View style={styles.container}>
            <ImageBackground
              source={layoutImages[gender]}
              style={[styles.image, imageSize]}
            >
              <View style={{alignItems: 'flex-start', gap: 8, transform: [{translateX: '-21%'}, {translateY: '-5%'}]}}>
                <View style={styles.size}>
                  <Text style={styles.text}>{a}</Text>
                </View>

                <View style={styles.size}>
                  <Text style={styles.text}>{b}</Text>
                </View>

                <View style={styles.size}>
                  <Text style={styles.text}>{c}</Text>
                </View>

                <View style={[styles.size, {transform: [{translateY: '100%'}, {translateX: '70%'}]}]}>
                  <Text style={styles.text}>{d}</Text>
                </View>

                <View style={[styles.size, {transform: [{translateY: '-200%'}, {translateX: '440%'}]}]}>
                  <Text style={styles.text}>{e}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        )
      case 'Men':
        return (
          <View style={styles.container}>
            <ImageBackground
              source={layoutImages[gender]}
              style={[styles.image, imageSize]}
            >
              <View style={{alignItems: 'flex-start', gap: 8, transform: [{translateX: '-21%'}, {translateY: '-5%'}]}}>
                <View style={styles.size}>
                  <Text style={styles.text}>{a}</Text>
                </View>

                <View style={styles.size}>
                  <Text style={styles.text}>{b}</Text>
                </View>

                <View style={styles.size}>
                  <Text style={styles.text}>{c}</Text>
                </View>

                <View style={[styles.size, {transform: [{translateY: '50%'}, {translateX: '50%'}]}]}>
                  <Text style={styles.text}>{d}</Text>
                </View>

                <View style={[styles.size, {transform: [{translateY: '-200%'}, {translateX: '390%'}]}]}>
                  <Text style={styles.text}>{e}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        )
      case 'Kids':
        return (
          <View style={styles.container}>
            <ImageBackground
              source={layoutImages[gender]}
              style={[styles.image, imageSize]}
            >
              <View style={{alignItems: 'flex-start', gap: 8, transform: [{translateX: '-21%'}, {translateY: '100%'}]}}>
                <View style={styles.size}>
                  <Text style={styles.text}>{a}</Text>
                </View>

                <View style={[styles.size, {transform: [{translateX: '440%'}, {translateY: '-50%'}]}]}>
                  <Text style={styles.text}>{b}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        )
    }
  }
  return (
    renderPage()
  )
}

export default HumanLayout

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  image: {

  },
  size: {
    width: 40,
    height: 30,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: Colors.text
  },
})
