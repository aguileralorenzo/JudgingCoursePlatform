import * as React from 'react';

import Chip from '@mui/material/Chip';
import * as NavEnum from '../MainView/NavigationEnum';

function ProfileView (props){

    return (
            <React.Fragment>

                    <Chip label={NavEnum.NavigationLabel[props.value]} style={{margin: '50px'}} />

            </React.Fragment>

    )
}

export default ProfileView