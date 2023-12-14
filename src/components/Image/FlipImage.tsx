import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import PlaceholderImage from '../Placeholder/PlaceholderImage';

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
                sx={{ transformStyle: 'preserve-3d' }}>
                <Box
                    position='absolute'
                    width='100%'
                    height='100%'
                    sx={{ backfaceVisibility: 'hidden' }}>
                    {imageIsLoading ? (
                        <Image {...imageProps} />
                    ) : (
                        <div style={{ position: 'relative' }}>
                            <PlaceholderImage
                                boxProps={{
                                    w: imageProps.width,
                                    h: imageProps.height,
                                }}
                            />
                            <img
                                {...imageProps}
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '1px',
                                    height: '1px',
                                    overflow: 'hidden',
                                }}
                                loading='lazy'
                                onLoad={handleImageLoad}
                            />
                        </div>
                    )}
                </Box>
                <Box
                    position='absolute'
                    width='100%'
                    height='100%'
                    transform='rotateY(180deg)'
                    sx={{ backfaceVisibility: 'hidden' }}>
                    {backContent}
                </Box>
            </Box>
        </Box>
    );
};
