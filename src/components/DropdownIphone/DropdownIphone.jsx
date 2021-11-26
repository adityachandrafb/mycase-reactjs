import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Typography} from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import UseStyles from './styles';

//Dropdown For Iphone
export default function DropdownIphone () {
  const classes = UseStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
          <Typography className={classes.bar}> TYPE IPHONE </Typography>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close} containerElement={<Link to="/myRoute" />} >
            <Typography className={classes.bar}> Iphone 13 Pro Max </Typography>
              </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> Iphone 13 Pro </Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> Iphone 13 Mini </Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> Iphone 12 Pro Max </Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> Iphone 12 Pro </Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Typography className={classes.bar}> Iphone 12 Mini </Typography>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


