import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/HeaderBlack'
import { Center, Card, CardBody, Flex, Text, Link, Stack, Divider, Heading, CardFooter, Button, Image } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer';
import axios from 'axios'

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/all`);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  const heading = {
    fontSize: ['40px', '50px', '80px'],
    fontWeight: 'bold',
  }

  const CardStyle = {
    width: ['47%', '30%', '20%'],
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
    rounded: 'md'
  }
  const TextStyle = {
    textAlign: 'center',
    align: 'center',
    marginTop: '10px',
    fontSize: ['20px', '30px'],
    fontWeight: 'bolder',
  }
  return (
    <>
      <Header />



      <Center>
        <Text sx={heading} className='Heading'>מוצרי האולפן</Text>
      </Center>

      <Flex gap="4" wrap="wrap" justify="center" paddingBottom={'10vh'}>


        {products && products.map((item) => (
          <Card maxW='sm' key={item.product_name}>
            <CardBody>
              <Image
                src={item.product_image}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='2'>
                <Heading size='md'><Link href={`./product/${item._id}`}>{item.product_name}</Link></Heading>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                פרטים נוספים
              </Button>
            </CardFooter>
          </Card>
        ))}


      </Flex>
      <Footer />

    </>
  )
}

export default Products