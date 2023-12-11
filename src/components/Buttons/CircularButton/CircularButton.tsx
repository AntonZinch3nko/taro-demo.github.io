import React, { FC } from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

interface CircularButtonWithIcon extends ButtonProps {}

const CircularButtonWithIcon: FC<CircularButtonWithIcon> = ({ ...props }) => {
    return (
        <Box
            position={'absolute'}
            top={'90%'}
            left={'calc(50% - 20px)'}
            zIndex={2}>
            <Button
                {...props}
                size='sm'
                variant='ghost'
                borderRadius='50%' // Делаем кнопку круглой
                width='40px' // Задаем ширину и высоту, чтобы сделать кнопку круглой
                height='40px'
                display='flex'
                backgroundColor={'black'}
                justifyContent='center'
                alignItems='center'
                colorScheme='black' // Цвет кнопки
                boxShadow='0 0 10px rgba(255, 255, 255, 0.5)' // Добавляем светлую тень
            >
                <RepeatIcon />
            </Button>
        </Box>
    );
};

export default CircularButtonWithIcon;
