import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

import Chip from '@mui/material/Chip';
import * as NavEnum from '../MainView/NavigationEnum';
import { Container } from '@mui/material';

function VideosView (props){
    const [value, setValue] = React.useState(0);


    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }

    return (
<Container maxWidth="m">
                    <Chip label={NavEnum.NavigationLabel[props.value]} style={{margin: '50px'}} />
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

              {generate(
      <ListItem>
      <ListItemAvatar>
        <Avatar>
          <SlowMotionVideoIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={"Vidéo "} secondary="July 20, 2014" />
    </ListItem>
              )}
      
    </List>
    </Container>

    )
}

export default VideosView