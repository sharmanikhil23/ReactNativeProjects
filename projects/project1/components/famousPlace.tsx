import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let imageUrl =
  'https://images.unsplash.com/photo-1621377099913-ac1ec4848e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3135&q=80';

const FamousPlaces = () => {
  return (
    <View style={styles.flatCardArea}>
      <Text style={styles.heading}>Famous Places</Text>
      <View style={styles.famousPlace}>
        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          blurRadius={0.3}></Image>
        <View>
          <Text style={styles.locationHeading}> Golden Temple</Text>
          <Text style={styles.locationDesc}>
            The Golden Temple is an open house of worship for all people, from
            all walks of life and faiths.
          </Text>
        </View>
      </View>
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
  image: {
    width: windowWidth - 5,
    height: 200,
  },
  famousPlace: {
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 1,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  locationHeading: {
    fontSize: 30,

    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  locationDesc: {
    fontSize: 15,

    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default FamousPlaces;
