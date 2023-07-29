import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    useDisclosure,
    DrawerCloseButton,
    Box,
    Image,
    Flex
  } from '@chakra-ui/react'
  import { HiMenuAlt3 as Menu, HiHome, HiOutlineAnnotation  } from "react-icons/hi";
  import React from 'react'
  import logo from '../../assets/mainEliadLogo.png';
  import EliadAudio from '../../assets/EliadAudio.mp3';

function Header() {

  const playAudio = ()=> {
    new Audio(EliadAudio).play();
  }

    const menu_button_style = {
      cursor: 'pointer',
      float: 'right',
      fontSize: '40px',
      color: 'white',
      transition: "all 0.2s",
      borderRadius: '10%',
      _hover:{
        background: "rgba(0,0,0,0.5)",
        color: "white",
        transition: "all 0.2s"
      }
    }
    const header_style = {
      py: 5,
      px: [5,10,50],
      position: 'absolute',// Can be remove
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Box sx={header_style}>
          <Flex align="center" justify="space-between" >
            <Box>
               <Image src={logo} alt='logo' width={['150px','200px','250px']} cursor={'pointer'} onClick={()=> playAudio()}/>
             </Box>
            <Box onClick={onOpen} sx={menu_button_style} ><Menu /></Box>
          </Flex>
        </Box>
  
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent width={'40%'} >
            <DrawerHeader borderBottomWidth='1px' fontSize={'xl'} color={'black'} padding={5}>
                EliadSapir
            </DrawerHeader>
            <DrawerCloseButton fontSize={'xl'} color={'black'} marginY={3} />
            <DrawerBody>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default Header;
  