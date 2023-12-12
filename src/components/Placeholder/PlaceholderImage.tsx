import React, { useState } from 'react';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { animated, useSpring } from 'react-spring';
import { ColorHelper } from '../../helpers/ColorHelper';

interface PlaceholderImageProps {
    boxProps: BoxProps;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ boxProps }) => {
    const [rotation] = useSpring(() => ({
        rotation: 360,
        from: { rotation: 0 },
        config: { duration: 1000 },
        reset: true,
        loop: true,
    }));

    const [borderColor, setBorderColor] = useState(ColorHelper.getRandomColor());

    const handleColorChange = () => {
        setBorderColor(ColorHelper.getRandomColor());
    };

    return (
        <Box
            {...boxProps}
            itemID={"placeholder-image"}
            margin='5px'
            borderRadius='20px'
            bg={useColorModeValue('gray.200', 'gray.700')}
            boxShadow='0 0 20px rgba(0, 0, 0, 0.5)'
            position='relative'
            onClick={handleColorChange}>
            <Box
                position='absolute'
                width='100%'
                height='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <animated.div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'transparent',
                        borderTop: `8px solid ${borderColor}`,
                        borderBottom: `8px solid ${borderColor}`,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderRadius: '50%',
                        transform: rotation.rotation.to(
                            (r) => `rotate(${r}deg)`
                        ),
                    }}></animated.div>
            </Box>
        </Box>
    );
};

export default PlaceholderImage;
