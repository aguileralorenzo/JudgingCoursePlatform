import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import * as NavEnum from '../MainView/NavigationEnum';

function SignUPView() {
  const [age, setAge] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={1}>
          <Box sx={{ height: '10vh' }} />
        </Grid>
        <Grid item md={10} style={{ borderTop: "solid 0.5px #898989", borderBottom: "solid 0.5px #CACACA", marginTop: "8px" }}>
          <Stack style={{ padding: "24px", marginTop: "50px", marginBottom: "50px", backgroundColor: "white", borderRadius: 4, boxShadow: " 2px 2px 2px 0px lightgrey" }}>

            <span style={{ textAlign: "center", fontWeight: "bold", letterSpacing: 1.2, fontSize: '1.1em', marginBottom: "12px" }}>
              {NavEnum.Navigation.SIGNUP.toUpperCase()}
            </span>
            <Stack spacing={10} direction="row" style={{ padding: "12px", paddingBottom: "12px" }}>
              <div></div>
              <Stack spacing={2}>

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
                  label="Pseudonyme"

                />

                <TextField
                  id="outlined-password-input"
                  label="Mot de passe"
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

              </Stack>
              <Stack spacing={2} >

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
                  label="Club"

                />

                <TextField
                  id="outlined-password-input"
                  label="Confirmer le mot de passe"
                  placeholder="Required"
                  type="password"
                  autoComplete="current-password"
                />

                <TextField
                  id="outlined-password-input"
                  label="N° de license"
                  placeholder="RRDD.CCC.NNNNN"
                />
                <Button variant="contained">{NavEnum.Navigation.SIGNUP.toUpperCase()}</Button>
              </Stack>
            </Stack>

          </Stack>

        </Grid>
        <Grid item md={4}>
          <Box sx={{ height: '10vh' }} />

        </Grid>
      </Grid>

    </React.Fragment>

  )
}

export default SignUPView