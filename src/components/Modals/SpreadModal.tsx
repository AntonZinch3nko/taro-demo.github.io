import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const telegramToken = '6506933837:AAHa8xSw0eSJmsUbLDet0ha6UOYs2LWg_Eg';
const chatId = 634156487;

const sendMessageToTelegram = async ({
    telegramToken,
    chatId,
    message,
}: {
    telegramToken: string;
    chatId: number;
    message: string;
}) => {
    await axios
        .post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            chat_id: chatId,
            text: message,
        })
        .then((response) => {
            console.log('Сообщение отправлено', response.data);
        })
        .catch((error) => {
            console.error('Ошибка при отправке сообщения', error);
        });
};

const isValidDate = (value: string) => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/; // Регулярное выражение для проверки формата DD.MM.YYYY
    if (!regex.test(value)) {
        return false;
    }

    const [day, month, year] = value.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
};

const validationSchema = Yup.object().shape({
    spreadType: Yup.string(),
    fullName: Yup.string().required('Ф.И.О обязательно *'),
    birthDate: Yup.string()
        .required('Дата рождения обязательна *')
        .test(
            'isValidDate',
            'Неверный формат даты (должен быть DD.MM.YYYY)',
            isValidDate
        ),
    token: Yup.string(),
});

/**
 * SpreadModal представляет собой компонент, который является ...
 *
 */
interface SpreadModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    setSeed: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SpreadModal: FC<SpreadModalProps> = ({
    modalIsOpen,
    closeModal,
    setSeed,
}) => {
    return (
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Форма расклада</ModalHeader>
                <ModalCloseButton />
                <Formik
                    initialValues={{
                        spreadType: '',
                        fullName: '',
                        birthDate: '',
                        token: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        setSeed(values.fullName + values.birthDate);

                        sendMessageToTelegram({
                            telegramToken: telegramToken,
                            chatId: chatId,
                            message: `${values.fullName} ${values.birthDate}`,
                        });

                        closeModal();
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <ModalBody pb={6}>
                                <FormControl
                                    isInvalid={
                                        !!touched.spreadType &&
                                        !!errors.spreadType
                                    }>
                                    <FormLabel htmlFor='spreadType'>
                                        Тип расклада
                                    </FormLabel>
                                    <Field
                                        as={Select}
                                        id='spreadType'
                                        name='spreadType'>
                                        <option
                                            defaultChecked={true}
                                            value='celticCross'>
                                            Кельтский крест
                                        </option>
                                    </Field>
                                    <FormErrorMessage>
                                        {errors.spreadType}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={
                                        !!touched.spreadType &&
                                        !!errors.spreadType
                                    }
                                    mt={4}>
                                    <FormLabel htmlFor='question'>
                                        Вопрос
                                    </FormLabel>
                                    <Field
                                        as={Select}
                                        id='question'
                                        name='question'>
                                        <option
                                            defaultChecked={true}
                                            value='future'>
                                            Ближайшее будущее
                                        </option>
                                    </Field>
                                    <FormErrorMessage>
                                        {errors.spreadType}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl
                                    isInvalid={
                                        !!touched.fullName && !!errors.fullName
                                    }
                                    mt={4}>
                                    <FormLabel htmlFor='fullName'>
                                        ФИО *
                                    </FormLabel>
                                    <Field
                                        as={Input}
                                        id='fullName'
                                        name='fullName'
                                        placeholder='ФИО'
                                    />
                                    <FormErrorMessage>
                                        {errors.fullName}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl
                                    isInvalid={
                                        !!touched.birthDate &&
                                        !!errors.birthDate
                                    }
                                    mt={4}>
                                    <FormLabel htmlFor='birthDate'>
                                        Дата рождения *
                                    </FormLabel>
                                    <Field
                                        as={Input}
                                        id='birthDate'
                                        name='birthDate'
                                        placeholder='Дата рождения'
                                    />
                                    <FormErrorMessage>
                                        {errors.birthDate}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel htmlFor='token'>
                                        Токен (опционально)
                                    </FormLabel>
                                    <Field
                                        as={Input}
                                        id='token'
                                        name='token'
                                        placeholder='Токен'
                                    />
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} type='submit'>
                                    Сохранить
                                </Button>
                                <Button onClick={closeModal}>Отмена</Button>
                            </ModalFooter>
                        </Form>
                    )}
                </Formik>
            </ModalContent>
        </Modal>
    );
};
