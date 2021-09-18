import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProfileView from '../ProfileView/ProfileView'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SigninView (props){
    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>
SIGNIN
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          required
          id="outlined-required"
          placeholder="Required"
          label="Pseudonyme"

        />
        <TextField
          id="outlined-password-input"
          label="Password"
          placeholder="Required"
          type="password"
          autoComplete="current-password"
        />
        </Box>
      </React.Fragment>

    )
}

export default SigninView