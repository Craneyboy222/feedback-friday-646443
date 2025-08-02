import * as Yup from 'yup';

const userRegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Password is required'),
});

export { userRegistrationSchema };