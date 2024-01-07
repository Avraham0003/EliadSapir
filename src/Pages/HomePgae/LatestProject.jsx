import YouTube from 'react-youtube';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, Button, Box, Container, Center, Link } from '@chakra-ui/react';

export default function Contact(props) {
    const [project, setProject] = useState({
        name: '',
        youtube_id: '',
    });

    useEffect(() => {
        const fetchFavorite = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_SERVER_URL + `/projects/get_favorite`);
                setProject(response.data.project);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };
        fetchFavorite();
    }, []);

    return (
        <>
            <Container bg={'rgba(0,0,0,0.2)'} maxWidth={'container.sm'} padding={5}>
                <Text color={'white'} fontSize={'xl'} textAlign={'center'} m={2}>
                    {project && project.project_name}
                </Text>
                <Box>
                    <YouTube
                        videoId={project && project.youtube_url}
                        opts={{
                            height: '390',
                            width: window.innerWidth <= 600 ? '100%' : '600px', // Adjust the breakpoint as needed
                        }}
                    />
                </Box>
            </Container>
            <Center>
                <Button textAlign={'center'}>
                    <Link href={'./projects/'}> לכל הפרוייקטים שלי{' >'} </Link>
                </Button>
            </Center>
        </>
    );
}
