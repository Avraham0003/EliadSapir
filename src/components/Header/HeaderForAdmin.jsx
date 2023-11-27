import {
    Box,
    Image,
    Flex,
    Link
  } from '@chakra-ui/react'
  import { BsFillHouseDoorFill } from "react-icons/bs";
    import React from 'react'
  import logo from '../../assets/BlackmainEliadLogo.png';

function HeaderBlack() {

    const menu_button_style = {
      cursor: 'pointer',
      float: 'right',
      fontSize: '40px',
      color: 'black',
      transition: 'all 0.2s',
      borderRadius: '10%',
      _hover:{
        color: '#0baaf0',
        fontSize: '45px',
        transition: 'all 0.2s'
      }
    }
    const header_style = {
      py: 2,
      px: [5,10,50],
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1
      
    }
  
    return (
      <>
        <Box sx={header_style} dir='ltr'>
          <Flex align="center" justify="space-between" >
            <Box>
              <Image src={logo} alt='logo' width={['150px','200px','250px']}/>
             </Box>
            <Link href='/' sx={menu_button_style} cursor={'pointer'}><BsFillHouseDoorFill /></Link>
          </Flex>
        </Box>
      </>
    );
  };
  
  export default HeaderBlack;
  