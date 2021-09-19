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
import * as NavEnum from './NavigationEnum';
import HomeView from '../HomeView/HomeView'
import VideosView from '../VideosView/VideosView'
import SettingsView from '../SettingsView/SettingsView'
import ProfileView from '../ProfileView/ProfileView'


function MainView (props){
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
                      <BottomNavigationAction label={NavEnum.Navigation.HOME} icon={<Home />} />
                      <BottomNavigationAction label={NavEnum.Navigation.VIDEO} icon={<VideoLibrary />} />
                      <BottomNavigationAction label={NavEnum.Navigation.SETTINGS} icon={<Settings />} />
                      <BottomNavigationAction label={NavEnum.Navigation.PROFILE} icon={<AccountCircle />} />
                    </BottomNavigation>
                    <Container maxWidth="l">
                <Box sx={{ bgcolor: '#73a6ca', height: '100vh'}}  >
                    
                    {value === 0 && <HomeView value={value} /> }
                    {value === 1 && <VideosView value={value} /> }
                    {value === 2 && <SettingsView value={value} /> }
                    {value === 3 && <ProfileView value={value} /> }
                    <Chip label={NavEnum.NavigationLabel[value]} style={{margin: '50px'}} />
                  </Box>
              

              </Container>
            </React.Fragment>

    )
}

export default MainView