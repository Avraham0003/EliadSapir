import React, { useEffect, useState } from 'react'
import { Tbody,Th,Tr,Td,Thead,Table,TableContainer,Button, useDisclosure, Modal,ModalBody,ModalContent,ModalCloseButton,ModalHeader,ModalOverlay, Box,Text, Image ,FormControl, FormLabel, Input,Divider  } from '@chakra-ui/react'
import axios from 'axios';
import { BsFillPencilFill,BsEyeFill,BsFillTrashFill   } from "react-icons/bs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Articles() {

    const [articles, setArticles] = useState([]);
        
    const { isOpen: isShowOpen, onOpen: onShowOpen, onClose: onShowClose } = useDisclosure();
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure();


    const [modalItem,setModalItem] = useState({product_name : "",product_description: "",article_photo : ""});
    const [editModalItem,setEditModalItem] = useState({article_id : "" , article_name : "",article_description: "", article_photo : ""});
    const heading = {
        fontSize: '30px',
        width: '100%'
    }


    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/articles/all`);
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchArticles();
    }, []);

    const deleteArticle = async (id) => {
        try {
            if(confirm('האם אתה בטוח?') == true){
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/articles/delete/`+id);
                location.reload();
            }
        } catch (error) {
            console.error('Error delete article:', error);
        }
    };

    const showArticle = async (article_name,article_description, article_photo) => {
        setModalItem({
            article_name,
            article_description,
            article_photo
        })
        onShowOpen();
    };

    const updateArticle = async (article_id, article_name,article_description, article_photo) => {
        setEditModalItem({
            article_id,
            article_name,
            article_description,
            article_photo
        });
        onUpdateOpen();
    };

    const update_Article = async () => {
        try {
            const response = await axios.put(import.meta.env.VITE_SERVER_URL + `/articles/update/` + editModalItem.article_id, editModalItem);
            location.reload();
        } catch (error) {
            console.error('Error update ariticle:', error);
        }
    };

    return (
        <>
            <Modal isCentered isOpen={isShowOpen} onClose={onShowClose} size={'xl'}>
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
                        {modalItem.article_name}
                        </Text>
                        {<Box dangerouslySetInnerHTML={{ __html: modalItem.article_description}} />}
                    </Box>
                  
                </ModalBody>
              </ModalContent>
            </Modal>

            {/* update */}
            <Modal isCentered isOpen={isUpdateOpen} onClose={onUpdateClose} size={'xl'}>
              <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
              />
              <ModalContent>
                <ModalCloseButton />
                <ModalHeader></ModalHeader>
                <ModalBody dir="rtl">

                <form dir='rtl'>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>שם המאמר:</FormLabel>
                                <Input
                                    value={editModalItem.article_name}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, article_name: e.target.value })}
                                    name='article_name'
                                    placeholder='שם המאמר'
                                />
                            </FormControl>

                            <Divider margin={2} />

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>פירוט המאמר:</FormLabel>
                                <ReactQuill
                                    value={editModalItem.article_description}
                                    onChange={(value) =>
                                        setEditModalItem({ ...editModalItem, article_description: value })
                                    }
                                    name='article_description'
                                />
                            </FormControl>

                            <Divider margin={2} />

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>תמונת המאמר:</FormLabel>
                                <Input
                                    value={editModalItem.article_photo}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, article_photo: e.target.value })}
                                    name='article_photo'
                                />
                            </FormControl>
                            <Button m={4} colorScheme='blue' onClick={update_Article}>
                                עדכן מוצר
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
                            <Th>שם המאמר</Th>
                            <Th>תיאור המאמר</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {articles && articles.map((item) => (
                            <Tr key={item._id}>
                                <Td>
                                    <Image maxW={'70px'} src={item.article_photo} borderRadius='lg' />
                                </Td>
                                <Td>{item.article_name}</Td>
                                <Td><Box dangerouslySetInnerHTML={{ __html: item.article_description.substring(0, 50) + '...' }} /></Td>
                                <Td>
                                    <Button m={1} colorScheme='green' onClick={() => updateArticle(item._id, item.article_name, item.article_description, item.article_photo)}><BsFillPencilFill/></Button> 
                                    <Button m={1} onClick={()=>showArticle(item.article_name,item.article_description, item.article_photo)}><BsEyeFill/></Button> 
                                    <Button m={1} colorScheme='red' onClick={()=>deleteArticle(item._id)}><BsFillTrashFill /></Button> 
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}