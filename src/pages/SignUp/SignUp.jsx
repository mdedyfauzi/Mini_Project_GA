import { useState } from 'react';
import axios from 'axios';
import InputText from '../../components/InputText/InputText';
import InputPassword from '../../components/InputPassword/InputPassword';
import ButtonLog from '../../components/ButtonLog/ButtonLog';
import './signUp.css';

const SignUp = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  /*const [error, setError] = useState({
    firstName :'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword: '',
    response:{
      firstName :false,
      lastName:false,
      email:false,
      password:false,
      confirmPassword: false
    }
  });*/

  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const postApi = async () => {
    await axios
      .post('https://timcevent.herokuapp.com/users/signup', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
      .then((response) => {
        window.location.href = '/signin';
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validate = () => {
    const firstNameValidate = values.firstName.length > 4;
    const lastNameValidate = values.lastName.length > 4;
    const emailValidate = values.email.length > 10;
    const passwordValidate = values.password.length > 5;
    const confirmPasswordValidate = values.confirmPassword === values.password;

    if (firstNameValidate === true && lastNameValidate === true && emailValidate === true && passwordValidate === true && confirmPasswordValidate === true) {
      postApi();
    } else {
      console.log(lastNameValidate, 'test');
      if (firstNameValidate === false) {
        setErrorFirstName('This field is required');
      }
      if (lastNameValidate === false) {
        setErrorLastName('This field is required');
      }
      if (emailValidate === false) {
        setErrorEmail('Email is invalid');
      }
      if (passwordValidate === false) {
        setErrorPassword('Password must be at least 6 characters');
      }
      if (confirmPasswordValidate === false) {
        setErrorConfirmPassword('Confirmation password is not the same as the password');
      }

      /*if(firstNameValidate === false)
          {setError(prev =>({
            ...prev,
            firstName : 'This field is required',
            response: {firstName:true}
          }))};
          if(lastNameValidate === false) 
          {setError({
            ...error,
            lastName : 'This field is required',
            response: {lastName:true}
          })};
          if(emailValidate === false)
          {setError({
            ...error,
            email: 'Email is invalid',
            response: {email:true}
          })};
          if(passwordValidate === false)
          {setError({
            ...error,
            password : 'Password must be at least 6 characters',
            response: {password:true}
          })};
          if(confirmPasswordValidate === false)
          {setError(prev =>({
            ...prev,
            confirmPassword : 'Confirmation password is not the same as the password',
            response: {confirmPassword:true}
          }))};*/
    }
  };

  const changeValue = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>Join us!</h1>
          <form
            action="/signin"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              validate();
              //postApi();
            }}
          >
            <InputText name="firstName" text="First Name" error={errorFirstName !== ''} data={values.firstName} changeHandler={changeValue} errorMessage={errorFirstName} />
            <InputText name="lastName" text="Last Name" error={errorLastName !== ''} data={values.lastName} changeHandler={changeValue} errorMessage={errorLastName} />
            <InputText name="email" text="Email" error={errorEmail !== ''} data={values.email} changeHandler={changeValue} errorMessage={errorEmail} />
            <InputPassword name="password" text="Password" error={errorPassword !== ''} data={values.password} changeHandler={changeValue} errorMessage={errorPassword} />
            <InputPassword name="confirmPassword" text="Confirm Password" error={errorConfirmPassword !== ''} data={values.confirmPassword} changeHandler={changeValue} errorMessage={errorConfirmPassword} />
            <ButtonLog text="Sign Up" />
          </form>
          <p className="help">Having issue when signup?</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
