<header>
<div align="center">
<h1>🌤️ Telegram weather bot</h1>

<h2>Телеграмм бот погоды написанный полностью на JavaScript с использованием фреймворка Telegraf</h2>

<a> <img src="https://img.shields.io/badge/License-MIT-blue" /> </a>
<a> <img src="https://img.shields.io/badge/Version-1.0.1-red" /> </a>
</div>
</header>

## Корректировка файла .env

Откройте файл *.env* и замените все строки на свои, подробная инструкция есть в FAQ

## 🚀 Инструкция по запуску

### 📍 Запуск Linux MacOS

```bash
  git clone https://github.com/codi-mvp/weather-bot-tg
```
```bash
  cd weather-bot-tg
```
```bash
  npm install
```
```bash
  npm run test
```

### 📍 Запуск Windows

Скачайте исходный код последней версии, распакуйте его в папку,
откройте терминал в папке с проектом и выполните:
```bash
  npm install
```
```bash
  npm run test
```

## Roadmap

- Добавить больше городов

- Добавить больше информации о погоде


## FAQ

#### Почему бот не работает а в консоли ошибка *FetchError: request to https://...*

Включите/Выключите VPN, если не поможет перезагрузите WIFI роутер

#### Откуда брать BOT_TOKEN, API...

*BOT_TOKEN*: откройте [Bot Father](https://t.me/BotFather) далее */newbot* - введите имя - введите юзернейм с *bot/_bot* на конце,
скопируйте токен бота и вставьте его в BOT_TOKEN внутри .env

*API_CITY*: [OpenWeather](https://openweathermap.org/api) или любой другой API погоды 
