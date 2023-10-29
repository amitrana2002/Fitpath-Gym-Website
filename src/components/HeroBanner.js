import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import Mainimage from '../assets/images/Mainimage.jpg'

const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70px'},
    ml:{sm:'50px'}
   }}postion="relative" p="20px">
    <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
    </Typography>
    <Typography fontWeight={700}
    sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px">
        Sweat - Gym - Repeat 
    </Typography>
    <Typography fontSize="19px"
    lineHeight="35px" mb={4}>
        Check out the most effective Exercise
    </Typography>
    <Button variant='contained'
    color='error' href="#exercises">Explore</Button>
    <img src={Mainimage} alt="main"
    className="hero-banner-img"/>
   </Box>
  )
}

export default HeroBanner