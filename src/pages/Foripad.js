import React, { Component } from 'react'
import { DropdownIpad, DropdownIphone } from '../components'
import { People } from '@material-ui/icons';
import { IconButton, Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export class foripad extends Component {
    render() {
        return (
            <div>
                Ini halaman foripad
                <IconButton color="inherit"> People </IconButton>
                <DropdownIpad />
                <DropdownIphone />
            </div>
        )
    }
}

export default foripad
