import { Box, Text, Image, Flex } from '@chakra-ui/react'
import React from 'react';
import logo from '../../assets/mainEliadLogo.png';




function Footer() {
  return (
    <>
      <Box py={10} bgGradient='linear(to-l,  #0b0708,#10171f)'>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'white',
            flexGrow: 1,
            mr: 9,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'white',
            flexGrow: 1,
            ml: 9,
          }}>
          <Image src={logo} alt='logo' width={['150px', '200px', '250px']} />
        </Flex>
        <Text pt={6} fontSize={'sm'} color={'white'} textAlign={'center'}>
          © 2023 כל הזכויות שמורות
        </Text>
      </Box>
    </>
  )
}

export default Footer