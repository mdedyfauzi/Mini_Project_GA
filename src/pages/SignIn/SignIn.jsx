import { useState } from 'react';
import axios from 'axios';
import InputText from '../../components/InputText/InputText';
import InputPassword from '../../components/InputPassword/InputPassword';
import ButtonLog from '../../components/ButtonLog/ButtonLog';
import { Typography, FormHelperText } from '@mui/material';
import './signIn.css';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errorResponse, setErrorResponse] = useState({
    message:'',
    response:false
  });

  const postApi = async () => {
    await axios
      .post('https://timcevent.herokuapp.com/users/signin', {
        email:values.email,
        password:values.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        localStorage.isAuthenticated = true;
        window.location.href = '/'
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        setErrorResponse({message : 'Invalid email and password combination'})
      });
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
          <Typography 
          variant="h1"
          sx={{fontStyle: 'Bold',fontSize: '40px', textAlign: 'center'}}
          >
            Welcome back !
            <FormHelperText
              error={errorResponse.message !== ""}
              sx={{fontSize: '20px', textAlign: 'center', visibility: (errorResponse.message === "" ? 'hidden' : 'visible')}}
            >{errorResponse.message}
            </FormHelperText>
          </Typography>
          <form
            action="/" 
            method="POST" 
            onSubmit={(e) => 
              { 
                e.preventDefault(); 
                postApi();
              }}
          >
          <InputText 
              name='email'
              text="Email"
              error={errorResponse.response}
              data={values.email} 
              changeHandler={changeValue}
              />
            <InputPassword 
              name='password'
              text="Password" 
              error={errorResponse.response}
              data={values.password} 
              changeHandler={changeValue} 
              />
          <ButtonLog text="Sign In"/>
          </form>
          <p className="help">Forgot Password?</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;

