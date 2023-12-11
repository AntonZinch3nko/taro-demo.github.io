import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

/**
 * FlipImage представляет собой компонент, который является ...
 *
 */
interface FlipImageProps {
    imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
    backContent: ReactNode;
    isFlipped: boolean;
}

export const FlipImage: FC<FlipImageProps> = ({
    imageProps,
    backContent,
    isFlipped,
}) => {
    const [imageIsLoading, setImageIsLoading] = useState(false);

    const handleImageLoad = () => {
        setImageIsLoading(true);
    };

    return (
        <Box minW={'300px'} position='relative'>
            <Box
                position='relative'
                transform={isFlipped ? 'rotateY(180deg)' : 'none'}
                transition='transform 0.6s'
                sx={{ transformStyle: 'preserve-3d' }} // Using sx prop for transformStyle
            >
                <Box
                    position='absolute'
                    width='100%'
                    height='100%'
                    sx={{ backfaceVisibility: 'hidden' }} // Using sx prop for backfaceVisibility
                >
                    {imageIsLoading ? (
                        <Image {...imageProps} />
                    ) : (
                        <Box position='relative'>
                            <Image
                                {...imageProps}
                                position='absolute'
                                top='0'
                                left='0'
                                width='1px'
                                height='1px'
                                overflow='hidden'
                                loading='lazy'
                                onLoad={handleImageLoad}
                            />
                        </Box>
                    )}
                </Box>
                <Box
                    position='absolute'
                    width='100%'
                    height='100%'
                    transform='rotateY(180deg)'
                    sx={{ backfaceVisibility: 'hidden' }} // Using sx prop here as well
                >
                    {backContent}
                </Box>
            </Box>
        </Box>
    );
};
