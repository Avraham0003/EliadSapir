import React, { useState } from 'react';
import {
  Divider,
  Input,
  FormLabel,
  FormControl,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

export default function AddProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    product_name: '',
    product_description: '',
    product_image: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(import.meta.env.VITE_SERVER_URL + '/products/create', formData)
      .then((response) => {
        console.log(response.data);
        // handle success
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  return (
    <>
      <Button colorScheme={'blue'} onClick={() => onOpen()}>
        הוסף מוצר +
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent maxW='xl'> {/* Adjust the maxW property as needed */}
          <ModalHeader>הוספת מוצר</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} dir='rtl'>
              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>שם המוצר:</FormLabel>
                <Input
                  value={formData.product_name}
                  onChange={(e) => handleChange('product_name', e.target.value)}
                  name='product_name'
                  placeholder='שם המוצר'
                />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>פירוט המוצר:</FormLabel>
                <ReactQuill
                  value={formData.product_description}
                  onChange={(value) => handleChange('product_description', value)}
                  dir='rtl' // Set the direction to right-to-left
                />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>תמונת המוצר:</FormLabel>
                <Input
                  value={formData.product_image}
                  onChange={(e) => handleChange('product_image', e.target.value)}
                  name='product_image'
                />
              </FormControl>
              <Button type='submit' m={4} colorScheme='blue'>
                צור מוצר
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
