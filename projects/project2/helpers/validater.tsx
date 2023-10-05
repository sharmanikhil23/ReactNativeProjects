import React from 'react';

import {object, number, string} from 'yup';

const PassLengthValidator = object({
  length: number()
    .required('Required')
    .min(4, 'Must be minimum of length 4')
    .max(16, 'Must not be max of length 16')
    .typeError('Must be a Number'),
});

export default PassLengthValidator;
