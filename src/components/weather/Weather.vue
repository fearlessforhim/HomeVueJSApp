<template>
    <div 
    v-if="this.weatherData.daily"
    class="weather-wrap"
    >
        <div class="weather-date">
            {{ this.weatherDate }}
        </div>
        <div class="high-low-label">
            High / Low
        </div>
        <div class="high-low-values">
            {{ this.dailyToday.temp.max }} / {{ this.dailyToday.temp.min }}
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
            weatherData: {}
        }
    },
    computed: {
        weatherDate() {
            const weatherDate = new Date(this.weatherData.daily[0].dt);
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
        if(!response.ok) return;

        const apiKey = await apiKeyResponse.text();

        if(!apiKey) return;

        const response = await fetch(`http://api.openweathermap.org/data/3.0/onecall?lat=45.583991&lon=-122.410082&appid=${apiKey}&units=imperial`);
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
    position: absolute;
    color: white;
    font-size: 20px;
    right: 0;
    bottom: 0;
    padding: 30px;

    .high-low-label {
        text-align: center;
        border-top: 2px solid white;
        padding-top: 20px;
    }

    .high-low-values {
        text-align: center;
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
