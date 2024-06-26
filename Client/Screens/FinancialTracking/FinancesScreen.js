import React, { useState } from 'react';
import {
  Text, SafeAreaView, StyleSheet
} from 'react-native';
import HomeHeader from '../../Components/HomeHeader';

export default function FinancesScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeHeader navigation={navigation} title={'Finances'} />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FBF5E0',
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  }
})
