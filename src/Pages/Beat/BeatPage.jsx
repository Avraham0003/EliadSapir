import React from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'

function BeatPage() {
    return (
            <>
            <Box width={'100%'} height={'100vh'} bgColor={'rgba(0,0,0,0.9)'} display={'block'} padding={100}>
                <Heading color={'white'}> ביט 1</Heading>

                <Button>קנה עכשיו</Button>
            </Box>
            </>
    )
}

export default BeatPage