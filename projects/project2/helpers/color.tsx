import {useColorScheme} from 'react-native';
const Colors = {
  light: {
    background: 'white',
    text: 'black',
  },
  dark: {
    background: 'black',
    text: 'white',
  },
};

const useThemeColors = () => {
  let colorScheme = useColorScheme();
  if (colorScheme === null || colorScheme === undefined) {
    colorScheme = 'light';
  }
  const colors = Colors[colorScheme];
  return colors;
};

export default useThemeColors;
