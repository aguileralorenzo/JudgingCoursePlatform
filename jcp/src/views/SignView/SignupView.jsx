import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProfileView from '../ProfileView/ProfileView'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';

function SignUPView (props){
    const [value, setValue] = React.useState(0);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <React.Fragment>
SIGNUP
<Container maxWidth="s">

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          placeholder="Required"
          label="Nom"
        />
<TextField
          required
          id="outlined-required"
          placeholder="Required"
          label="Prénom"

        />
        <TextField
          required
          id="outlined-required"
          placeholder="Required"
          label="Pseudonyme"

        />
        <TextField
          required
          id="outlined-required"
          placeholder="Required"
          label="Club"

        />
        <TextField
          id="outlined-password-input"
          label="Mot de passe"
          placeholder="Required"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Confirmer le mot de passe"
          placeholder="Required"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-required"
          label="Email"
          placeholder="Required"
          type="mail"
        />
        <TextField
          id="outlined-password-input"
          label="N° de license"
          placeholder="RRDD.CCC.NNNNN"
        />
        

       
  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Niveau de Juge</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Niveau de Juge"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Aucun</em>
          </MenuItem>

    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>

        </Select>
      </FormControl>
      </div>
      
    </Box>
    </Container>
      </React.Fragment>

    )
}

export default SignUPView