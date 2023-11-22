import {
    Button,
    FormControl,
    Flex,
    Input,
    Stack,
    Text,
    Box,
} from '@chakra-ui/react'
import Header from '../../components/Header/HeaderBlack'
import { useContext, useState } from 'react';
import AdminContext from "./AdminContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useContext(AdminContext.AuthContext);
    const [password, setPassword] = useState({
        password: ""
    });
    
  const handleChange = (e) => {
    const {value } = e.target;
    setPassword(() => ({ password: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(
        password
      );

      if (!response.success) {
        throw new Error(response.message);
      }
      navigate("./panel");

    } catch (error) {
     alert(error.message);
    }
  };


    const heading = {
        fontSize: '60px',
        fontWeight: 'bold',
        transition:'0.8s',
        textAlign: 'center'
      }
    return (
        <>
            <Header />
            <Flex
                minH={'20vh'}
                align={'center'}
                justify={'center'}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Text sx={heading} color={'blue.400'} className='Heading' fontSize={'5xl'}>
                        פאנל ניהול
                    </Text>
                    <Box as="form" onSubmit={handleSubmit}>
                    <FormControl id="email">
                        <Input
                            onChange={handleChange}
                            placeholder="הכנס סיסמה"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            />
                    </FormControl>
                        <Button
                            type="submit"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            התחבר
                        </Button>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}