import Header from '../../components/Header/HeaderBlack'
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
  useColorModeValue,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Center
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsBookmarkCheck, BsEnvelope } from 'react-icons/bs';




export default function ProductPage() {

const [product, setProduct] = useState(null);
const { isOpen, onOpen, onClose } = useDisclosure();
const [finished, setFinished] = useState(false);



const [formData,setFormData] = useState({
  name: "",
  phone: "",
  category: ""
}) 


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value, category: product.product_name });
}
const sendForm = async() =>{
    await axios.post(import.meta.env.VITE_SERVER_URL + '/contact/create/', formData)
    .then((response) => {
      console.log(response.data);
      // handle success
      setFinished(true);
    })
    .catch((error) => {
      console.log(error);
      // handle error
    });

    
} 



const {id} = useParams();
  useEffect(() => {
    const fetchProduct = async () => {      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
        const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/get_by_id/`+id);
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

    <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>

            <form dir='rtl'>
              <Center fontSize={'35px'} className='Heading'>
              השארת פרטים&#10240;<BsEnvelope/>          
                </Center>
              <FormControl isRequired >
                <FormLabel fontWeight={'bold'}>שם מלא:</FormLabel>
                <Input value={formData.name}
                  onChange={handleChange}
                  name='name'
                  placeholder='שם מלא' />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>מספר טלפון:</FormLabel>
                <Input value={formData.phone}
                  onChange={handleChange}
                  name='phone'
                  placeholder='מספר טלפון' />
                
              </FormControl>

              {!finished && <Center m={2} marginTop={7} ><Button colorScheme='blue' width={'100%'} onClick={()=>sendForm()}>שלח</Button></Center>}
            {finished && <Center m={10} fontSize={'5xl'} color={'green'} ><BsBookmarkCheck /></Center> }

            </form>

          </ModalBody>
        </ModalContent>
      </Modal>

      <Container maxW={'8xl'} bg={'rgba(0,0,0,0.02)'} padding={10}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={product&& product.product_image}
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
                  {product && <Box dangerouslySetInnerHTML={{ __html: product.product_description }} />}
                </Text>
              </VStack>
            </Stack>

            <Button
              onClick={onOpen}
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
              boxShadow: 'lg'
              }
              }>
              השאר פרטים
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}