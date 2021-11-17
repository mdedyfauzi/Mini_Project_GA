// buat function component (InputText) dengan props terdiri dri text, data dan setData
// props text untuk menerima label dari input
// props data sebagai nilai dari value
// props setData akan menampung nilai dari value

import { OutlinedInput, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { useState } from 'react';

const InputText = ({ text ,data,setData, response, errorMessage}) => {
  //const [response, setResponse] = useState(false);
  response = (data !== '' ? false : true );
  return (
    <>
      <FormControl 
        error={response}
        sx={{ marginBottom: '2em', width: 600 }}>
        <InputLabel>{text}</InputLabel>
        <OutlinedInput
          label={text} 
          value={data} 
          onChange={((e) => setData(e.target.value))} 
          fullWidth 
          />
          <FormHelperText sx={{visibility:(response !== true ? 'hidden' : 'visible')}} >{errorMessage}</FormHelperText>
      </FormControl>
    </>
  );
};

export default InputText;
