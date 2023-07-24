import { Text, Center, Box, Image, Flex, Stack, GridItem, Card, CardHeader, CardBody, Button, IconButton, Grid } from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaMicrophoneAlt, FaComments, FaWhatsapp, FaTiktok, FaCameraRetro, FaMusic } from 'react-icons/fa';
import { BsDisc } from 'react-icons/bs';
import { TfiVideoClapper } from 'react-icons/tfi';
import eliad from './homepage.PNG';
import design from './design.svg';
import Contact from './Contact';
import Slideshow from './Slideshow';
import Footer from '../../components/Footer/Footer';

function HomePage() {

  const heading = {
    fontSize: ['50px', '70px', '90px'],
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
      justify="space-between" 
      height={'100vh'} 
      bgGradient='linear(to-l,  #0b0708,#10171f)' 
      paddingY={[0, 300, 400]} 
      paddingX={[5, 20, 30, 40]}
      >
        <Box>
          <Text sx={heading}>
            אליעד ספיר
          </Text>
          <Text fontSize={['40px', '70px', '90px']} color={'white'} as={'p'}>
            הבית לאמנים גדולים
          </Text>
          <Text width={'100%'} color={'white'} marginY={10} fontSize={['10px', '20px', '30px']}>
            אולפן הקלטות והפקות לאמנים, אירועים, עסקים ולכל דרישה.
            <br />
             ציוד צילום, הקלטה והפקה ברמה הכי גבוהה שיש.
          </Text>
          <Button fontSize={'xl'}>צור קשר &nbsp;<FaComments /></Button>
        </Box>
        <Image src={eliad} alt='eliad sapir photo' width={['70%', '50%', '30%']} position={['absolute', 'relative']} />
      </Flex>

      <Box py={[10,100]} height={'150vh'} width={'100%'}
        bgImage={design}
        bgPosition="left"
        bgRepeat="no-repeat"
        bgSize={'70%'}
      >
        <Box>
          <Text sx={heading} textAlign={'center'}>
            מה האולפן מציע?
          </Text>
        </Box>
        <Grid 
        templateRows={['repeat(3, 1fr)','repeat(2, 1fr)']}
        templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']}
        gap={[1,10]} 
        px={['5px','10%']}>
          <Card sx={card_style}>
            <CardHeader>
              <Center fontSize={'40px'}><BsDisc /></Center>
            </CardHeader>
            <CardBody>
              <Text sx={card_head_style}>הפקת שיר מקורי</Text>
            </CardBody>
          </Card>
          
          <Card sx={card_style}>
            <CardHeader>
              <Center fontSize={'40px'}><TfiVideoClapper /></Center>
            </CardHeader>
            <CardBody>
              <Text sx={card_head_style}>הפקת סרטוני תדמית</Text>
            </CardBody>
          </Card>

          <Card sx={card_style}>
            <CardHeader>
              <Center fontSize={'40px'}><FaMicrophoneAlt /></Center>
            </CardHeader>
            <CardBody>
              <Text sx={card_head_style}>הקלטות לאירועים</Text>
            </CardBody>
          </Card>

          <Card sx={card_style}>
            <CardHeader>
              <Center fontSize={'40px'}><FaTiktok /></Center>
            </CardHeader>
            <CardBody>
              <Text sx={card_head_style}>פיתוח ברשתות חברתיות</Text>
            </CardBody>
          </Card>

          <Card sx={card_style}>
            <CardHeader>
            <Center fontSize={'40px'}><FaCameraRetro /></Center>
            </CardHeader>
            <CardBody>
              <Text sx={card_head_style}>צילום ועריכה לכל מטרה</Text>
            </CardBody>
          </Card>

          <Card sx={card_style}>
            <CardHeader>
            <Center fontSize={'40px'}><FaMusic /></Center>
            </CardHeader>
            <CardBody>
              <Text sx={card_head_style}>שירות מכירת ביטים ייחודי</Text>
            </CardBody>
          </Card>



        </Grid>


        <Text sx={heading} textAlign={'center'}>
          לקוחות ממליצים
        </Text>
        <Slideshow/>

        <Text sx={heading} textAlign={'center'}>
          צור קשר
        </Text>
        <Contact/>
      <Footer/>
      </Box>

      <IconButton colorScheme='green' position={'fixed'} bottom={10} right={10} fontSize={'35px'} width={'50px'} height={'50px'} isRound={true} icon={<FaWhatsapp />} onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=972526550676'; }} />
      
      
      
      
      
      
    </>
  )
}

export default HomePage