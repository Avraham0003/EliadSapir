import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react';
import logo from '../../assets/logo.png';


function Footer() {
  return (
        <>
        <Box width={'100%'} bg={'rgba(0,0,0,0.5)'} display={'block'} padding={10}>
            <Image src={logo} alt='logo' width={['150px','200px','250px']}/>
            <Text float={'left'} color={'white'}>2023 - כל הזכויות שמורות ©</Text>
        </Box>
        </>
  )
}

export default Footer