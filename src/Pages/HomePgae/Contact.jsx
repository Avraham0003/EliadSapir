import {
    Container,
    Flex,
    Box,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlinePhone,
  } from 'react-icons/md';
  import {FaInstagram, FaTiktok} from 'react-icons/fa';
  import {BsPerson } from 'react-icons/bs';  
  export default function Contact() {
    return (
      <>
        <Container maxW="full" mt={0} centerContent overflow="hidden">
          <Flex>
            <Box>
              <Box p={10}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={4} alignItems="flex-start">
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            055-26550676
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                            eliadsapir18@gmail.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                            הרצל 12, אשקלון
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start">
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF', color: 'white' }}
                          icon={<MdFacebook size="28px" />}
                        />
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF', color: 'white' }}
                          icon={<FaTiktok size="28px" />}
                        />
                        <IconButton
                          aria-label="instagram"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF', color: 'white' }}
                          icon={<FaInstagram size="28px" />}
                        />
                      </HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>שם מלא:</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input type="text" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>מס' טלפון:</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlinePhone color="gray.800" />}
                              />
                              <Input type="text" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>הודעה:</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: 'gray.300',
                              }}
                              placeholder="message"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button colorScheme='blue'>שלח הודעה</Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </>
    );
  }