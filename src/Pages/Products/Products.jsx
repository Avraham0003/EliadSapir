import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/HeaderBlack';
import { Box, Center, Text, Flex, Card, CardBody, Image, Stack, Heading, CardFooter, Button, Link } from '@chakra-ui/react';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';


function Products() {
  const [products, setProducts] = useState([]);

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

  const heading = {
    fontSize: ['40px', '50px', '80px'],
    fontWeight: 'bold',
  };

  const svgCode = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><g transform="rotate(0 960 540) translate(-0 -0) scale(1)">
<rect width="1920" height="1080" fill="rgb(255, 255, 255)"></rect><g transform="translate(0, 0)">
<path fill="#10171f" fill-opacity="1" d="M0,357.965L106.667,341.046C213.333,324.127,426.667,290.289,640,281.936C853.333,273.584,1066.667,290.717,1280,283.015C1493.333,275.314,1706.667,242.778,1813.333,226.511L1920,210.243L1920,1080L1813.333,1080C1706.667,1080,1493.333,1080,1280,1080C1066.667,1080,853.333,1080,640,1080C426.667,1080,213.333,1080,106.667,1080L0,1080Z"></path></g><g transform="translate(0, 360)">
<path fill="#10171f" fill-opacity="1" d="M0,73.367L106.667,76.829C213.333,80.291,426.667,87.215,640,121.713C853.333,156.211,1066.667,218.283,1280,216.44C1493.333,214.598,1706.667,148.842,1813.333,115.964L1920,83.085L1920,720L1813.333,720C1706.667,720,1493.333,720,1280,720C1066.667,720,853.333,720,640,720C426.667,720,213.333,720,106.667,720L0,720Z"></path></g><g transform="translate(0, 720)">
<path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,311.643L106.667,291.092C213.333,270.542,426.667,229.44,640,193.461C853.333,157.482,1066.667,126.625,1280,114.696C1493.333,102.767,1706.667,109.766,1813.333,113.265L1920,116.765L1920,360L1813.333,360C1706.667,360,1493.333,360,1280,360C1066.667,360,853.333,360,640,360C426.667,360,213.333,360,106.667,360L0,360Z"></path></g></g>
</svg>
  `;

  return (
    <>
      <Header />

        <Center>
          <Text sx={heading} className='Heading'>
            מוצרי האולפן
          </Text>
        </Center>

      <Box
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'auto', // Adjust as needed
          marginBottom: 10
        }}
      >
        <Flex gap="4" wrap="wrap" justify="center" paddingBottom={'10vh'}>
          {products &&
            products.map((item) => (
              <Card maxW='sm' key={item.product_name}>
                <CardBody>
                  <Image src={item.product_image} borderRadius='lg' />
                  <Stack mt='6' spacing='2'>
                    <Heading size='md'>
                      <Link href={`./product/${item._id}`}>{item.product_name}</Link>
                    </Heading>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    <Link href={`./product/${item._id}`}>פרטים נוספים</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </Flex>
      </Box>

      <Footer />
    </>
  );
}

export default Products;
