import React from 'react';

import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

import {Name as data} from './data';

const DilpreetProject = (): JSX.Element => {
  return (
    <View style={[Styles.start]}>
      <SafeAreaView style={[Styles.start]}>
        {/* Header View */}
        <View style={[Styles.header]}>
          <Text style={[Styles.headerText]}>Customers</Text>
        </View>
        {/* Body View */}
        <View style={[Styles.body]}>
          <ScrollView>
            {data.map((value, index) => {
              return (
                <Text
                  key={index}
                  style={Styles.scrollText}>{`${value.name}`}</Text>
              );
            })}
          </ScrollView>
        </View>
        {/* Footer View */}
        <View style={[Styles.footer, Styles.header]}>
          <Text style={[Styles.headerText]}>Footer</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const Styles = StyleSheet.create({
  start: {
    flex: 1,
    backgroundColor: '#eff0f3',
  },
  header: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 8,
  },
  scrollText: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.1,
    fontSize: 20,
    padding: 4,
  },
});

export default DilpreetProject;
