import { Text, Box, Image, Flex, Button, IconButton, Spacer} from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaComments, FaWhatsapp, FaAngleDown } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import eliad from './MainEliad.png';
import eliad2 from './MainEliad2.png';
import Contact from './Contact';
import Swiper from '../../components/Swiper/Swiper';
import Footer from '../../components/Footer/Footer';
import Show from '../../components/Show/Show';

function HomePage() {

  const heading = {
    fontSize: ['50px', '70px', '90px'],
    color: '#0D74FF',
    fontWeight: 'bold',
  }
  const heading1 = {
    fontSize: ['40px', '50px', '80px'],
    color: '#0D74FF',
    fontWeight: 'bold',
  }
  const heading2 = {
    fontSize: ['40px', '50px', '80px'],
    color: 'white',
    fontWeight: 'bold',
    px: '10'
  }

  const handleClickScroll = () => {
    const element = document.getElementById('Contact');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Header  />
      <Flex align="center" 
      height={'100vh'} 
      width={'100%'}
      bgGradient='linear(to-l,  #0b0708,#10171f)' 
      padding={0}
      >
        
        <Box paddingRight={[2,10]} marginBottom={[300,0]} zIndex={1}>
          <Text sx={heading}>
            אליעד ספיר
          </Text>
          <Text fontSize={['30px', '50px', '70px']} letterSpacing={'-1px'} color={'white'} as={'p'}>
            הבית לאמנים גדולים
          </Text>
          <Text width={'100%'} color={'white'} marginY={10} fontSize={['13px', '20px', '30px']}>
            אולפן הקלטות והפקות לאמנים, אירועים, עסקים ולכל דרישה.
            <br />
             ציוד צילום, הקלטה והפקה ברמה הכי גבוהה שיש.
          </Text>
          <Button fontSize={'xl'} opacity={0.6} onClick={()=>{ handleClickScroll()}} variant='outline' color={'white'}>צור קשר &nbsp;<FaComments /></Button>
        </Box>
        <Spacer/>
        <Image src={eliad} alt='eliad sapir photo' width={['100%', '50%', '30%']} marginTop={200} position={['absolute','absolute', 'relative']} zIndex={0} />
      </Flex>


        <Box paddingTop={50} bgGradient='linear(to-l,  #0b0708,#10171f)' >
          <Text sx={heading1} textAlign={'right'} py={10} px={5}>
            מה האולפן מציע?
          </Text>
        <Show/>

        <Flex
        marginTop={10}
        align="center" 
      height={'100vh'} 
      width={'100%'}
      bgGradient='linear(to-l,  #8e6d4b 10%,#10171f)'
      padding={0}
      >
        <Box paddingRight={[2,10]} marginBottom={[300,0]} zIndex={1}>
          <Text sx={heading2}>
            מי אני?
          </Text>
          <Text width={'100%'} color={'white'} marginY={10} fontSize={['13px', '20px', '30px']}>
            אני אליעד ספיר בן 24, בעלים של אולפן הקלטות וכו וכו וכו
          </Text>
        </Box>
        <Spacer/>
        <Image src={eliad2} alt='eliad sapir photo' width={['100%', '50%', '30%']} marginTop={200} position={['absolute','absolute', 'relative']} zIndex={0} />
      </Flex>

        <Text sx={heading1} textAlign={'center'} paddingTop={100}>
          לקוחות ממליצים
        </Text>
        <Swiper />
        
        <Text sx={heading1} textAlign={'center'} id='Contact'>
          צור קשר
        </Text>
        <Contact/>
        </Box>
      <Footer/>
        


      <IconButton zIndex={999} colorScheme='green' position={'fixed'} bottom={10} right={10} fontSize={'35px'} width={'50px'} height={'50px'} isRound={true} icon={<FaWhatsapp />} onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=972526550676'; }} />
      
      
      
      
      
      
    </>
  )
}

export default HomePage