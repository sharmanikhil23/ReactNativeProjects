import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Formik} from 'formik';

import PassLengthValidator from '../helpers/validater';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import generatePassword from '../helpers/generatePassword';

import {object, number, string} from 'yup';

// const PassLengthValidator = object({
//   length: number()
//     .required('Required')
//     .min(4, 'Must be minimum of length 4')
//     .max(16, 'Must not be max of length 16')
//     .typeError('Must be a Number'),
// });

const Form = () => {
  const [passwd, setPasswd] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  const resetValue = () => {
    setLowerCase(true);
    setUpperCase(false);
    setNumeric(false);
    setSpecialChar(false);
  };

  const resetEverThing = () => {
    setIsGenerated(false);
    setPasswd('');
    resetValue();
  };

  return (
    <View style={Styles.playArea}>
      <Text style={Styles.mainTitle}>Password Generator</Text>
      <Formik
        initialValues={{length: ''}}
        validationSchema={PassLengthValidator}
        onSubmit={values => {
          let passwd = generatePassword(
            upperCase,
            lowerCase,
            numeric,
            specialChar,
            +values.length,
          );

          setPasswd(() => passwd);
          setIsGenerated(true);
        }}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
          handleBlur,

          /* and other goodies */
        }) => (
          <View style={Styles.formStart}>
            <View style={Styles.passLengthArea}>
              <View style={Styles.passLengthAreaInner}>
                <Text style={Styles.passLengthAreaInnerText}>
                  Password Length
                </Text>
              </View>

              <TextInput
                style={Styles.passLengthInput}
                keyboardType="numeric"
                //onBlur={handleBlur('length')}
                placeholder="Ex 7"
                value={values.length}
                onChangeText={handleChange('length')}></TextInput>
            </View>
            {errors.length && <Text style={Styles.error}>{errors.length}</Text>}

            <View style={Styles.radioButton}>
              <Text style={Styles.radioButtonColor}>Lower Case</Text>
              <BouncyCheckbox
                size={25}
                fillColor="orange"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {
                  setLowerCase(lowerCase => !lowerCase);
                }}
                disableBuiltInState
                isChecked={lowerCase}
              />
            </View>

            <View style={Styles.radioButton}>
              <Text style={Styles.radioButtonColor}>Upper Case</Text>
              <BouncyCheckbox
                size={25}
                fillColor="#875F9A"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {
                  setUpperCase(upperCase => !upperCase);
                }}
                disableBuiltInState
                isChecked={upperCase}
              />
            </View>

            <View style={Styles.radioButton}>
              <Text style={Styles.radioButtonColor}>Numeric</Text>
              <BouncyCheckbox
                size={25}
                fillColor="#A87CA0"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {
                  setNumeric(numeric => !numeric);
                }}
                disableBuiltInState
                isChecked={numeric}
              />
            </View>

            <View style={Styles.radioButton}>
              <Text style={Styles.radioButtonColor}>Special Char</Text>
              <BouncyCheckbox
                size={25}
                fillColor="#19B5FE"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {
                  setSpecialChar(specialChar => !specialChar);
                }}
                disableBuiltInState
                isChecked={specialChar}
              />
            </View>
            <View style={[Styles.actionButtonsArea]}>
              <View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={[Styles.button, {backgroundColor: '#8DB255'}]}>
                  <Text style={[Styles.buttonText]}>Generate</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.button}
                  onPress={() => {
                    handleReset();
                    resetEverThing();
                  }}>
                  <Text style={Styles.buttonText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>

      {isGenerated && (
        <View style={Styles.outputArea}>
          <Text selectable={true} style={Styles.outputText}>
            {passwd}
          </Text>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  playArea: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-between',
    padding: 5,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFB3A7',
    marginVertical: 5,
  },
  formStart: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  passLengthArea: {
    marginVertical: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passLengthInput: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 15,
    paddingVertical: 2,
    paddingHorizontal: 3,
    color: '#fff',
  },
  passLengthAreaInner: {
    flex: 1,
    justifyContent: 'center',
  },
  passLengthAreaInnerText: {
    color: '#FFB3A7',
    fontSize: 20,
    fontWeight: '500',
  },
  error: {
    fontSize: 15,
    color: '#fff000',
  },
  radioButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  radioButtonColor: {
    fontSize: 20,
    color: '#FFB3A7',
  },
  actionButtonsArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    backgroundColor: '#8F1D21',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fefefe',
  },
  outputArea: {
    backgroundColor: '#fefefe',
    height: 100,
    opacity: 0.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  outputText: {
    fontSize: 20,
    color: '#F9690E',
  },
});

export default Form;
