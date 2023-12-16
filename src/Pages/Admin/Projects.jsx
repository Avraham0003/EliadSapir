import React, { useEffect, useState } from 'react'
import { Tbody, Th, Tr, Td, Thead, Table, TableContainer, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay, Box, Text, Image, Center, Link, Input, FormLabel, FormControl, Divider  } from '@chakra-ui/react'
import axios from 'axios'
import { BsFillPencilFill, BsEyeFill, BsFillTrashFill, BsYoutube } from "react-icons/bs";
import YouTube from 'react-youtube';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles



export default function Projects() {

    const [projects, setProject] = useState([]);

    const { isOpen: isShowOpen, onOpen: onShowOpen, onClose: onShowClose } = useDisclosure();
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure();


    const [modalItem, setModalItem] = useState({ project_name: "", project_description: "", project_photo: "", youtube_url: "" });
    const [editModalItem, setEditModalItem] = useState({ project_name: "", project_description: "", project_photo: "", youtube_url: "" });

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
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProjects();
    }, []);

    const deleteProject = async (id) => {
        try {
            if (confirm('האם אתה בטוח?') == true) {
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/projects/delete/` + id);
                location.reload();
            }
        } catch (error) {
            console.error('Error delete article:', error);
        }
    };

    const showProject = async (project_name, project_description, project_photo, youtube_url) => {
        setModalItem({
            project_name,
            project_description,
            project_photo,
            youtube_url
        })
        onShowOpen();
    };

    const updateProject = async (project_id, project_name, project_description, project_photo, youtube_url) => {
        setEditModalItem({
            project_id,
            project_name,
            project_description,
            project_photo,
            youtube_url
        });
        onUpdateOpen();
    };

    const update_Project = async (id) => {
        try {
            const response = await axios.put(import.meta.env.VITE_SERVER_URL + `/projects/update/` + editModalItem.project_id, editModalItem);
            location.reload();
        } catch (error) {
            console.error('Error update product:', error);
        }
    }

    return (
        <>
            <Modal isCentered isOpen={isShowOpen} onClose={onShowClose} size={'2xl'}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader></ModalHeader>
                    <ModalBody dir="rtl">
                        <Center>
                            <Image maxW={'350px'} src={modalItem.project_photo} borderRadius='lg' />
                        </Center>
                        <Box>
                            <Text sx={heading} className='Heading'>
                                {modalItem.project_name}
                            </Text>
                            <Box dangerouslySetInnerHTML={{ __html: modalItem.project_description }} />
                            <YouTube videoId={modalItem.youtube_url} opts={{ height: '390', width: '640' }} />
                        </Box>

                    </ModalBody>
                </ModalContent>
            </Modal>


            <Modal isCentered isOpen={isUpdateOpen} onClose={onUpdateClose} size={'xl'}>
                <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
                <ModalContent maxW='xl'>
                    <ModalHeader>הוספת פרוייקט</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>עריכת המוצר</Center>

                        <form dir='rtl'>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>שם המוצר:</FormLabel>
                                <Input
                                    value={editModalItem.project_name}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, project_name: e.target.value })}
                                    name='project_name'
                                    placeholder='שם הפרוייקט'
                                />
                            </FormControl>

                            <Divider margin={2} />

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>פירוט הפרוייקט:</FormLabel>
                                <ReactQuill
                                    value={editModalItem.project_description}
                                    onChange={(value) =>
                                        setEditModalItem({ ...editModalItem, project_description: value })
                                    }
                                    name='project_description'
                                />
                            </FormControl>

                            <Divider margin={2} />

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>תמונת הפרוייקט:</FormLabel>
                                <Input
                                    value={editModalItem.project_photo}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, project_photo: e.target.value })}
                                    name='project_photo'
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>YouTube ID:</FormLabel>
                                <Input
                                    value={editModalItem.youtube_url}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, youtube_url: e.target.value })}
                                    name='youtube_url'
                                />
                            </FormControl>
                            <Button m={4} colorScheme='blue' onClick={update_Project}>
                                עדכן פרוייקט
                            </Button>
                        </form>

                    </ModalBody>
                </ModalContent>
            </Modal>


            <TableContainer>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>תמונה</Th>
                            <Th>שם הפרויקט</Th>
                            <Th>תיאור הפרויקט</Th>
                            <Th>YouTube ID</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {projects && projects.map((item) => (
                            <Tr key={item._id}>
                                <Td>
                                    <Image maxW={'70px'} src={item.project_photo} borderRadius='lg' />
                                </Td>
                                <Td>{item.project_name}</Td>
                                <Td><Box dangerouslySetInnerHTML={{ __html: item.project_description.substring(0, 50) + '...' }} /></Td>

                                <Td>{item.youtube_url}</Td>
                                <Td>
                                    <Button m={1} colorScheme='red'><Link href={'https://www.youtube.com/watch?v=' + item.youtube_url} isExternal><BsYoutube /></Link></Button>
                                    <Button m={1} colorScheme='green' onClick={() => updateProject(item._id, item.project_name, item.project_description, item.project_photo, item.youtube_url)}><BsFillPencilFill /></Button>
                                    <Button m={1} onClick={() => showProject(item.project_name, item.project_description, item.project_photo, item.youtube_url)}><BsEyeFill /></Button>
                                    <Button m={1} colorScheme='red' onClick={() => deleteProject(item._id)}><BsFillTrashFill /></Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}