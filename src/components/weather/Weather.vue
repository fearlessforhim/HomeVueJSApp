<template>
    <div class="weather-wrap">
        <div class="weather-date">
            {{ this.weatherDate }}
        </div>
        <div class="high-low-label">
            High / Low
        </div>
        <div class="high-low-values">
            {{ this.dailyToday.temp.max.toFixed(0) }}&#176F / {{ this.dailyToday.temp.min.toFixed(0) }}&#176F
        </div>
        <div class="img-wrap">
            <img :src="this.iconURL" />
        </div>
        <div class="summary">
            {{ this.dailyToday.summary }}
        </div>
        <div class="sunrise-sunset-wrap">
            <div class="sunrise-wrap">
                <FontAwesomeIcon :icon="this.icons.faSun" />
                {{ this.sunRiseTime }}
            </div>
            <div class="sunset-wrap">
                <FontAwesomeIcon :icon="this.icons.faMoon" />
                {{ this.sunSetTime }}
            </div>
        </div>
        <div class="day-length">
            {{ this.dayLength }}
        </div>
    </div>
</template>
  
<script>

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: "Weather",
    components: { FontAwesomeIcon },
    data() {
        return {
            weatherData: {
                daily: [
                    {
                        dt: 1695307872,
                        sunrise: 1695304513,
                        sunset: 1695348623,
                        weather: [
                            {
                                icon: '10d'
                            }
                        ],
                        temp: {
                            max: 3.234,
                            min: 1.567
                        },
                        summary: 'This is a long test description to test word wrap in the weather widget'
                    }
                ]
            },
            icons: {
                faSun,
                faMoon
            }
        }
    },
    computed: {
        weatherDate() {
            const weatherDate = new Date(this.weatherData.daily[0].dt * 1000);
            return weatherDate.toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'short' });
        },
        dailyToday() {
            return this.weatherData.daily[0];
        },
        sunRiseTime() {
            const date = new Date(this.weatherData.daily[0].sunrise * 1000);
            return `${date.getHours()}:${date.getMinutes()}`;
        },
        sunSetTime() {
            const date = new Date(this.weatherData.daily[0].sunset * 1000);
            return `${date.getHours()}:${date.getMinutes()}`;
        },
        dayLength() {
            const totalSeconds = this.weatherData.daily[0].sunset - this.weatherData.daily[0].sunrise;
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds - (hours * 3600))/60);
            const seconds = totalSeconds - (hours * 3600) - (minutes * 60);
            return `${hours}:${minutes}:${seconds}`;
        },
        iconURL() {
            return `https://openweathermap.org/img/wn/${this.weatherData.daily[0].weather[0].icon}@4x.png`;
        }
    },
    async created() {
        const apiKeyResponse = await fetch('assets/weather-key.txt');
        if (!apiKeyResponse.ok) return;

        const apiKey = await apiKeyResponse.text();

        if (!apiKey) return;

        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=45.5863014&lon=-122.403277&appid=${apiKey}&units=imperial`);
        if (response.ok) {
            const text = await response.text();
            this.weatherData = JSON.parse(text);
        } else {
            console.log(response);
        }
    }

}
</script>
  
<style scoped lang="scss">
.weather-wrap {
    color: white;
    font-size: 32px;
    right: 0;
    bottom: 0;
    padding: 30px;
    width: 100%;
    margin-top: 50px;

    .high-low-label {
        text-align: center;
        border-top: 2px solid white;
        padding-top: 20px;
    }

    .high-low-values {
        text-align: center;
        font-weight: bold;
    }

    .img-wrap {
        width: 100%;
        text-align: center;
    }

    .summary {
        text-align: center;
    }

    .sunrise-sunset-wrap {
        border-top: 1px solid white;
        padding-top: 10px;
        display: flex;
        text-align: center;

        svg {
            width: 100%;
        }
    }

    .day-length {
        text-align: center;
        font-size: 16px;
    }
}
</style>
