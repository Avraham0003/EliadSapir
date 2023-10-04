import React from 'react'
import Header from '../../components/Header/HeaderBlack'
import { Center, Card,CardBody,Flex, Image,Button,Text, Link} from '@chakra-ui/react'
import img1 from '../../assets/productsImages/1.png'
import img2 from '../../assets/productsImages/2.jpg'
import Footer from '../../components/Footer/Footer';

function Products() {

  const CardStyle = {
    width: ['47%','32%'],
    padding: '0px'
  }

  const imagestyle = {
    _hover: {
      filter: 'brightness(0.60)',
      cursor: 'pointer'
    },
    filter: 'saturate(1.2)',
    width: '100%',
    objectFit: 'cover',
    position: 'relative',
    rounded:'md'
  }
  const TextStyle= {
    textAlign: 'center',
    align: 'center',
    marginTop: '10px',
    fontSize: ['20px','30px'],
    fontWeight: 'bolder',
  }
  return (
    <>
    <Header/>
    
    <Center>
    <Text fontSize={'5xl'} marginBottom={10} letterSpacing={'-1px'}>מוצרי האולפן</Text>
    </Center>
    <Flex gap="4" wrap="wrap" justify="center" paddingBottom={'10vh'}>

    <Card sx={CardStyle}>
      <CardBody padding={2}>
      <Link href='/product/123'><Image sx={imagestyle} src={img1}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 1</Text>
        <Text>350₪</Text>
        <Button colorScheme='blue' width={'100%'}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card>

    <Card sx={CardStyle}>
      <CardBody padding={2}>
      <Link href='/product/123'><Image sx={imagestyle} src={img2}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 2</Text>
        <Text>350₪</Text>
        <Button colorScheme='blue' width={'100%'}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card> 
    </Flex>
    <Footer/>
    
    </>
  )
}

export default Products