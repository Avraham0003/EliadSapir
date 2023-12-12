import React,{ useState } from 'react'
import { Divider,Textarea ,Input,FormLabel ,FormControl, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import axios from 'axios';


export default function AddProduct() {

    const { isOpen, onOpen, onClose } = useDisclosure();

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



    return (
        <>
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
            
        </>
    )
}