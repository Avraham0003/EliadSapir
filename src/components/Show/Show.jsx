import { Box, Image, Flex, Text, Center } from '@chakra-ui/react';
import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
function Show() {
  const image_style = {
    _hover: {
      filter: 'brightness(0.10)',
      cursor: 'pointer'
    },
    filter: 'saturate(1.2)',
    objectFit: 'cover',
    w: ['50vw', '36vw', '31vw', '26vw', '24vw'],
    position: 'relative' // Add relative positioning to the images
  };



  return (
    <>
      <Flex gap="0" wrap="wrap" justify="center">
      <Box position="relative">
          <Image sx={image_style} src={img2} />
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img4} />
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img6} />
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img1} />
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img3} />
        </Box>
        <Box position="relative">
          <Image sx={image_style} src={img5} />
        </Box>
        
      </Flex>
    </>
  );
}

export default Show;
