import "dotenv/config";
export async function weatherMoskow() {
  try {
    const response = await fetch(process.env.API_MOSKOW);
    if (!response.ok) {
    }
    const data = await response.json();

    const temp = Math.floor(data.current.temperature_2m);
    const windSpeed = Math.floor(data.current.wind_speed_10m);
    const isDay = () => {
      if (data.current.is_day === 1) {
        return true;
      } else {
        return false;
      }
    };
    const isRain = () => {
      if (data.current.rain === 0) {
        return false;
      } else {
        return true;
      }
    };

    return {
      temp,
      windSpeed,
      isDay: isDay(),
      isRain: isRain(),
    };
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
}

export async function weatherPiter() {
  try {
    const response = await fetch(process.env.API_PITERBURG);
    if (!response.ok) {
    }
    const data = await response.json();

    const temp = Math.floor(data.current.temperature_2m);
    const windSpeed = Math.floor(data.current.wind_speed_10m);
    const isDay = () => {
      if (data.current.is_day === 1) {
        return true;
      } else {
        return false;
      }
    };
    const isRain = () => {
      if (data.current.rain === 0) {
        return false;
      } else {
        return true;
      }
    };

    return {
      temp,
      windSpeed,
      isDay: isDay(),
      isRain: isRain(),
    };
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
}

export async function weatherKrasnoyarsk() {
  try {
    const response = await fetch(process.env.API_KRASNOYARSK);
    if (!response.ok) {
    }
    const data = await response.json();

    const temp = Math.floor(data.current.temperature_2m);
    const windSpeed = Math.floor(data.current.wind_speed_10m);
    const isDay = () => {
      if (data.current.is_day === 1) {
        return true;
      } else {
        return false;
      }
    };
    const isRain = () => {
      if (data.current.rain === 0) {
        return false;
      } else {
        return true;
      }
    };

    return {
      temp,
      windSpeed,
      isDay: isDay(),
      isRain: isRain(),
    };
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
}

export async function weatherNovosib() {
  try {
    const response = await fetch(process.env.API_NOWOSIBIRSK);
    if (!response.ok) {
    }
    const data = await response.json();

    const temp = Math.floor(data.current.temperature_2m);
    const windSpeed = Math.floor(data.current.wind_speed_10m);
    const isDay = () => {
      if (data.current.is_day === 1) {
        return true;
      } else {
        return false;
      }
    };
    const isRain = () => {
      if (data.current.rain === 0) {
        return false;
      } else {
        return true;
      }
    };

    return {
      temp,
      windSpeed,
      isDay: isDay(),
      isRain: isRain(),
    };
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
}