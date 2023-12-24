import React, { useState } from 'react'
import { Divider, Textarea, Input, FormLabel, FormControl, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay, Link } from '@chakra-ui/react'
import axios from 'axios';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles


export default function AddArticle() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    article_name: "",
    article_description: "",
    article_photo: ""
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(import.meta.env.VITE_SERVER_URL + '/articles/create', formData)
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
      <Button colorScheme={'blue'} onClick={() => onOpen()}>הוסף מאמר +</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent>
          <ModalHeader>הוספת מאמר</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <form onSubmit={handleSubmit} dir='rtl'>
              <FormControl isRequired >
                <FormLabel fontWeight={'bold'}>שם המאמר:</FormLabel>
                <Input value={formData.article_name}
                  onChange={handleChange}
                  name='article_name'
                  placeholder='שם המאמר' />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>פירוט המאמר:</FormLabel>
                <ReactQuill
                  value={formData.article_description}
                  onChange={(value) => handleChange('article_description', value)}
                  dir='rtl' // Set the direction to right-to-left
                  name="article_description"
                />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>תמונת המאמר:</FormLabel> <Button m={2}><Link href="https://postimages.org" isExternal>העלה תמונה</Link></Button>
                <Input value={formData.article_photo}
                  onChange={handleChange}
                  name='article_photo' />
              </FormControl>
              <Button type='submit' m={4} colorScheme='blue'>צור מאמר</Button>
            </form>

          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}