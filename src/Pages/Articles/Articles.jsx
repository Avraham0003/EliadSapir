
import {
  Box,
  Heading,
  Image,
  Text,
  Container,
  Divider,
  Button,
  Link
} from '@chakra-ui/react'
import Header from '../../components/Header/HeaderBlack'
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Articles() {


  const [articles,setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/articles/all`);
        console.log('Articles:', response.data.articles);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    fetchArticles();
  }, []);





  const heading = {
    fontSize: ['40px', '50px', '80px'],
    fontWeight: 'bold',
    textAlign: 'center'
  }

  return (
    <>
      <Header />
      <Text sx={heading} className='Heading'>מאמרי מידע</Text>
      <Divider />


      <Container maxW={'7xl'} p="5">


      {articles && articles.map((item) => (
        <>
        <Box
        key={item._id}
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={item.article_photo}
                  alt="some good alt text"
                  objectFit="contain"
                  />
              </Box>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
                />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {item.article_name}
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              fontSize="lg">
              {<Box dangerouslySetInnerHTML={{ __html: item.article_description.substring(0, 50) + '...' }} />}
            </Text>
            <Button><Link href={'/article/'+item._id}>קרא עוד</Link></Button>
          </Box>
        </Box> 
        <br />
        <Divider />
        </>   
))}


      </Container>

      <Footer />
    </>
  )
}
