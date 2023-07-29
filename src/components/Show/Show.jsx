import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'



const Box_Style = {
    bg: 'rgba(0,0,0,0.9)',
    py: ['1', '10'],
    color: 'white',
    textAlign: 'center',
} 


function Show() {
return (
    <>
    <SimpleGrid columns={[2,3]} spacing='0.5px'>
        <Box sx={Box_Style}>new 1</Box>
        <Box sx={Box_Style}>new 2</Box>
        <Box sx={Box_Style}>new 2</Box>
        <Box sx={Box_Style}>new 2</Box>
        <Box sx={Box_Style}>new 2</Box>
    </SimpleGrid>
    
    </>
    )
}

export default Show