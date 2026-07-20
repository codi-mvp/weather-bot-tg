import { Telegraf, Markup } from "telegraf";
import fs from "node:fs/promises";
import "dotenv/config";

import { weatherMoskow } from "./weather_result.js";
import { weatherPiter } from "./weather_result.js";
import { weatherKrasnoyarsk } from "./weather_result.js";
import { weatherNovosib } from "./weather_result.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  const firstName = ctx.from.first_name;
  await ctx.reply(
    `Привет, ${firstName}! Я бот, который поможет тебе узнать погоду. Пожалуйста, выбери один из городов ниже:
/help - Дополнительная информация`,
    Markup.keyboard([
      ["Москва", "Питербург"],
      ["Красноярск", "Новосибирск"],
    ]).resize(),
  );

  bot.hears("Москва", async (ctx) => {
    const data = await weatherMoskow();

    const time = data.isDay ? "☀️" : "🌙";
    const weather = data.isRain ? "☔" : "";

    await ctx.reply(`🌀 Погода в Москве${time}${weather}:
    Температура: ${data.temp}°C
    Скорость ветра: ${data.windSpeed} Км/ч`);
  });

  bot.hears("Питербург", async (ctx) => {
    const data = await weatherNovosib();

    const time = data.isDay ? "☀️" : "🌙";
    const weather = data.isRain ? "☔" : "";

    await ctx.reply(`🌀 Погода в Питере${time}${weather}:
  Температура: ${data.temp}°C
  Скорость ветра: ${data.windSpeed} Км/ч`);
  });

  bot.hears("Красноярск", async (ctx) => {
    const data = await weatherKrasnoyarsk();

    const time = data.isDay ? "☀️" : "🌙";
    const weather = data.isRain ? "☔" : "";

    await ctx.reply(`🌀 Погода в Красноярске${time}${weather}:
  Температура: ${data.temp}°C
  Скорость ветра: ${data.windSpeed} Км/ч`);
  });

  bot.hears("Новосибирск", async (ctx) => {
    const data = await weatherNovosib();

    const time = data.isDay ? "☀️" : "🌙";
    const weather = data.isRain ? "☔" : "";

    await ctx.reply(`🌀 Погода в Новосибирске${time}${weather}:
  Температура: ${data.temp}°C
  Скорость ветра: ${data.windSpeed} Км/ч`);
  });
});

bot.help(async (ctx) => {
  const packageData = JSON.parse(await fs.readFile("package.json", "utf-8"));
  await ctx.reply(
    `Проект находится в разработке данная версия ${packageData.version}
Copyright (c) 2026 mRq`,
  );
});

bot.launch();
