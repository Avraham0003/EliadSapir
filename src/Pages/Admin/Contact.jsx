import React, { useEffect, useState } from 'react'
import { Tbody, Th, Tr, Td, Thead, Table, TableContainer, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay, Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import { BsEyeFill, BsFillTrashFill, BsWhatsapp,BsFillTelephoneFill   } from "react-icons/bs";



function Contact() {

    const [contacts, setContacts] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalItem, setModalItem] = useState({ user_name: "", user_phone: "", user_reason: "", checked: false});

    const heading = {
        fontSize: '30px',
        width: '100%'
    }


    useEffect(() => {
        const fetchContacts = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching products
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/contact/all`);
                setContacts(response.data.contact);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const deleteContact = async (id) => {
        try {
            if (confirm('האם אתה בטוח?') == true) {
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/contact/delete/` + id);
                location.reload();
            }
        } catch (error) {
            console.error('Error delete contact:', error);
        }
    };

    const showContact = async (user_name, user_phone, user_reason) => {
        setModalItem({
            user_name,
            user_phone,
            user_reason
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
                           
                        </Box>

                    </ModalBody>
                </ModalContent>
            </Modal>


            <TableContainer>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>שם</Th>
                            <Th>טלפון</Th>
                            <Th>סיבת הפניה</Th>
                            <Th></Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {contacts && contacts.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.user_name}</Td>
                                <Td>{item.user_phone}</Td>
                                <Td>{item.user_reason}</Td>
                                <Td>
                                    {!item.checked && "false"}
                                    {item.checked && "true"}
                                </Td>
                                <Td>
                                    <Button colorScheme='green'><BsWhatsapp /></Button>
                                    <Button colorScheme='blue'><BsFillTelephoneFill  /></Button>
                                    <Button onClick={() => showContact(item.user_name, item.user_phone, item.user_reason, checked)}><BsEyeFill /></Button>
                                    <Button colorScheme='red' onClick={() => deleteContact(item._id)}><BsFillTrashFill /></Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Contact