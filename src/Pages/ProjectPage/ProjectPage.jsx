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
  useColorModeValue
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export default function ProjectPage() {

const [project, setProject] = useState(null);
const {id} = useParams();
  useEffect(() => {
    const fetchProject = async () => {      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching projects
        const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/projects/get_by_id/`+id);
        setProject(response.data.project);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
  
    fetchProject();
  }, []);

  return (
    <>
    <Header/>
      <Container maxW={'7xl'} bg={'rgba(0,0,0,0.02)'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={project&& project.project_photo}
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
                  {project && project.project_name}
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
                  {project && <Box dangerouslySetInnerHTML={{ __html: project.project_description }} />}
                  <YouTube videoId={project && project.youtube_url} opts={{ height: '390', width: '600' }} />
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}