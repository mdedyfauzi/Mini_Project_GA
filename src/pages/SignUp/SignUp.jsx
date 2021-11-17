import { FormControl } from '@mui/material';
import { useState } from 'react';
import InputText from '../../components/InputText/InputText';
import InputPassword from '../../components/InputPassword/InputPassword';
import ButtonLog from '../../components/ButtonLog/ButtonLog';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './signUp.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState();
  console.log(firstName);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <h1>Join us!</h1>
          <form
            action="/" 
            method="POST" 
            onSubmit={(e) => 
              { 
                e.preventDefault(); 
                alert('Submitted form!'); 
              }}
          >
            <InputText text="First Name" data={firstName} setData={setFirstName} errorMessage="This field is required"/>
            <InputText text="Last Name" />
            <InputText text="Email" />
            <InputPassword text="Password" />
            <InputPassword text="Confirm Password" />
            <ButtonLog text="Sign Up" />
            </form>
          <p className="help">Having issue when signup?</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
