import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {IconButton} from '@material-ui/core';
import { Instagram, Twitter, CreditCard, LocalShipping } from '@material-ui/icons';
//import Link from '@material-ui/core/Link';
import UseStyles from './styles';
import { Typography } from '@material-ui/core';


const footer = () => {
    const classes = UseStyles();
    return (
        <div>
            <Box 
            px={{ xs: 1, sm: 1}}
            py={{ xs:1, sm:2}}
            bgcolor="#B1D4E0"
            color="black"> 
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={3}>
                            <Box spacing={2} color='inherit'>
                            <Typography className={classes.bar} color="inherit">
                                INFORMATION
                            </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> About Us </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> Contact Us </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> Privacy Policy </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> Term and Condition </Typography>
                            </Box>
                        </Grid> 

                        <Grid item xs={12} sm={3}>
                            <Box spacing={2} color='inherit'>
                            <Typography className={classes.bar} color="inherit">
                                SOCIAL MEDIA
                            </Typography>
                            </Box>
                            <Box>
                                <IconButton color="inherit" > 
                                    <Instagram /> 
                                    <Typography className={classes.bar}> my.Case </Typography>
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton color="inherit" > 
                                    <Twitter /> 
                                    <Typography className={classes.bar}> my.Case </Typography>
                                </IconButton>
                            </Box>
                        </Grid> 
                        
                        <Grid item xs={12} sm={3}>
                            <Box spacing={2} color='inherit'>
                            <Typography className={classes.bar} color="inherit">
                                PAYMENT AND SHIPPING
                            </Typography>
                            </Box>
                            <Box>
                            <IconButton color="inherit" > 
                                <CreditCard/> 
                                    <Typography className={classes.bar}> BCA / PayPal </Typography>
                                </IconButton>
                            </Box>
                            <Box>
                            <IconButton color="inherit" > 
                                <LocalShipping/> 
                                    <Typography className={classes.bar}> DHL / Si Cepat </Typography>
                                </IconButton>
                            </Box>
                        </Grid> 
    

                         <Grid item xs={12} sm={3}>
                            <Box spacing={2} color='inherit'>
                            <Typography className={classes.bar} color="inherit">
                                ADRESS
                            </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> Ruko Sukacita </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> Jalan Sukacita No. 80 </Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.bar}> Bandung, Indonesia </Typography>
                            </Box>
                        </Grid> 
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default footer;

