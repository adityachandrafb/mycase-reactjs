import React, { Component } from 'react'
import {Box, Container, Button, Grid} from '@material-ui/core';
import "../style-pages/foriphone.css";
import Ipad1 from "../style-pages/ipad1.jpg";
import Ipad2 from "../style-pages/ipad2.jpg";
import Ipad3 from "../style-pages/ipad3.jpg";
import { Navbar, Footer, DropdownIphone, DropdownIpad } from '../components';

export class Foripad extends Component {
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
                            </div>
                            <div className='dropdown-ipad'> 
                               <DropdownIpad />
                               <a href='/foripad'> <p className='text-dropdown2'> IPAD 4</p> </a>
                               <p className='text-dropdown2'> IPAD M1 PRO 2021 </p>
                               <p className='text-dropdown2'> IPAD PRO 2020 </p>
                               <p className='text-dropdown2'> MORE ... </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Box spacing={2} color='inherit'> 
                        <a href="/detailproduct"> <img className='pict-iphone1' src={Ipad1} /> </a>
                        <p className='text-iphone1'> MATCHA BEAR</p>
                        <p className='text-iphone2'> Rp. 399.000</p>
                        <p> <a href='/detailproduct'> <button className='buy-button'> Buy </button> </a>
                        <a href='/checkout'> <button className='detail-button'> Detail </button> </a> </p>
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Box spacing={2} color='inherit'> 
                        <img className='pict-iphone1' src={Ipad2} />
                        <p className='text-iphone1'> LAUNDRY PINK BEAR</p>
                        <p className='text-iphone2'> Rp. 399.000</p>
                        <p> <a href='/detailproduct'> <button className='buy-button'> Buy </button> </a>
                        <a href='/checkout'> <button className='detail-button'> Detail </button> </a> </p>
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Box spacing={2} color='inherit'> 
                        <img className='pict-iphone1' src={Ipad3} />
                        <p className='text-iphone1'> BLACK CUTIE BEAR</p>
                        <p className='text-iphone2'> Rp. 399.000</p>
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

export default Foripad;