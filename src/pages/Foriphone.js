import React, { Component } from 'react'
import {Box, Container, Button, Grid} from '@material-ui/core';
import "../style-pages/foriphone.css";
import Iphone1 from "../style-pages/iphone1.jpg";
import Iphone2 from "../style-pages/iphone2.jpg";
import Iphone3 from "../style-pages/iphone3.jpg";
import { Navbar, Footer, DropdownIphone, DropdownIpad } from '../components';

export class Foriphone extends Component {
    render() {
        return (
            <div>
                <div> <Navbar /> </div>
                <div> 
                <Container style={{
                    minWidth: "100%",
                    height: "auto",  
                }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <div className='dropdown'> 
                               <DropdownIphone />
                               <a href='/foriphone'> <p className='text-dropdown1'> IPHONE 13 PRO MAX</p> </a>
                               <p className='text-dropdown2'> IPHONE 13 PRO </p>
                               <p className='text-dropdown2'> IPHONE 13 MINI </p>
                               <p className='text-dropdown2'> IPHONE 12 PRO MAX</p>
                               <p className='text-dropdown2'> MORE ... </p>
                            </div>
                            <div className='dropdown-ipad'> 
                               <DropdownIpad />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Box spacing={2} color='inherit'> 
                        <a href="/detailproduct"> <img className='pict-iphone1' src={Iphone1} /> </a>
                        <p className='text-iphone1'> BUTTER LIFE</p>
                        <p className='text-iphone2'> Rp. 329.000</p>
                        <p> <a href='/detailproduct'> <button className='buy-button'> Buy </button> </a>
                        <a href='/checkout'> <button className='detail-button'> Detail </button> </a> </p>
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Box spacing={2} color='inherit'> 
                        <img className='pict-iphone1' src={Iphone2} />
                        <p className='text-iphone1'> THE WAIT IS OVER</p>
                        <p className='text-iphone2'> Rp. 329.000</p>
                        <p> <a href='/detailproduct'> <button className='buy-button'> Buy </button> </a>
                        <a href='/checkout'> <button className='detail-button'> Detail </button> </a> </p>
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Box spacing={2} color='inherit'> 
                        <img className='pict-iphone1' src={Iphone3} />
                        <p className='text-iphone1'> A WHOLE NEW WORLD</p>
                        <p className='text-iphone2'> Rp. 329.000</p>
                        <p> <a href='/detailproduct'> <button className='buy-button'> Buy </button> </a>
                        <a href='/checkout'> <button className='detail-button'> Detail </button> </a> </p>
                        </Box>
                        </Grid> 
                    </Grid>      
                </Container> 
                </div> 
                <div> <Footer /> </div>                       
            </div>
        )
    }
}

export default Foriphone;