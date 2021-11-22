import { useState } from 'react';
import axios from 'axios';
import InputText from '../../components/InputText/InputText';
import InputPassword from '../../components/InputPassword/InputPassword';
import ButtonLog from '../../components/ButtonLog/ButtonLog';
import './signUp.css';

const SignUp = () => {
  const [values, setValues] = useState({
    firstName :'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword: ''
  });

  const [errorResponse, setErrorResponse] = useState({
    firstName :'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword: '',
    response:false
  });

  const postApi = async () => {
    await axios
      .post('https://timcevent.herokuapp.com/users/signup', {
        firstName :values.firstName,
        lastName:values.lastName,
        email:values.email,
        password:values.password,
        confirmPassword:values.confirmPassword
      })
      .then(response => {
        window.location.href = '/signin';
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        //setErrorResponse(errorResponse.response = true);
      });
  };

  /*const validate = () => {
    const firstNameValidate = (values.firstName !== errorResponse.firstName ? true : false);
    const lastNameValidate = (values.lastName !== errorResponse.lastName ? true : false );
    const emailValidate = (values.email !== errorResponse.email ? true : false );
    const passwordValidate = (values.password.length > 5 ? true : false );
    const confirmPasswordValidate = (values.confirmPassword === values.password ? true : false );

    if (
   
      firstNameValidate === true &&
      lastNameValidate === true &&
      emailValidate === true &&
      passwordValidate === true &&
      confirmPasswordValidate === true
      ){
        postApi();
      } /*else 
        {
          (firstNameValidate === false) = () => (setErrorResponse(errorResponse.firstName = 'This field is required')) ||
          (lastNameValidate === false) = () => (setErrorResponse(errorResponse.lastName = 'This field is required')) ||
          (emailValidate === false) = () => (setErrorResponse(errorResponse.email= 'Email is invalid');
          setErrorResponse(passwordValidate === false,errorResponse.password = 'Password must be at least 6 characters'
          );
          setErrorResponse(confirmPasswordValidate === false,errorResponse.confirmPassword = 'Confirmation password is not the same as the password'
          );
      }
    }*/
  
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
            onSubmit={(e) => 
              { 
                e.preventDefault();
                //validate();
                postApi();
              }}
          >
            <InputText 
              name='firstName'
              text='First Name'
              error={errorResponse.response}
              data={values.firstName} 
              changeHandler={changeValue} 
              errorMessage={errorResponse.firstName}
              />
            <InputText 
              name='lastName'
              text='Last Name'
              error={errorResponse.response}
              data={values.lastName} 
              changeHandler={changeValue} 
              errorMessage={errorResponse.lastName}
              />
            <InputText 
              name='email'
              text='Email'
              error={errorResponse.response}
              data={values.email} 
              changeHandler={changeValue}
              errorMessage={errorResponse.email}
              />
            <InputPassword 
              name='password'
              text='Password'
              error={errorResponse.response}
              data={values.password} 
              changeHandler={changeValue} 
              errorMessage={errorResponse.password}
              />
            <InputPassword 
              name='confirmPassword'
              text='Confirm Password'
              error={errorResponse.response}
              data={values.confirmPassword} 
              changeHandler={changeValue} 
              errorMessage={errorResponse.confirmPassword}
              />
            <ButtonLog text="Sign Up"/>
            </form>
          <p className="help">Having issue when signup?</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;