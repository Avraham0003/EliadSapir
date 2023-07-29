import { Text, Box, Image, Flex, Button, IconButton, Spacer} from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaComments, FaWhatsapp } from 'react-icons/fa';
import eliad from './Eliad2.png';
import Contact from './Contact';
import Slideshow from '../../components/Slideshow/Slideshow';
import Footer from '../../components/Footer/Footer';
import Show from '../../components/Show/Show';
function HomePage() {

  const heading = {
    fontSize: ['50px', '70px', '90px'],
    bgGradient: 'linear(to-l, blue.400, teal.400)',
    color: 'white',
    fontWeight: 'bold',
    bgClip: 'text',
    letterSpacing: ['2px','8px'],
  }
  const heading1 = {
    fontSize: ['40px', '50px', '80px'],
    bgGradient: 'linear(to-l, blue.400, teal.400)',
    color: 'white',
    fontWeight: 'bold',
    bgClip: 'text',
    letterSpacing: ['2px','8px'],
  }

  const card_style = {
    bg: 'rgba(0,0,0,0.5)',
    py: ['1', '10'],
    color: 'white',
    borderRadius: '10px'
  }

  const card_head_style = {
    fontSize: ['30px', '40px'],
    textAlign: 'center'
  }
  return (
    <>
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
          <Button fontSize={'xl'} opacity={0.8}>צור קשר &nbsp;<FaComments /></Button>
        </Box>
        <Spacer/>
        <Image src={eliad} alt='eliad sapir photo' width={['100%', '50%', '30%']} marginTop={200} position={['absolute','absolute', 'relative']} zIndex={0} />
      </Flex>

        <Box height={'200vh'} bgGradient='linear(to-l,  #0b0708,#10171f)' >
          <Text sx={heading1} textAlign={'right'} py={10}>
            מה האולפן מציע?
          </Text>
        <Show/>
        </Box>
        


        <Text sx={heading} textAlign={'center'}>
          לקוחות ממליצים
        </Text>
        <Slideshow/>

        <Text sx={heading} textAlign={'center'}>
          צור קשר
        </Text>
        <Contact/>
      <Footer/>

      <IconButton colorScheme='green' position={'fixed'} bottom={10} right={10} fontSize={'35px'} width={'50px'} height={'50px'} isRound={true} icon={<FaWhatsapp />} onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=972526550676'; }} />
      
      
      
      
      
      
    </>
  )
}

export default HomePage