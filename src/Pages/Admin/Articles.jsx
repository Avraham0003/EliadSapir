import React, { useEffect, useState } from 'react'
import { Tbody,Th,Tr,Td,Thead,Table,TableContainer,Button, useDisclosure, Modal,ModalBody,ModalContent,ModalCloseButton,ModalHeader,ModalOverlay, Box,Text } from '@chakra-ui/react'
import axios from 'axios'
import { BsFillPencilFill,BsEyeFill,BsFillTrashFill   } from "react-icons/bs";


export default function Articles() {

    const [articles, setArticles] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalItem,setModalItem] = useState({product_name : "",product_description: ""});

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

    const showArticle = async (article_name,article_description) => {
        setModalItem({
            article_name,
            article_description,
        })
        console.log(modalItem);
        onOpen();
    };

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
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
                    {modalItem.article_description}
                    </Box>
                  
                </ModalBody>
              </ModalContent>
            </Modal>


            <TableContainer>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>שם המאמר</Th>
                            <Th>תיאור המאמר</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {articles && articles.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.article_name}</Td>
                                <Td>{item.article_description.substring(0, 100)}</Td>
                                <Td>
                                    <Button colorScheme='green'><BsFillPencilFill/></Button> 
                                    <Button onClick={()=>showArticle(item.article_name,item.article_description)}><BsEyeFill/></Button> 
                                    <Button colorScheme='red' onClick={()=>deleteArticle(item._id)}><BsFillTrashFill /></Button> 
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}