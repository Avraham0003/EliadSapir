import Header from '../../components/Header/HeaderForAdmin'
import {
  Box,
  Text,
  Button,
  Divider,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Modal,
  useDisclosure,
  Input,
  Textarea,
  FormControl,
  FormLabel

} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Products from './Products';
import Articles from './Articles';
import Contact from './Contact';

export default function Simple() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(import.meta.env.VITE_SERVER_URL + '/products/create', formData)
      .then((response) => {
        console.log(response.data);
        // handle success
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });

  }

  const heading = {
    fontSize: '60px',
    fontWeight: 'bold',
    transition: '0.8s'
  }

  const buttonNavStyle = {
    width: '100%',
    fontSize: 'xl',
    marginY: '5px',
    bg: 'rgba(0,0,0,0.5)',
    color: 'white'
  }


  return (
    <>
      <Header />
      <Text textAlign={'center'} sx={heading} className='Heading'>פאנל ניהול</Text>
      <Divider height={'4px'}></Divider>

      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab width={'25%'}>צור קשר</Tab>
          <Tab width={'25%'}>מוצרים</Tab>
          <Tab width={'25%'}>מאמרים</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* צור קשר */}
            <Contact/>
          </TabPanel>
          <TabPanel>
            {/* מוצרים */}
            <Button colorScheme={'blue'} onClick={() => onOpen()}>הוסף מוצר +</Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
              />
              <ModalContent>
                <ModalHeader>הוספת מוצר</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                  <form onSubmit={handleSubmit} dir='rtl'>
                    <FormControl isRequired >
                      <FormLabel fontWeight={'bold'}>שם המוצר:</FormLabel>
                      <Input value={formData.product_name}
                        onChange={handleChange}
                        name='product_name'
                        placeholder='שם המוצר' />
                    </FormControl>

                    <Divider margin={2} />

                    <FormControl isRequired>
                      <FormLabel fontWeight={'bold'}>פירוט המוצר:</FormLabel>
                      <Textarea value={formData.product_description}
                        onChange={handleChange}
                        name='product_description' />
                    </FormControl>

                    <Divider margin={2} />

                    <FormControl isRequired>
                      <FormLabel fontWeight={'bold'}>תמונת המוצר:</FormLabel>
                      <Input value={formData.product_image}
                        onChange={handleChange}
                        name='product_image' />
                    </FormControl>
                    <Button type='submit' m={4} colorScheme='blue'>צור מוצר</Button>
                  </form>

                </ModalBody>
              </ModalContent>
            </Modal>
            <Products />
          </TabPanel>
          <TabPanel>
            {/* מאמרים */}

            <Articles />

          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  )
}