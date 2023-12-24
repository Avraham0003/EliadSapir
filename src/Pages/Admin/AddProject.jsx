import React, { useState } from 'react'
import { Divider, Input, FormLabel, FormControl, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay, Link } from '@chakra-ui/react'
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles


export default function AddProject() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    project_name: "",
    project_description: "",
    project_photo: "",
    youtube_url: ""
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(import.meta.env.VITE_SERVER_URL + '/projects/create', formData)
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
      <Button colorScheme={'blue'} onClick={() => onOpen()}>הוסף פרוייקט +</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent maxW='xl'>
          <ModalHeader>הוספת פרוייקט</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <form onSubmit={handleSubmit} dir='rtl'>
              <FormControl isRequired >
                <FormLabel fontWeight={'bold'}>שם הפרויקט:</FormLabel>
                <Input value={formData.project_name}
                  onChange={(e) => handleChange('project_name', e.target.value)}
                  name='project_name'
                  placeholder='שם הפרוייקט' />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>פירוט הפרוייקט:</FormLabel>
                <ReactQuill
                  value={formData.project_description}
                  onChange={(value) => handleChange('project_description', value)}
                  dir='rtl' // Set the direction to right-to-left
                />
              </FormControl>

              <Divider margin={2} />

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>תמונת הפרויקט:</FormLabel> <Button m={2}><Link href="https://postimages.org" isExternal>העלה תמונה</Link></Button>
                <Input value={formData.project_photo}
                  onChange={(e) => handleChange('project_photo', e.target.value)}
                  name='project_photo' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight={'bold'}>YouTube Video ID:</FormLabel>
                <Input value={formData.youtube_url}
                  onChange={(e) => handleChange('youtube_url', e.target.value)}
                  name='youtube_url' />
              </FormControl>



              <Button type='submit' m={4} colorScheme='blue'>צור פרוייקט</Button>
            </form>

          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}