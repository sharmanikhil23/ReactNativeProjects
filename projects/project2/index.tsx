import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Form from './components/form';
import useThemeColors from './helpers/color';

const Project2 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'never'}
        style={[
          {
            backgroundColor: '#392e4a',
            flex: 1,
          },
        ]}>
        <Form></Form>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Project2;
