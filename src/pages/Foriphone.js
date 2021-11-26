import React, { Component } from 'react';
import {Box} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


export class Foriphone extends Component {
    render() {
        return (
            <div>
               <Box 
            px={{ xs: 50, sm: 50}}
            py={{ xs:30, sm:28}}
            bgcolor="WHITE"
            color="black"> 
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <Box spacing={5} color='inherit'>
                            <Typography color="inherit">
                                INFORMATION
                            </Typography>
                            </Box>
                        </Grid> 
                    </Grid>        
                </Container>
            </Box>
            </div>
        )
    }
}

export default Foriphone;
