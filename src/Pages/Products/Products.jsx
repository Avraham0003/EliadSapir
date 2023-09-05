import React from 'react'
import Header from '../../components/Header/HeaderBlack'
import { Heading , Center, Card,CardBody,Flex, Image,Button,Text, Link} from '@chakra-ui/react'
import img1 from '../../assets/productsImages/1.png'
import Footer from '../../components/Footer/Footer';

function Products() {
  const imagestyle = {
    _hover: {
      filter: 'brightness(0.60)',
      cursor: 'pointer'
    },
    filter: 'saturate(1.2)',
    objectFit: 'cover',
    w: ['40vw', '26vw', '22vw', '20vw', '18vw'],
    position: 'relative'
  }
  const TextStyle= {
    marginTop: '10px',
    fontSize: ['20px','30px'],
    fontWeight: 'bolder',
  }
  return (
    <>
    <Header/>
    
    <Center>
    <Heading fontSize={'6xl'} py={2} marginBottom={10} textShadow={'3px -2px #0D74FF'}>מוצרי האולפן</Heading>
    </Center>
    <Flex gap="5" wrap="wrap" justify="center">
    <Card>
      <CardBody>
      <Link href='/product/123'><Image sx={imagestyle} src={img1}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 1</Text>
        <Button colorScheme='blue' m={4}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <Link href='/product/123'><Image sx={imagestyle} src={img1}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 1</Text>
        <Button colorScheme='blue' m={4}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <Link href='/product/123'><Image sx={imagestyle} src={img1}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 1</Text>
        <Button colorScheme='blue' m={4}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <Link href='/product/123'><Image sx={imagestyle} src={img1}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 1</Text>
        <Button colorScheme='blue' m={4}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <Link href='/product/123'><Image sx={imagestyle} src={img1}/></Link>
        <Text sx={TextStyle} display={'inline-block'}>מוצר 1</Text>
        <Button colorScheme='blue' m={4}><Link href='/product/123'>קנה עכשיו</Link></Button>
      </CardBody>
    </Card>
    
    
    </Flex>
    <Footer/>
    
    </>
  )
}

export default Products