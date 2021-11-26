import React from 'react';
import { People, Favorite, ShoppingCart } from '@material-ui/icons';
import { Button, AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            {/* <AppBar position="fixed" className={classes.appBar2} color= 'inherit'> 
            <Toolbar> 
                <Typography variant= "h6" className={classes.title}color="inherit"> 
                    FREE SHIPPING MINIMUM PURCHASE IDR 300.000
                </Typography>
            </Toolbar> 
            </AppBar> */}

            <AppBar position="static" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        my.Case
                    </Typography>
                    <div className={classes.centrebutton} />
                    <Button component={Link} to={'/'}color="inherit">
                        <Typography className={classes.bar}> About Us </Typography>
                        
                    </Button>
                    <Button component={Link} to={'/foriphone'} color="inherit">
                    <Typography className={classes.bar}> For IPhone </Typography>
                        
                    </Button>
                    <Button component={Link} to={'/foripad'} color="inherit">
                    <Typography className={classes.bar}> For IPad </Typography>
                        
                    </Button>
                    <Button component={Link} to={'/faq'} color="inherit">
                    <Typography  className={classes.bar}> FAQ </Typography>
                       
                    </Button>
                    <div className={classes.grow} />
                    <div className={classes.button}> 
                    <IconButton aria-label="Show people" color="inherit" component={Link} to="/login" > 
                            <People />
                        </IconButton>
                        <IconButton aria-label="Show favorite" color="inherit" > 
                            <Favorite />
                        </IconButton>
                        <IconButton aria-label="Show cart item" color="inherit" component={Link} to="/checkout">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;


