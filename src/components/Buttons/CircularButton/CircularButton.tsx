import { Box, BoxProps, Button, ButtonProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { useChakra } from '../../../ui/useChakra';

interface CircularButtonWithIcon extends ButtonProps {
    icon: ReactNode;
    boxProps?: BoxProps;
    buttonProps?: ButtonProps;
}

const CircularButtonWithIcon: FC<CircularButtonWithIcon> = ({
    icon,
    boxProps,
    buttonProps,
    ...props
}) => {
    const { buttonShadow } = useChakra();
    
    return (
        <Box {...boxProps}>
            <Button
                {...buttonProps}
                size='sm'
                variant='ghost'
                borderRadius='50%'
                display='flex'
                justifyContent='center'
                alignItems='center'
                boxShadow={buttonShadow}
                {...props}>
                {icon}
            </Button>
        </Box>
    );
};

export default CircularButtonWithIcon;
