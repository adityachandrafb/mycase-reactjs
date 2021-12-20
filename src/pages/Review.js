import React, { Component } from 'react'
import {Box, Container, Button, Grid} from '@material-ui/core';
import "../style-pages/review.css";
import detail1 from "../style-pages/detail1.jpg";
import { Navbar, Footer } from '../components';

export class Review extends Component {
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
                            <div> 
                            <p className='review-text'> Your Recent Purchase</p>
                            <img className='review-pict' src={detail1} />
                            <p className='review-text2'> Butter Life</p>
                            <p className='review-text3'> For IPHONE 13 PRO MAX</p>
                            <p className='review-text3'> Rp. 329.000</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div> 
                            <p className='review-text4'> Please give us a honest review</p>
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

export default Review

