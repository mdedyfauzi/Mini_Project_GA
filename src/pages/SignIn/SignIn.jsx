import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import InputText from '../../components/InputText/InputText';
import InputPassword from '../../components/InputPassword/InputPassword';
import ButtonLog from '../../components/ButtonLog/ButtonLog';
import { FormControl } from '@mui/material';
import './signIn.css';

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <h1>Welcome back !</h1>
          <FormControl>
            <InputText text="Email" />
            <InputPassword text="Password" />
            <ButtonLog text="Sign In" />
          </FormControl>
          <p>Forgot Password?</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
