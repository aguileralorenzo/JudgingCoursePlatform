import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CssBaseline from '@mui/material/CssBaseline';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';

import Container from '@mui/material/Container';
import {Navigation} from './NavigationEnum';

function MainView (props){
    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>

            <CssBaseline />
      <Container maxWidth="l">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label={Navigation.HOME} icon={<Home />} />
              <BottomNavigationAction label={Navigation.VIDEO} icon={<VideoLibrary />} />
              <BottomNavigationAction label={Navigation.SETTINGS} icon={<Settings />} />
              <BottomNavigationAction label={Navigation.PROFILE} icon={<AccountCircle />} />
            </BottomNavigation>
          </Box>
      </Container>
      </React.Fragment>

    )
}

export default MainView