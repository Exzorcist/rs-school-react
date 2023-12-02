import * as yup from 'yup';
import countries from '../../json/countries.json';

const formSchema = yup.object().shape({
  terms: yup
    .boolean()
    .required('You must agree to the terms and conditions')
    .transform((value) => (value === 'on' ? true : value)),

  country: yup
    .string()
    .required('Country is required')
    .oneOf(
      countries.map((country) => country.name),
      'Invalid country'
    ),

  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),

  password: yup
    .string()
    .required('Password is required')
    .test('contains-number', 'Password must contain at least 1 number', (value) =>
      /\d/.test(value || '')
    )
    .test('contains-uppercase', 'Password must contain at least 1 uppercase letter', (value) =>
      /[A-Z]/.test(value || '')
    )
    .test('contains-lowercase', 'Password must contain at least 1 lowercase letter', (value) =>
      /[a-z]/.test(value || '')
    )
    .test(
      'contains-special-character',
      'Password must contain at least 1 special character',
      (value) => /[!@#$%^&*]/.test(value || '')
    )
    .test(
      'has-min-length',
      'Password must be at least 8 characters long',
      (value) => (value || '').length >= 8
    ),

  email: yup.string().email('Invalid email format').required('Email is required'),

  age: yup
    .number()
    .typeError('Age is required')
    .integer('Age must be an integer')
    .min(1, 'Age must be at least 1 year')
    .max(120, 'Age must be at most 120 years'),

  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Name must not contain numbers')
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),

  image64: yup
    .string()
    .required('Image is required')
    .test('fileSize', 'File size is too large, max size 2Mb', (value) => {
      if (!value) return true;

      const fileSize = (value.length * 3) / 4 - 2;
      const maxSizeInBytes = 1024 * 1024 * 2; // 2MB
      return fileSize <= maxSizeInBytes;
    })
    .test('fileType', 'Invalid file type, allow (.jpeg, .png)', (value) => {
      if (!value) return true;

      const extension = value.split(';')[0].split('/')[1];
      const allowedExtensions = ['jpeg', 'jpg', 'png'];
      return allowedExtensions.includes(extension);
    }),

  gender: yup.string().required('Gender is required'),
});

export default formSchema;
