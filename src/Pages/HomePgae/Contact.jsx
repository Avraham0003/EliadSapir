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
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  VStack,
  SimpleGrid,

} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { BsInstagram, BsTiktok, BsPerson, BsFacebook, BsWhatsapp, BsPhone,BsCaretDown,BsBookmarkCheck  } from 'react-icons/bs'

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



  const [finished, setFinished] = useState(false);
  const [select, setSelect] = useState('אחר');
  const [err, setErr] = useState(false);

  const [formData,setFormData] = useState({
    name: "",
    phone: "",
    category: select,
  }) 

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

const handleChangeButton = (value) =>{
  setSelect(value);
  setFormData({ ...formData, category: value });

}

  const sendForm = async() =>{

      await axios.post(import.meta.env.VITE_SERVER_URL + '/contact/create/', formData)
      .then((response) => {
        console.log(response.data);
        setErr('');
        // handle success
        setFinished(true);
      })
      .catch((error) => {
        setErr(true);
        console.log(error);
        // handle error
      });

      
  } 
  const SocialButton = {
    borderRadius: 'full',
    fontSize: 'md',
    fontWeight: 'bold',
    width: '100%',
    py: 4,
    transition: 'all 0.2s',
    _hover: {
      transform: 'scale(1.05)',
    },
  };
  
  const SocialIcons = {
    marginRight: 2,
  };




  return (
    <>
      <Text sx={props.heading1} textAlign={'center'} color={props.Tcolor} className='Heading'>נהיה בקשר</Text>
      <Center>

        <Box
          id='contact'
          borderRadius="lg"
          py={8}
          px={[15, 15, 15, 150]}
          width={['90%', '80%', '70%', '60%', '40%']}
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel color={'white'}>שם:</FormLabel>

              <InputGroup>
                <InputRightElement>
                  <BsPerson color='white' />
                </InputRightElement>
                <Input value={formData.name}
                        onChange={handleChange} color={'white'} type="text" name="name" placeholder="השם שלך" paddingLeft={0} paddingRight={8} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={'white'}>טלפון:</FormLabel>

              <InputGroup>
                <InputRightElement>
                  <BsPhone color='white' />
                </InputRightElement>
                <Input value={formData.phone}
                        onChange={handleChange}
                        name='phone' color={'white'} type="number" placeholder="הטלפון שלך" paddingLeft={0} paddingRight={8}  pattern="^\+(?:[0-9] ?){6,14}[0-9]$" />
              </InputGroup>
            </FormControl>

            <FormControl id="category" isRequired>
              <FormLabel color={'white'}>תחום הפנייה:</FormLabel>
              <Menu dir='rtl'>
                <MenuButton as={Button} rightIcon={<BsCaretDown/>} bg={'none'} color={'white'} border={'1px solid white'} _hover={'yellow'} width='100%'>
                  {select}
                </MenuButton>
                <MenuList dir='rtl'>
                  <MenuItem onClick={()=>handleChangeButton('מחלקת אמנים')}>מחלקת אמנים</MenuItem>
                  <MenuItem onClick={()=>handleChangeButton('מחלקת אירועים')}>מחלקת אירועים</MenuItem>
                  <MenuItem onClick={()=>handleChangeButton('מחלקת עסקים')}>מחלקת עסקים</MenuItem>
                  <MenuItem onClick={()=>handleChangeButton('אחר')}>אחר</MenuItem>
                </MenuList>
              </Menu>
            </FormControl>

            {!finished && <Button
              colorScheme="blue"
              bg={props.Tcolor}
              color={props.Tcolor === "#fff" ? "black" : "white"}
              _hover={{
                bg: '#0D00FF'
              }}
              onClick={()=>sendForm()}
              width="80%">
              תחזרו אליי !
            </Button>}
            {finished && <Box fontSize={'5xl'} color={'green'} ><BsBookmarkCheck /></Box> }
            {err && <Box color={'red'}>אנא מלא את כל הפרטים!</Box>}
          </VStack>
        </Box>
      </Center>



      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 4, lg: 4 }} padding={4}>
      <Button sx={SocialButton} bg={'green.400'}>
         WhatsApp <Icon as={BsWhatsapp} sx={SocialIcons} />
      </Button>

      <Button sx={SocialButton} colorScheme='facebook'>
         Facebook <Icon as={BsFacebook} sx={SocialIcons} />
      </Button>

      <Button sx={SocialButton} bg={'#8134AF'}>
         Instagram <Icon as={BsInstagram} sx={SocialIcons} />
      </Button>

      <Button sx={SocialButton} bg={'#EE1D52'}>
         Tiktok <Icon as={BsTiktok} sx={SocialIcons} />
      </Button>
    </SimpleGrid>
    </>
  )
}