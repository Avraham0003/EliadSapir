import Header from '../../components/Header/HeaderBlack'
import img1 from '../../assets/productsImages/1.png'
import EliadAudio from '../../assets/EliadAudio.mp3';

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function ProductPage() {

const [product, setProduct] = useState(null);
const {id} = useParams();
  useEffect(() => {
    const fetchProduct = async () => {      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
        const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/get_by_id/`+id);
        console.log('Product:', response.data.product);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProduct();
  }, []);

  return (
    <>
    <Header/>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={img1}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {product && product.product_name}
              </Heading>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {product && product.product_description}
                </Text>
              </VStack>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              השאר פרטים
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}