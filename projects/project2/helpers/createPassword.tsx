const createPassword = (characters: String, passLength: number) => {
  let result = '';
  for (let i = 0; i < passLength; i++) {
    const charIndex = Math.round(Math.random() * characters.length);
    result += characters.charAt(charIndex);
  }
  return result;
};

export default createPassword;
