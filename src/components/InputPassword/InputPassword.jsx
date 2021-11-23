import * as React from 'react';
import { IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function InputPassword({ text, name, data, changeHandler, errorMessage, error }) {
  const [toggle, setToggle] = useState({
    showPassword: false,
  });

  const response = data !== '' ? false : true;

  const handleClickShowPassword = () => {
    setToggle({ ...toggle, showPassword: !toggle.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <FormControl error={error} sx={{ marginBottom: '16px' }}>
        <InputLabel>{text}</InputLabel>
        <OutlinedInput
          type={toggle.showPassword ? 'text' : 'password'}
          label={text}
          value={data}
          name={name}
          onChange={(e) => changeHandler(e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {toggle.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={{ width: 600 }}
        />
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
}
