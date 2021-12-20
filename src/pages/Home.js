import React, { Component } from 'react'
import {Box, Container, Button} from '@material-ui/core';
import "../style-pages/home.css";
import BannerHomes from "../style-pages/banner-homes.jpg";
import { Navbar, Footer } from '../components';

export class Home extends Component {
    render() {
        return (
            <div>
                <div> <Navbar /> </div>
                <Container style={{
                    minWidth: "100%",
                    height: "auto",
                    backgroundColor: '#cfe8fc',  
                }}>
                    <p className='h1-home'> OUR NEW PRODUCT</p>
                    <img className='pict-home' src={BannerHomes} />  
                    <a href='/foriphone'> <button className='button-home'> SHOP NOW</button> </a>
                </Container>  
                <div> <Footer /> </div> 
                       
            </div>
        )
    }
}

export default Home;
