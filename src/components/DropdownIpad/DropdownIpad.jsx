import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Typography} from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import UseStyles from '../DropdownIpad/styles';

//Dropdown For IPad
export default function DropdownIpad () {
  const classes = UseStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
          <Typography className={classes.bar}> TYPE IPAD </Typography>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close} containerElement={<Link to="/myRoute" />} >
            <Typography className={classes.bar}> IPad Air 4 </Typography>
              </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> IPad M1 Pro 2021 </Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> Iphone Pro 2020 </Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> IPad Pro 2018 </Typography>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
