import {
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react';
import React, { FC } from 'react';

/**
 * SpreadModal представляет собой компонент, который является ...
 *
 */
interface SpreadModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

export const SpreadModal: FC<SpreadModalProps> = ({
    modalIsOpen,
    closeModal,
}) => {
    console.log('SpreadModal render');

    return (
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent backgroundColor={'black'} padding={'80px'}>
                <ModalCloseButton
                    style={{ color: 'black !important' }}
                    size={'sm'}
                />
                {/* <Flex h='400px' justifyContent={'center'}>
            <CircularButton
                buttonProps={{
                    width: '40px',
                    height: '40px',
                }}
                boxProps={{
                    zIndex: 2,
                    left: 'calc(50% - 20px)',
                    top: '90%',
                    position: 'absolute',
                }}
                icon={<RepeatIcon />}
                onClick={() => {
                    setIsFlipped((prev) => !prev);
                }}
            />
            <FlipImage
                isFlipped={isFlipped}
                imageProps={{
                    onClick: () => {
                        setIsFlipped((prev) => !prev);
                    },
                    src: `${images[currentImage]}`,
                    loading: 'lazy',
                    style: {
                        width: '300px',
                        height: '400px',
                        margin: '5px',
                        cursor: 'pointer',
                        transition: '0.3s',
                        overflow: 'hidden',
                        position: 'relative',
                    },
                }}
                backContent={
                    <Flex
                        backgroundColor={
                            DesignSystemLight.colors.primary
                        }
                        w='300px'
                        h='400px'
                        m='5px'
                        p='20px'
                        borderRadius={'20px'}>
                        <Box
                            border={'4px solid black'}
                            padding={'20px'}
                            w='100%'
                            sx={{
                                borderImage:
                                    'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, #3A3A3A 50%, rgba(0, 0, 0, 0.5) 100%) 1 / 1 / 0 stretch',
                            }}>
                            <Flex wrap={'wrap'} justify={'center'}>
                                <Heading
                                    as='h1'
                                    size='xl'
                                    textAlign={'center'}
                                    mb={4}
                                    color={
                                        DesignSystemLight.colors.text
                                    }>
                                    {imagesData[currentImage].title}
                                </Heading>
                                <Text
                                    fontSize='lg'
                                    maxWidth='600px'
                                    textAlign='center'
                                    color={
                                        DesignSystemLight.colors
                                            .secondaryText
                                    }>
                                    {
                                        imagesData[currentImage]
                                            .description
                                    }
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                }
            />
        </Flex> */}
            </ModalContent>
        </Modal>
    );
};
