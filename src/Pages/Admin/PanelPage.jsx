import Header from '../../components/Header/HeaderForAdmin'
import {
  Box,
  Text,
  Button,
  Divider,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  TabList
} from '@chakra-ui/react';
import Products from './Products';
import Articles from './Articles';
import Contact from './Contact';
import Projects from './Projects';

import AddProduct from './AddProduct';
import AddArticle from './AddArticle';
import AddProject from './AddProject';

export default function Simple() {


  const heading = {
    fontSize: '60px',
    fontWeight: 'bold',
    transition: '0.8s'
  }

  const buttonNavStyle = {
    width: '100%',
    fontSize: 'xl',
    marginY: '5px',
    bg: 'rgba(0,0,0,0.5)',
    color: 'white'
  }


  return (
    <>
      <Header />
      <Text textAlign={'center'} sx={heading} className='Heading'>פאנל ניהול</Text>
      <Divider height={'4px'}></Divider>

      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab width={'25%'}>צור קשר</Tab>
          <Tab width={'25%'}>מוצרים</Tab>
          <Tab width={'25%'}>מאמרים</Tab>
          <Tab width={'25%'}>פרוייקטים</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* צור קשר */}
            <Contact/>
          </TabPanel>

          <TabPanel>
            {/* מוצרים */}
            <AddProduct/>
            <Products />
          </TabPanel>

          <TabPanel>
            {/* מאמרים */}
            <AddArticle/>
            <Articles />
          </TabPanel>

          <TabPanel>
            {/* פרויקטים */}
           <AddProject/>
            <Projects />
          </TabPanel>
        
        </TabPanels>
      </Tabs>

    </>
  )
}