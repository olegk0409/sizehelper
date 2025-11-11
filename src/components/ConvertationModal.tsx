import React, { SetStateAction } from 'react';
import { Modal, View, Text, StyleSheet, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import RegularButton from './RegularButton';
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import { Size } from '../utils/types';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
  fromType: Size;
  fromSize: string;
  toSize: string;
  toType: Size;
}


const ConvertationModal: React.FC<Props> = ({ visible, setVisible, fromType, fromSize, toSize, toType }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <BlurView intensity={50} style={styles.modalBackground}>
        <View style={styles.container}>
          <Text style={styles.title}>Size conversion result</Text>

          <View style={styles.middleContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>From</Text>
              <Text style={[styles.text, {color: Colors.navigationText}]}>{fromSize}</Text>
              <Text style={styles.text}>{fromType}</Text>
            </View>

            <Image source={require('@/assets/images/swap.png')} style={styles.icon} />

            <View style={styles.textContainer}>
              <Text style={styles.text}>To</Text>
              <Text style={[styles.text, {color: Colors.navigationText}]}>{toSize}</Text>
              <Text style={styles.text}>{toType}</Text>
            </View>
          </View>

          <RegularButton press={() => setVisible(false)} title="Close" />
        </View>

      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.secondary,
    width: '90%',
    padding: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    boxShadow: `0px 8px 20px 1px ${Colors.navigationText}`
  },
  title: {
    fontFamily: Fonts.title,
    fontSize: 18,
    color: Colors.text,
    marginBottom: 20,
  },
  text: {
    fontFamily: Fonts.title,
    fontSize: 16,
    color: Colors.text
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
  },
  icon: {
    width: 33,
    height: 33,
    marginHorizontal: 40,
  },
});

export default ConvertationModal;