
import { FormControl, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';

export default function InputWithIcon() {
  const gender = [
    {
      value: 'mail',
      label: 'Mail',
    },
    {
      value: 'femail',
      label: 'Femail',
    },
  ];
  const grade = [
    {
      value: 'first',
      label: '1st',
    },
    {
      value: 'secound',
      label: '2st',
    },
    {
      value: 'thrid',
      label: '3st',
    },
    {
      value: 'four',
      label: '4st',
    },
    {
      value: 'graduation',
      label: 'graduation',
    },
  ];
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {/* <FormControl variant="standard">
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <div className='d-flex row'></div>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
  
        
      </FormControl> */}
      <FormControl>
      <Box sx={{ display: 'flex', alignItems: 'center',flexWrap:'wrap',justifyContent:'center',alignContent:"center" }}>
        <TextField className='mx-3' id="fullName" label="Full Name" variant="standard" />
        <TextField className='mx-3' id="phoneNum" label="Phone Num" variant="standard" />
        {/* <TextField
          id="filled-select-currency"
          select
          label="gender"
          defaultValue="mail"
          helperText="Please select gender"
          variant="standard"
        >
          {gender.map((option) => (
            <MenuItem sx={{margin:'auto',minWidth:'42%' }} key={option.value} value={option.value} variant="standard">
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        {/* <TextField
          id="filled-select-currency"
          select
          label="Grade"
          defaultValue="graduation"
          helperText="Please select grade level"
          variant="standard"
        >
          {grade.map((option) => (
            <MenuItem sx={{margin:'auto',minWidth:'42%' }} key={option.value} value={option.value} variant="standard">
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <TextField className='mx-3' id="e-mail" type='email' label="E-mail" variant="standard" />
        <TextField className='mx-3' id="address" label="Address" variant="standard" />
        <TextField className='mx-3' id="pirthDate" label="Birth Date " variant="standard" />
        <TextField className='mx-3' id="educationLevel" label="Education Level" variant="standard" />
        <TextField className='mx-3' id="whichGrade" label="Which Grade" variant="standard" />
        <TextField className='mx-3' id="additionalinfo" label="Additional info" variant="standard" />
      </Box>
      <Button
                className='buttonGroup mt-4'
                onClick={() => { }}
                style={
                  {
                    paddingTop:'.2rem',
                    backgroundColor: "rgb(249 161 58)",
                    width: "20%"
                  }
                }
              >
                submit
              </Button>
      </FormControl>
    </Box>
  );
}