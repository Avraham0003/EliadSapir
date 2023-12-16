// Import necessary components from Chakra UI
import React, { useEffect, useState } from 'react';
import { Tbody, Th, Tr, Td, Thead, Table, TableContainer, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay, Box, Text, Image, Center, FormControl, FormLabel, Input, Divider, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { BsFillPencilFill, BsEyeFill, BsFillTrashFill } from 'react-icons/bs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

function Products() {
    const [products, setProducts] = useState([]);


    const { isOpen: isShowOpen, onOpen: onShowOpen, onClose: onShowClose } = useDisclosure();
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure();

    const [modalItem, setModalItem] = useState({ product_name: '', product_description: '', product_image: '' });
    const [editModalItem, setEditModalItem] = useState({ product_id: '', product_name: '', product_description: '', product_image: '' });

    const heading = {
        fontSize: '30px',
        width: '100%',
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
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
            if (window.confirm('האם אתה בטוח?') === true) {
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/products/delete/` + id);
                location.reload();
            }
        } catch (error) {
            console.error('Error delete product:', error);
        }
    };

    const showProduct = async (product_name, product_description, product_image) => {
        setModalItem({
            product_name,
            product_description,
            product_image,
        });
        onShowOpen();
    };

    const updateProduct = async (product_id, product_name, product_description, product_image) => {
        setEditModalItem({
            product_id,
            product_name,
            product_description,
            product_image,
        });
        onUpdateOpen();
    };

    const update_Product = async () => {
        try {
            const response = await axios.put(import.meta.env.VITE_SERVER_URL + `/products/update/` + editModalItem.product_id, editModalItem);
            location.reload();
        } catch (error) {
            console.error('Error update product:', error);
        }
    };

    return (
        <>
            {/* הצגת המוצר */}
            <Modal isCentered isOpen={isShowOpen} onClose={onShowClose} size={'xl'}>
                <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader></ModalHeader>
                    <ModalBody dir='rtl'>
                        <Center>
                            <Image maxW={'350px'} src={modalItem.product_image} borderRadius='lg' />
                        </Center>
                        <Box>
                            <Text sx={heading} className='Heading'>
                                {modalItem.product_name}
                            </Text>
                            <Box dangerouslySetInnerHTML={{ __html: modalItem.product_description }} />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* עריכת המוצר */}
            <Modal isCentered isOpen={isUpdateOpen} onClose={onUpdateClose} size={'xl'}>
                <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader></ModalHeader>
                    <ModalBody dir='rtl'>
                        <Center>עריכת המוצר</Center>

                        <form dir='rtl'>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>שם המוצר:</FormLabel>
                                <Input
                                    value={editModalItem.product_name}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, product_name: e.target.value })}
                                    name='product_name'
                                    placeholder='שם המוצר'
                                />
                            </FormControl>

                            <Divider margin={2} />

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>פירוט המוצר:</FormLabel>
                                <ReactQuill
                                    value={editModalItem.product_description}
                                    onChange={(value) =>
                                        setEditModalItem({ ...editModalItem, product_description: value })
                                    }
                                    name='product_description'
                                />
                            </FormControl>

                            <Divider margin={2} />

                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>תמונת המוצר:</FormLabel>
                                <Input
                                    value={editModalItem.product_image}
                                    onChange={(e) => setEditModalItem({ ...editModalItem, product_image: e.target.value })}
                                    name='product_image'
                                />
                            </FormControl>
                            <Button m={4} colorScheme='blue' onClick={update_Product}>
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
                            <Th>שם המוצר</Th>
                            <Th>תיאור המוצר</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products &&
                            products.map((item) => (
                                <Tr key={item._id}>
                                    <Td>
                                        <Image maxW={'70px'} src={item.product_image} borderRadius='lg' />
                                    </Td>
                                    <Td>{item.product_name}</Td>
                                    <Td><Box dangerouslySetInnerHTML={{ __html: item.product_description.substring(0, 50) + '...' }} />
                                    </Td>
                                    <Td>
                                        <Button m={1} colorScheme='green' onClick={() => updateProduct(item._id, item.product_name, item.product_description, item.product_image)}>
                                            <BsFillPencilFill />
                                        </Button>
                                        <Button m={1} onClick={() => showProduct(item.product_name, item.product_description, item.product_image)}>
                                            <BsEyeFill />
                                        </Button>
                                        <Button m={1} colorScheme='red' onClick={() => deleteProduct(item._id)}>
                                            <BsFillTrashFill />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Products;
