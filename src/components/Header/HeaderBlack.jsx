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
    const headerButtons = {
      width: '100%',
      marginY: 2,
      fontSize: 'xl',
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Box sx={header_style} dir='ltr'>
          <Flex align="center" justify="space-between" >
            <Box>
               <Link href='/'><Image src={logo} alt='logo' width={['150px','200px','250px']} cursor={'pointer'}/></Link>
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
            <DrawerHeader borderBottomWidth='1px' fontSize={'2xl'} color={'#0baaf0'} padding={5}>
                אליעד ספיר
            </DrawerHeader>
            <DrawerCloseButton fontSize={'xl'} transition={'all 0.2s'} _hover={{fontSize: '2xl', color: '#0D74FF'}} color={'black'} marginY={3} />
            <DrawerBody>

            <Button sx={headerButtons}><Link href={'/'}>דף הבית</Link></Button>
              <Button sx={headerButtons}><Link href={'/products'}>מוצרי האולפן</Link></Button>
              <Button sx={headerButtons}>מאמרי מידע</Button>
              <Button sx={headerButtons}>פרוייקטים שעשיתי</Button>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default HeaderBlack;
  