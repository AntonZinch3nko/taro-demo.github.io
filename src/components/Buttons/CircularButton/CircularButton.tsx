import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

const CircularButtonWithIcon = () => {
  return (
    <Box>
      <Button
        size={"sm"}
        variant="ghost"
        borderRadius="50%" // Делаем кнопку круглой
        width="40px" // Задаем ширину и высоту, чтобы сделать кнопку круглой
        height="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        colorScheme="black" // Цвет кнопки
      >
        <RepeatIcon  />
      </Button>
    </Box>
  );
};

export default CircularButtonWithIcon;