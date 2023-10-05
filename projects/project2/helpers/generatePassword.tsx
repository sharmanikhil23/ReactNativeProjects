import createPassword from './createPassword';

const generatePassword = (
  upperCase: boolean,
  lowerCase: boolean,
  number: boolean,
  specialChar: boolean,
  passLength: number,
) => {
  let sampleString = '';

  const upperCaseString = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
  const lowerCaseString = 'qwertyuiopasdfghjklzxcvbnm';
  const numberString = '1234567890';
  const specialCharString = '!@#$%^&*()_';

  if (upperCase) {
    sampleString += upperCaseString;
  }

  if (lowerCase) {
    sampleString += lowerCaseString;
  }

  if (numberString) {
    sampleString += number;
  }

  if (specialChar) {
    sampleString += specialCharString;
  }

  let temp = createPassword(sampleString, passLength);
  console.log(temp);
  return temp;
};

export default generatePassword;
