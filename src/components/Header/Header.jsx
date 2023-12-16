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
    Flex,
    Button,
    Link
  } from '@chakra-ui/react'
  import { HiMenuAlt3 as Menu, HiHome, HiOutlineAnnotation  } from "react-icons/hi";
  import React from 'react'
  import logo from '../../assets/mainEliadLogo.png';
  import EliadAudio from '../../assets/EliadAudio.mp3';

function Header(props) {

  const playAudio = ()=> {
    new Audio(EliadAudio).play();
  }

    let menu_button_style = {
      cursor: 'pointer',
      float: 'right',
      fontSize: '40px',
      color: 'white',
      transition: 'all 0.2s',
      borderRadius: '10%',
      _hover:{
        color: props.Tcolor,
        fontSize: '45px',
        transition: 'all 0.2s'
      }
    }
    const header_style = {
      py: 5,
      px: [5,10,50],
      position: 'absolute',// Can be remove
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1
      
    }
    const headerButtons = {
      width: '100%',
      marginY: 2,
      fontSize: 'xl',
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Box sx={header_style} dir='ltr'>
            {!isOpen &&
          <Flex align="center" justify="space-between" >
            <Box>
               <Image src={logo} alt='logo' width={['150px','200px','250px']} cursor={'pointer'} onClick={()=> playAudio()}/>
             </Box>
            <Box onClick={onOpen} sx={menu_button_style} ><Menu /></Box>
          </Flex>
          }
        </Box>
  
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent width={'40%'} bg={'rgba(0,0,0,0.4)'} padding={'10px'} >
            <DrawerHeader borderBottomWidth='1px' padding={5}>
            <Image src={logo} alt='logo' width={['150px','200px','250px']} cursor={'pointer'} onClick={()=> playAudio()}/>
            </DrawerHeader>
            <DrawerCloseButton fontSize={'xl'} transition={'all 0.2s'} color={'white'} _hover={{fontSize: '2xl', color: props.Tcolor}} marginY={3} />
            <DrawerBody>

              <Button sx={headerButtons} transition={'0.8s'} bg={props.Tcolor}><Link href={'/products'}>מוצרי האולפן</Link></Button>
              <Button sx={headerButtons} transition={'0.8s'} bg={props.Tcolor}><Link href={'/articles'}>מאמרי מידע</Link></Button>
              <Button sx={headerButtons} transition={'0.8s'} bg={props.Tcolor}><Link href={'/projects'}>פרוייקטים שעשיתי</Link></Button>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default Header;
  