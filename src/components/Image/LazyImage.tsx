import React, { FC, useEffect, useState } from 'react';
import PlaceholderImage from '../Placeholder/PlaceholderImage';

/**
 * LazyImage представляет собой компонент, который является ...
 *
 */
interface LazyImageProps {
    imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
}

export const LazyImage: FC<LazyImageProps> = ({ imageProps }) => {
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageIsLoading(true);
    };

    return imageIsLoading ? (
        <img {...imageProps} />
    ) : (
        <div style={{ position: 'relative' }}>
            <PlaceholderImage />
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
    );
};