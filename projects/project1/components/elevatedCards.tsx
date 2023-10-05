import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ElevatedCards = (): JSX.Element => {
  return (
    <View style={[styles.flatCardArea]}>
      <Text style={[styles.heading]}>Elevated Cards</Text>
      <ScrollView horizontal style={[styles.flatCards]}>
        <View style={[styles.flatCard, styles.first]}>
          <Text style={[styles.flatCardText]}>Red</Text>
        </View>
        <View style={[styles.flatCard, styles.second]}>
          <Text style={[styles.flatCardText]}>Green</Text>
        </View>
        <View style={[styles.flatCard, styles.third]}>
          <Text style={[styles.flatCardText]}>Blue</Text>
        </View>
        <View style={[styles.flatCard, styles.third]}>
          <Text style={[styles.flatCardText]}>Blue</Text>
        </View>
        <View style={[styles.flatCard, styles.third]}>
          <Text style={[styles.flatCardText]}>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flatCardArea: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginVertical: 10,
    padding: 5,
  },
  flatCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginHorizontal: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'white',
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  first: {backgroundColor: 'red'},
  second: {backgroundColor: 'green'},
  third: {backgroundColor: 'blue'},
  flatCards: {
    flex: 1,
  },
  flatCardText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default ElevatedCards;
