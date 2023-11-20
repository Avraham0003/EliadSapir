'use client'

import {
  Box,
  Button,
  Center,
  Icon,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Select,
  VStack,
  SimpleGrid,


} from '@chakra-ui/react'
import { BsInstagram, BsTiktok, BsPerson, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'


const SocialButton = {
  color: 'white',
  fontSize: '20px',
  mx: '2px',
  my: '2px',
  _hover: {
    bg: 'rgba(255, 255, 255, 0.1)',
  }
}
export default function Contact(props) {

  return (
    <>
      <Text sx={props.heading1} textAlign={'center'} color={props.Tcolor} className='Heading'>נהיה בקשר</Text>
      <Center>

        <Box
          id='contact'
          borderRadius="lg"
          py={8}
          px={[15, 15, 15, 150]}
          width={['90%', '80%','70%','60%','40%']}
          color={'whiteAlpha.900'}
          shadow="base">
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>שם:</FormLabel>

              <InputGroup>
                <InputRightElement>
                  <BsPerson />
                </InputRightElement>
                <Input type="text" name="name" placeholder="השם שלך" paddingLeft={0} paddingRight={8} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>מייל:</FormLabel>

              <InputGroup>
                <InputRightElement>
                  <MdOutlineEmail />
                </InputRightElement>
                <Input type="email" name="email" placeholder="המייל שלך" paddingLeft={0} paddingRight={8} />
              </InputGroup>
            </FormControl>

            <FormControl id="category" isRequired>
              <FormLabel>תחום הפנייה:</FormLabel>
              <Select dir="rtl">
                <option value="1">מחלקת אמנים</option>
                <option value="2">מחלקת אירועים</option>
                <option value="3">מחלקת עסקים</option>
                <option value="4">אחר</option>
                =                           </Select>
            </FormControl>

            <Button
              colorScheme="blue"
              bg={props.Tcolor}
              color="white"
              _hover={{
                bg: '#0D00FF'
              }}
              width="full">
              תחזרו אליי!
            </Button>
          </VStack>
        </Box>
      </Center>



      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 0, lg: 0 }} padding={2}>
        <Button sx={SocialButton} bg={'green.400'}> WhatsApp &nbsp;<Icon as={BsWhatsapp} /></Button>

        <Button sx={SocialButton} colorScheme='facebook'>Facebook &nbsp;<Icon as={BsFacebook} /></Button>

        <Button sx={SocialButton} bg={'#8134AF'}>instagram &nbsp;<Icon as={BsInstagram} /></Button>

        <Button sx={SocialButton} bg={'#EE1D52'}>Tiktok &nbsp;<Icon as={BsTiktok} /></Button>

      </SimpleGrid>
    </>
  )
}