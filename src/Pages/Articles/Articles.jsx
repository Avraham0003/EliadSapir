
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

export default function Articles() {
  const heading = {
    fontSize: ['40px', '50px', '80px'],
    fontWeight: 'bold',
    textAlign: 'center'
  }
  
  return (
    <>
    <Header/>
    <Text sx={heading} className='Heading'>מאמרי מידע</Text>
    <Divider/>

    <Container maxW={'7xl'} p="5">
      <Box
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
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
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
             המאמר הראשון שלי
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </Text>
           <Button><Link href={'/article/1'}>קרא עוד</Link></Button>
        </Box>
      </Box>
<br />
      <Divider/>

      <Box
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
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
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
             המאמר הראשון שלי
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </Text>
           <Button><Link href={'/article/1'}>קרא עוד</Link></Button>
        </Box>
      </Box>
    </Container>
              </>
  )
}