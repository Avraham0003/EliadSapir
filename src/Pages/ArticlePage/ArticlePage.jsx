import Header from '../../components/Header/HeaderBlack'
import img1 from '../../assets/productsImages/1.png'
import EliadAudio from '../../assets/EliadAudio.mp3';

import {
  Box,
  Text,
  Image,
  Center
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'

export default function Simple() {


  const [article, setArticle] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
        const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/articles/get_by_id/` + id);
        console.log('Article:', response.data.article);
        setArticle(response.data.article);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, []);


  const heading = {
    fontSize: ['30px', '40px', '70px'],
    fontWeight: 'bold',
    textAlign: 'center'
  }

  return (
    <>
      <Header />

      <Box bg={'rgba(0,0,0,0.1)'} padding={'2%'} margin={'auto'} width={'50%'} borderRadius={'lg'}>
        <Center>
          <Image
            width={'80%'}
            borderRadius="lg"
            src={article && article.article_photo}
            alt="some good alt text"
            objectFit="contain"
          />
        </Center>
        <Text sx={heading} className='Heading'>{article && article.article_name}</Text>
        <Center paddingX={'10%'}>
          {article && <Box dangerouslySetInnerHTML={{ __html: article.article_description}} />}
        </Center>
      </Box>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />



    </>
  )
}