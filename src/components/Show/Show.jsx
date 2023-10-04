import { Box, Image, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import img1 from './2.jpg';
import img2 from './4.jpg';
import img3 from './6.jpg';
import img4 from './1.jpg';
import img5 from './3.jpg';
import img6 from './5.jpg';

const images = [
  {photo: img1, text:`
  יש לכם שיר שהפיקו ? או שהקלטתם אבל אתם לא רוצים להתפשר על הסאונד?
עריכת מיקס ומאסטר זה בשבילכם.
יחד עם הנסיון הרב והחלל המדויק שיש לי באולפן אוכל להוציא לכם את הסאונד של הגדולים.`},
  {photo: img2, text: 'text 22222' },
  {photo: img3, text:`
    הפקה מוזיקלית לשיר שכתבתם או הלחנתם יחד איתי, לאלו החולמים לפרוץ בעולם במוזיקה ולקחת את החלום לצעד הבא .זאת צריכה להיות ההשקעה שלכם.`},
  {photo: img4, text:`
    באלכם לעשות קליפ לקאבר או לשיר שלכם?
אבל אין לכם יותר מדי תקציב להוציא על קליפים? צילום קליפ באולפן יתן לכם את המענה הויזאולי וגם במחיר שנוח לכיס`},
  {photo: img5, text:`
    יש לכם ערך שאתם רוצים לחלוק לעולם?
 או שאתם בעלי עסקים ורוצים יותר חשיפה ללקוחות ולעסקים נוספים?
הקלטות פודקאסט זה הדבר הבא,כולם כבר
משתמשים בזה.אל תשארו מאחור!`},
  { photo: img6, text: 'text' }];
function Show() {

  const [isHovering, setIsHovering] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  const handleMouseOver = (id) => {
    setIsHovering(true);
    setHoverId(id);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverId(null);
  }

  const text_style = {
      zIndex: '100',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      bg: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      transition: 'all 0.2s ease',
      fontSize: ['15px','25px',],
      padding: '10px',

  }
  const image_style = {
    transition: 'all 0.4s ease',
    filter: 'saturate(1.2)',
    objectFit: 'cover',
    w: ['50vw', '36vw', '31vw', '26vw', '24vw'],
    position: 'relative' // Add relative positioning to the images
  };



  return (
    <>
      <Flex gap="0" wrap="wrap" justify="center">

        {
          images.map(function (image, index) {
            return (
              <Box key={index} position="relative" onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
                {isHovering && hoverId === index && <Box dir='rtl' sx={text_style}>{image.text}</Box>}
                <Image sx={image_style} src={image.photo} />
              </Box>
            );
          })
        }
      </Flex>
    </>
  );
}

export default Show;
