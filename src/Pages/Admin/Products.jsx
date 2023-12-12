import React, { useEffect, useState } from 'react'
import { Tbody,Th,Tr,Td,Thead,Table,TableContainer,Button, useDisclosure, Modal,ModalBody,ModalContent,ModalCloseButton,ModalHeader,ModalOverlay, Box,Text, Image, Center } from '@chakra-ui/react'
import axios from 'axios'
import { BsFillPencilFill,BsEyeFill,BsFillTrashFill   } from "react-icons/bs";


function Products() {

    const [products, setProducts] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [modalItem,setModalItem] = useState({product_name : "",product_description: ""});

    const heading = {
        fontSize: '30px',
        width: '100%'
    }


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/all`);
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            if(confirm('האם אתה בטוח?') == true){
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/delete/`+id);
                location.reload();
            }
        } catch (error) {
            console.error('Error delete product:', error);
        }
    };

    const updateProduct = async (id) => {
        try {
            if(confirm('האם אתה בטוח?') == true){
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/update/`+id);
                location.reload();
            }
        } catch (error) {
            console.error('Error update product:', error);
        }
    };

    const showProduct = async (product_name,product_description,product_image) => {
        setModalItem({
            product_name,
            product_description,
            product_image
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
                    <Center>
                <Image maxW={'350px'} src={modalItem.product_image} borderRadius='lg'/>
                    </Center>
                    <Box>
                        <Text sx={heading} className='Heading'>
                        {modalItem.product_name}
                        </Text>
                        {modalItem.product_description}
                    </Box>
                  
                </ModalBody>
              </ModalContent>
            </Modal>
            <TableContainer>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>תמונה</Th>
                            <Th>שם המוצר</Th>
                            <Th>תיאור המוצר</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products && products.map((item) => (
                            <Tr key={item._id}>
                                <Td><Image maxW={'70px'} src={item.product_image} borderRadius='lg'/></Td>
                                <Td>{item.product_name}</Td>
                                <Td>{item.product_description.substring(0, 100)}</Td>
                                <Td>
                                    <Button colorScheme='green' onClick={()=>updateProduct(item._id)}><BsFillPencilFill/></Button> 
                                    <Button onClick={()=>showProduct(item.product_name,item.product_description,item.product_image)}><BsEyeFill/></Button> 
                                    <Button colorScheme='red' onClick={()=>deleteProduct(item._id)}><BsFillTrashFill /></Button> 
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Products