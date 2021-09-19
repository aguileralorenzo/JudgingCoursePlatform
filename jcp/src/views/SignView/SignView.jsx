import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import * as NavEnum from '../MainView/NavigationEnum';
import SignupView from './SignupView'
import SigninView from './Signin'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Gym1 from '../../img/gym1.jpeg';
import Gym2 from '../../img/gym2.jpg';
import Gym3 from '../../img/gym3.jpg';
import Gym4 from '../../img/gym10.jpg';
import Gym5 from '../../img/gym5.jpg';
import Gym6 from '../../img/gym6.jpeg';
import Gym7 from '../../img/gym6.jpg';
import Gym8 from '../../img/gym7.jpg';
import Gym9 from '../../img/gym8.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function SignView(props) {
  const [value, setValue] = React.useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  let imgArr = [Gym1, Gym5, Gym2, Gym3, Gym6, Gym9, Gym8, Gym7, Gym4]

  return (
    <React.Fragment>
      <Grid container spacing={2} style={{ background: "linear-gradient(#73a6ca, white)" }}>
        <Box sx={{ height: '80vh' }} />

        <Grid item xs>
          <Box sx={{ height: '100vh' }} >
            <Grid container spacing={2} style={{ background: "linear-gradient(#73a6ca, white)" }}>
              <Box sx={{ height: '100vh' }} />

              <Grid item md={2}>
              </Grid>
              <Grid item md={8}>
                <Stack spacing={4} style={{ marginTop: "10vh" }}>
                  <span style={{ textAlign: "center", letterSpacing: 1.2, fontSize: '1.5em' }}>
                    {"fcsjgam".toUpperCase()}
                  </span>
                  <span style={{ textAlign: "center", fontSize: '1.1em' }}>
                    Progressez en toute tranquilité
            </span>
                  <ImageList sx={{ width: "53vh", height: "53vh" }} cols={3} rowHeight={164}>
                    {imgArr.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={item}
                          loading="lazy"
                          height={50}
                          width={50}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Stack>
              </Grid>
              <Grid item md={2}>
              </Grid>
            </Grid>

          </Box>

        </Grid>
        <Divider orientation="vertical" flexItem>

        </Divider>
        {/* ee8b7b / 73a6ca / palevioletred  */}
        <Grid item xs style={{ background: "linear-gradient(#73a6ca, white)" }}>
          <Stack spacing={2}>
            <Grid container spacing={4}>
              <Grid item md={4}>
                <Box sx={{ height: '5vh' }} />

              </Grid>
              <Grid item md={4}>
                <Box sx={{ height: '5vh' }} />

              </Grid>
              <Grid item md={4}>
                <Box sx={{ height: '5vh' }} />

              </Grid>
            </Grid>

            {/* <CssBaseline /> */}
            {/* <div style={{backgroundColor:"white", borderRadius: 20}}> */}
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{ padding: "12px", marginTop: "100px", backgroundColor: "transparent" }}
            >
              <BottomNavigationAction label={NavEnum.Navigation.SIGNIN} icon={<AccountCircle />} />
              <BottomNavigationAction label={NavEnum.Navigation.SIGNUP} icon={<AccountCircle />} />

            </BottomNavigation>

            <Container maxWidth="s" style={{ margin: "8px" }}>
              <Box sx={{ height: '50vh' }}  >

                {value === 0 && <SigninView />}
                {value === 1 && <SignupView />}
              </Box>


            </Container>
            {/* </div> */}
            <div />

          </Stack>
        </Grid>
      </Grid>

    </React.Fragment>

  )
}

export default SignView