import "dotenv/config";
import { error } from "node:console";

async function weather(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка статус сервера ${response}`);
    }
    const data = await response.json();
    if (!data.current) {
      throw new Error(`Ошибка форматирования в JSON`);
    }

    return {
      temp: Math.floor(data.current.temperature_2m),
      windSpeed: Math.floor(data.current.wind_speed_10m),
      isDay: data.current.is_day === 1,
      isRain: data.current.rain !== 0,
    };
  } catch (error) {
    console.error(`Ошибка ${error.message}`);
    throw error;
  }
}
export function weatherMoskow() {
  return weather(process.env.API_MOSKOW);
}

export function weatherPiter() {
  return weather(process.env.API_PITERBURG);
}

export function weatherKrasnoyarsk() {
  return weather(process.env.API_KRASNOYARSK);
}

export function weatherNovosib() {
  return weather(process.env.API_NOWOSIBIRSK);
}
