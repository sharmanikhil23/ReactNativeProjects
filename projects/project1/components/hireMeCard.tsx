import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';

let link =
  'https://media.licdn.com/dms/image/D5635AQGX8qyVfrsP8w/profile-framedphoto-shrink_400_400/0/1691323590871?e=1696960800&v=beta&t=qmGIJpIYHF_bpcINqQHOHrUFQvzl-oXGDknYXdgHADc';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HireMe = (): JSX.Element => {
  const openWebsite = () => {
    Linking.openURL('https://nikhil-sharma-portfolio.netlify.app/');
  };
  return (
    <View style={styles.flatCardArea}>
      <Text style={styles.heading}>Hire Me</Text>
      <View
        style={{
          width: windowWidth,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 100,
        }}>
        <Image source={{uri: link}} style={styles.image}></Image>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionHead}>Nikhil Sharma</Text>
        <Text numberOfLines={3} style={styles.descriptionDesc}>
          I'm a Software Engineer based in Ottawa, Canada. I enjoy creating
          things that live on the internet, whether that be websites, api, or
          anything in between. I have been building personal projects while
          studying at the Carleton University and I've manage to gain a decent
          amount of experience and valuable knowledge from different kinds of
          fields throughout my projects/work.
        </Text>
      </View>
      <TouchableOpacity style={styles.bottons} onPress={() => openWebsite()}>
        <Text style={styles.bottonsText}>Hire Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flatCardArea: {
    marginVertical: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CA6924',
  },
  heading: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    borderRadius: 100,
  },
  description: {
    width: '90%',
    margin: 'auto',
  },
  descriptionHead: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  descriptionDesc: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  bottons: {
    backgroundColor: '#ECF0F1',
    width: '40%',
    marginBottom: 5,
  },
  bottonsText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5,
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 5,
  },
});

export default HireMe;
