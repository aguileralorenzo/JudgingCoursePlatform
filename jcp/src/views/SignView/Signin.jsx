import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as NavEnum from '../MainView/NavigationEnum';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

function SigninView() {

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Box sx={{ height: '10vh' }} />
        </Grid>
        <Grid item md={4}>
          <Divider width={250} center />

          <Stack spacing={3} style={{ padding: "24px", marginTop: "50px", marginBottom: "50px", backgroundColor: "white", borderRadius: 4, boxShadow: " 2px 2px 2px 0px lightgrey" }}>
            <span style={{ textAlign: "center", fontWeight: "bold", letterSpacing: 1.2, fontSize: '1.1em' }}>
              {NavEnum.Navigation.SIGNIN.toUpperCase()}
            </span>
            <TextField
              required
              id="outlined-required"
              placeholder="Required"
              label="Pseudonyme ou email"

            />
            <TextField
              id="outlined-password-input"
              label="Password"
              placeholder="Required"
              type="password"
              autoComplete="current-password"

            />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </FormGroup>
            <Button variant="contained" style={{ marginTop: "8px" }}>{NavEnum.Navigation.SIGNIN.toUpperCase()}</Button>

          </Stack>
          <Divider width={250} center />

        </Grid>
        <Grid item md={4}>
          <Box sx={{ bgcolor: 'none', height: '10vh' }} />
        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default SigninView