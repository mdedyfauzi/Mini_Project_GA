import { OutlinedInput, FormControl, InputLabel, FormHelperText } from '@mui/material';

const InputText = ({ text, name, data, changeHandler, errorMessage, error }) => {
  console.log(data)
  const response = (data !== '' ? false : true );
  return (
    <>
      <FormControl  
        error={error}
        sx={{ 
          marginBottom: '16px', 
          width: 600 }}>
        <InputLabel>{text}</InputLabel>
        <OutlinedInput
          label={text} 
          value={data} 
          name={name}
          onChange={(e) => changeHandler(e)} 
          fullWidth 
          />
          <FormHelperText >{errorMessage}
          </FormHelperText>
      </FormControl>
    </>
  );
};

export default InputText;
