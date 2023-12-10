import React, { useEffect, useState } from 'react'
import {Badge,Link,Tbody, Th, Tr, Td, Thead, Table, TableContainer, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalOverlay, Box, Image } from '@chakra-ui/react'
import axios from 'axios'
import { BsEyeFill, BsFillTrashFill, BsWhatsapp,BsFillTelephoneFill   } from "react-icons/bs";



function Contact() {

    const [contacts, setContacts] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalItem, setModalItem] = useState({ user_name: "", user_phone: "", user_reason: "", checked: false});


    const toggleChecked = async(_id,to) =>{
        await axios.post(import.meta.env.VITE_SERVER_URL+'/contact/toggle_checked',{contact_id: _id,change_to: to})
        .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    }

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

                        <Box fontSize={'xl'}>
                            שם: <Box fontSize={'2xl'} fontWeight={'bold'}>{modalItem.user_name}</Box>
                            <br />
                            טלפון: <Box fontSize={'2xl'} fontWeight={'bold'}>{modalItem.user_phone}</Box>
                            <br />
                            סיבת הפניה: <Box fontSize={'2xl'} fontWeight={'bold'}>{modalItem.user_reason}</Box>
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
                            <Th>מצב הפניה</Th>
                            <Th>פעולות</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {contacts && contacts.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.name}</Td>
                                <Td>{item.phone}</Td>
                                <Td>{item.category}</Td>
                                <Td>
                                    {!item.checked &&   <Badge cursor={'pointer'} onClick={()=>toggleChecked(item._id, true)} colorScheme='red' padding={2} fontSize={'xl'}>ממתין</Badge>}
                                    {item.checked && <Badge cursor={'pointer'} onClick={()=>toggleChecked(item._id, false)} colorScheme='green' padding={2} fontSize={'xl'}>טופל</Badge>}
                                </Td>
                                <Td>
                                    <Button m={1} colorScheme='green'><Link target="_blank" href={'http://wa.me/+972'+item.phone} ><BsWhatsapp /></Link></Button>
                                    <Button m={1} colorScheme='blue'><Link href={'tel:+972'+item.phone}><BsFillTelephoneFill  /></Link></Button>
                                    <Button m={1} onClick={() => showContact(item.name, item.phone, item.category, item.checked)}><BsEyeFill /></Button>
                                    <Button m={1} colorScheme='red' onClick={() => deleteContact(item._id)}><BsFillTrashFill /></Button>
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