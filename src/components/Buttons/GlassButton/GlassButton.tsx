import {
    Button,
    ButtonProps,
    useTheme
} from '@chakra-ui/react';
import { FC } from 'react';

interface GlassButtonProps {
    text: string;
    onClick?: () => void;
    buttonProps?: ButtonProps;
}

const GlassButton: FC<GlassButtonProps> = ({
    text,
    onClick,
    buttonProps,
}) => {
    const theme = useTheme();

    return (
        <Button
            variant={'main'}
            onClick={onClick}
            borderRadius='6px'
            padding='10px 20px'
            fontSize='16px'
            backdropFilter='blur(10px)'
            boxShadow={theme?.shadows?.light}
            transition='transform 0.3s ease, box-shadow 0.3s ease'
            position='relative'
            overflow='hidden'
            {...buttonProps}>
            {text}
        </Button>
    );
};

export default GlassButton;
