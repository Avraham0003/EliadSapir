import React,{ useState } from 'react'
import { Divider,Textarea ,Input,FormLabel ,FormControl, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import axios from 'axios';


export default function AddProject() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [formData, setFormData] = useState({
        project_name: "",
        project_description: "",
        project_photo: "",
        youtube_url:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
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
              <ModalContent>
                <ModalHeader>הוספת פרוייקט</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                  <form onSubmit={handleSubmit} dir='rtl'>
                    <FormControl isRequired >
                      <FormLabel fontWeight={'bold'}>שם הפרויקט:</FormLabel>
                      <Input value={formData.project_name}
                        onChange={handleChange}
                        name='project_name'
                        placeholder='שם הפרוייקט' />
                    </FormControl>

                    <Divider margin={2} />

                    <FormControl isRequired>
                      <FormLabel fontWeight={'bold'}>פירוט הפרוייקט:</FormLabel>
                      <Textarea value={formData.project_description}
                        onChange={handleChange}
                        name='project_description' />
                    </FormControl>

                    <Divider margin={2} />

                    <FormControl isRequired>
                      <FormLabel fontWeight={'bold'}>תמונת הפרויקט:</FormLabel>
                      <Input value={formData.project_photo}
                        onChange={handleChange}
                        name='project_photo' />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight={'bold'}>קישור יוטיוב לפרויקט</FormLabel>
                      <Input value={formData.youtube_url}
                        onChange={handleChange}
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