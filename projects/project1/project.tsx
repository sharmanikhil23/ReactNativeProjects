import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';

import FlatCards from './components/flatCards';
import ElevatedCards from './components/elevatedCards';
import FamousPlaces from './components/famousPlace';
import HireMe from './components/hireMeCard';

const Project1 = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <FamousPlaces></FamousPlaces>
        <HireMe></HireMe>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Project1;
