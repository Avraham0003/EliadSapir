import React from 'react'
import Header from '../../components/Header/HeaderBlack'
import { Heading ,Center, Image, Text ,Flex ,Spacer ,Button, Box} from '@chakra-ui/react'
import img1 from '../../assets/productsImages/1.png'
import EliadAudio from '../../assets/EliadAudio.mp3';

function ProductPage() {
  return (
    <>
    <Header/>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Image src={img1} width={'30%'} paddingRight={20}/>
    <Spacer/>
    <Box width={'50%'}>
    <Heading fontSize={'6xl'} py={2} marginBottom={10} textShadow={'3px -2px #0D74FF'}>מוצר 1</Heading>
    <Text dir='rtl' fontSize={'xl'}>ביט משהו טוב חבל לכם על הזמן</Text>
    <audio controls src={EliadAudio}></audio>
    <Button m={5}>קנה עכשיו</Button>
    </Box>
    </Flex>    
    </>

    )
}

export default ProductPage