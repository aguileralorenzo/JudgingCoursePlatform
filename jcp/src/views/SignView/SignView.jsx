import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CssBaseline from '@mui/material/CssBaseline';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import * as NavEnum from '../MainView/NavigationEnum';
import HomeView from '../HomeView/HomeView'
import VideosView from '../VideosView/VideosView'
import SettingsView from '../SettingsView/SettingsView'
import SignupView from './SignupView'
import SigninView from './Signin'



function SignView(props){
    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>
        <CssBaseline />
        <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction label={NavEnum.Navigation.SIGNUP} icon={<AccountCircle />} />
                <BottomNavigationAction label={NavEnum.Navigation.SIGNIN} icon={<AccountCircle />} />

              </BottomNavigation>
              <Container maxWidth="s">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}}  >
                    
                    {value === 1 && <SigninView /> }
                    {value === 0 && <SignupView /> }
                  </Box>
              

              </Container>
      </React.Fragment>

    )
}

export default SignView