import { Box, Image, Flex, Text, Center } from '@chakra-ui/react';
import React from 'react';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';

function Show() {
  const image_style = {
    _hover: {
      filter: 'brightness(0.60)',
      cursor: 'pointer'
    },
    filter: 'saturate(1.2)',
    objectFit: 'cover',
    w: ['50vw', '36vw', '31vw', '26vw', '24vw'],
    position: 'relative' // Add relative positioning to the images
  };

  const text_style = {
    color: 'white',
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: ['15px','25px'],
    fontWeight: 'bold',
    bg: 'rgba(0,0,0,0.5)',
    width: '100%'
  };

  return (
    <>
      <Flex gap="0" wrap="wrap" justify="center">
        <Box position="relative">
          <Image sx={image_style} src={img1} />
          <Center sx={text_style}>הקלטות</Center>
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img3} />
          <Center sx={text_style}>הפקה מוזיקלית</Center>
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img2} />
          <Center sx={text_style}>פודקסטים</Center>
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img4} />
          <Center sx={text_style}>מיקס ומאסטרינג</Center>
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img1} />
          <Center sx={text_style}>אירועים</Center>
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img5} />
          <Center sx={text_style}>רשתות חברתיות</Center>
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img1} />
          <Center sx={text_style}>שיווק</Center>
        </Box>
      </Flex>
    </>
  );
}

export default Show;
