import React, { useEffect, useState } from 'react'
import { Tbody,Th,Tr,Td,Thead,Table,TableContainer,Button, useDisclosure, Modal,ModalBody,ModalContent,ModalCloseButton,ModalHeader,ModalOverlay, Box,Text } from '@chakra-ui/react'
import axios from 'axios'
import { BsFillPencilFill,BsEyeFill,BsFillTrashFill   } from "react-icons/bs";


export default function Projects() {

    const [projects, setProject] = useState([]);
    const { isOpen1, onOpen1, onClose1 } = useDisclosure();
    const [modalItem,setModalItem] = useState({project_name : "",project_description: "",project_photo : "",youtube_url:""});


    const heading = {
        fontSize: '30px',
        width: '100%'
    }


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/projects/all`);
                setProject(response.data.projects);
                console.log(response.data.projects);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProjects();
    }, []);

    const deleteProject = async (id) => {
        try {
            if(confirm('האם אתה בטוח?') == true){
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/projects/delete/`+id);
                location.reload();
            }
        } catch (error) {
            console.error('Error delete article:', error);
        }
    };

    const showProject = async (project_name,project_description,project_photo,youtube_url) => {
        setModalItem({
            project_name,
            project_description,
            project_photo,
            youtube_url
        })
        console.log(modalItem);
        onOpen1();
    };

    return (
        <>
            <Modal isCentered isOpen={isOpen1} onClose={onClose1} size={'xl'}>
              <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
              />
              <ModalContent>
                <ModalCloseButton />
                <ModalHeader></ModalHeader>
                <ModalBody dir="rtl">

                    <Box>
                        <Text sx={heading} className='Heading'>
                        {modalItem.project_name}
                        </Text>
                    {modalItem.project_description}
                    </Box>
                  
                </ModalBody>
              </ModalContent>
            </Modal>


            <TableContainer>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>שם הפרויקט</Th>
                            <Th>תיאור הפרויקט</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {projects && projects.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.project_name}</Td>
                                <Td>{item.project_description.substring(0, 100)}</Td>
                                <Td>
                                    <Button colorScheme='green'><BsFillPencilFill/></Button> 
                                    <Button onClick={()=>showProject(item.project_name,item.project_description,project_photo,youtube_url)}><BsEyeFill/></Button> 
                                    <Button colorScheme='red' onClick={()=>deleteProject(item._id)}><BsFillTrashFill /></Button> 
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}