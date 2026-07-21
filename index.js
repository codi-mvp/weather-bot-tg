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
})

  function formateMessage(sityName, data) {
    if (!data) {
      return `Не получены данные о погоде в ${sityName}`;
    }

    const timeEmoji = data.isDay ? "☀️" : "🌙";
    const weatherEmoji = data.isRain ? "☔" : "";

    return `🌀 Погода в ${sityName}:${timeEmoji}${weatherEmoji}:
    Температура: ${data.temp}°C
    Скорость ветра: ${data.windSpeed} Км/ч`;
  }
  bot.hears("Москва", async (ctx) => {
      const data = await weatherMoskow();

      await ctx.reply(formateMessage("Москве", data));
  });

  bot.hears("Питербург", async (ctx) => {
    const data = await weatherPiter();

    await ctx.reply(formateMessage("Питербурге", data));
  });

  bot.hears("Красноярск", async (ctx) => {
    const data = await weatherKrasnoyarsk();

    await ctx.reply(formateMessage("Красноярске", data));
  });

  bot.hears("Новосибирск", async (ctx) => {
    const data = await weatherNovosib();

    await ctx.reply(formateMessage("Новосибирске", data));
  });

bot.help(async (ctx) => {
  const packageData = JSON.parse(await fs.readFile("package.json", "utf-8"));
  await ctx.reply(
    `Проект находится в разработке данная версия ${packageData.version}
Copyright (c) 2026 mRq`,
  );
});

bot.launch();
