import TextField from '@mui/material/TextField';

const InputComment = () => {
  return (

      <TextField 
        multiline 
        placeholder="Enter your comment here"
        rows={4}
        sx=
        {{
          width: '496px',
          marginTop: '16px'
          
        }} />
    
  );
}
export default InputComment