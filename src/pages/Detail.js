import React, { Component } from 'react'
import {Box, Container, Button, Grid} from '@material-ui/core';
import "../style-pages/detail.css";
import detail1 from "../style-pages/detail1.jpg";
import detail2 from "../style-pages/detail2.jpg";
import detail3 from "../style-pages/detail3.jpg";
import detail4 from "../style-pages/detail4.jpg";
import { Navbar, Footer, DropdownIphone } from '../components';
import StarIcon from '@mui/icons-material/Star';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';

export class detail extends Component {
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
                        <Grid item xs={12} sm={5}>
                            <div> 
                            <img className='detail1' src={detail1} />
                            </div>
                            <div> 
                            <img className='detail2' src={detail2} />
                            <img className='detail2' src={detail3} />
                            <img className='detail2' src={detail4} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div> 
                            <p className='detail-text'> BUTTER LIFE</p>
                            <p className='detail-text1'> 100+ SOLD OUT </p>
                            <p className='detail-text3'>  4,5/5  <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /></p>  
                            <p className='detail-text2'> Rp. 329.000</p>
                            <p className='detail-text4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p> <DropdownIphone /> </p> 
                            <p className='detail-text3'> Quantity</p>
                            <p className='detail-text3'> <IndeterminateCheckBoxIcon /> 1 <AddBoxIcon /> </p>
                            <p> <button className='addtochart-button'> Add to Chart</button></p>
                            </div>
                        </Grid>
                    </Grid>      
                </Container> 
                </div> 
                <div> <Footer /> </div> 
                       
            </div>
        )
    }
}

export default detail

