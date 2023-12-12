export class SeededRandom {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    // Линейный конгруэнтный генератор
    private next(): number {
        const a = 1664525;
        const c = 1013904223;
        const m = 2 ** 32;

        this.seed = (a * this.seed + c) % m;
        return this.seed / m;
    }

    // Функция для получения случайного числа в заданном диапазоне
    public nextInRange(min: number, max: number): number {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
}

// function generateRandomNumbers(fullName: string): number[] {
//     // Преобразуем строку в числовой seed
//     let seed = 0;
//     for (let i = 0; i < fullName.length; i++) {
//         seed += fullName.charCodeAt(i);
//     }

//     // Добавляем текущую дату к seed
//     const currentDate = new Date().toISOString().slice(0, 10); // только дата без времени
//     for (let i = 0; i < currentDate.length; i++) {
//         seed += currentDate.charCodeAt(i);
//     }

//     const rng = new SeededRandom(seed);

//     // Генерируем пять случайных чисел от 1 до 78
//     const randomNumbers: number[] = [];
//     for (let i = 0; i < 5; i++) {
//         randomNumbers.push(rng.nextInRange(1, 78));
//     }

//     return randomNumbers;
// }

// // Пример использования
// const result = generateRandomNumbers("Иванов Иван Иванович");
// console.log(result);


// оздание Telegram бота:

// Найдите в Telegram бота @BotFather и следуйте инструкциям для создания нового бота. В результате вы получите токен, который будет использоваться для аутентификации запросов к API Telegram.
// Установка библиотеки для работы с Telegram API:

// Для удобства можно использовать библиотеку, например node-telegram-bot-api, которая упрощает взаимодействие с Telegram API.
// Установите её через npm: npm install node-telegram-bot-api.
// Реализация отправки сообщений в Telegram:

// Используйте полученный токен и ID чата для отправки сообщений.
// Пример реализации на TypeScript:

// typescript
// Copy code
// import TelegramBot from 'node-telegram-bot-api';

// // Инициализация Telegram бота
// const token = 'ВАШ_TELEGRAM_BOT_TOKEN';
// const bot = new TelegramBot(token, { polling: true });
// const chatId = 'ВАШ_CHAT_ID';

// function sendTelegramMessage(message: string) {
//     bot.sendMessage(chatId, message).catch(error => {
//         console.error("Ошибка при отправке сообщения в Telegram:", error);
//     });
// }

// function generateRandomNumbers(fullName: string): number[] {
//     // ... ваш код генерации чисел ...

//     // Отправка сообщения в Telegram
//     sendTelegramMessage(`ФИО: ${fullName}, Сгенерированные числа: ${randomNumbers.join(', ')}`);

//     return randomNumbers;
// }

// // Пример использования
// const result = generateRandomNumbers("Иванов Иван Иванович");
// console.log(result);
// Важно:

// Убедитесь, что у вас есть ID чата, куда бот будет отправлять сообщения. Вы можете получить его, отправив сообщение вашему боту и используя метод getUpdates Telegram API.
// Будьте осторожны с токеном бота, не храните его в общедоступных местах.
// Убедитесь, что бот добавлен в чат, куда он должен отправлять сообщения.
// Этот код будет отправлять сообщение в Telegram каждый раз, когда вызывается функция generateRandomNumbers.