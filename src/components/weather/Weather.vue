<template>
    <div 
    class="weather-wrap"
    >
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
    </div>
</template>
  
<script>

export default {
    name: "Weather",
    data() {
        return {
            weatherData: {
                daily : [
                    {
                        dt: 1695307872,
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
            }
        }
    },
    computed: {
        weatherDate() {
            const weatherDate = new Date(this.weatherData.daily[0].dt * 1000);
            return weatherDate.toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short' });
        },
        dailyToday() {
            return this.weatherData.daily[0];
        },
        iconURL() {
            return `https://openweathermap.org/img/wn/${this.weatherData.daily[0].weather[0].icon}@4x.png`;
        }
    },
    async created() {
        const apiKeyResponse = await fetch('assets/weather-key.txt');
        if(!apiKeyResponse.ok) return;

        const apiKey = await apiKeyResponse.text();

        if(!apiKey) return;

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
}
</style>
