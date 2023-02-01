<template>
    <div class="clock-wrap" :key="renderTime">
      <NumbersContainer/>
      <div class="hands-wrap">

        <svg :style="{fill: 'none', 'strokeWidth': 40}" width="100%" height="100%" viewBox='0 0 400 400'>
          <path v-for="arc in arcData.arcs"
          :id="arc.id"
          :d="arc.path"
          :stroke="arc.color"
          :strokeLinecap="arc.rounded ? 'round' : ''"
          />
          <line
            :x1="200"
            :y1="200"
            :x2="200"
            :y2="75"
            :style="{stroke: '#AAA', 'strokeWidth': 20}"
            :transform="`rotate(${hourHandDegrees} 200 200)`"
            stroke-linecap="round"
          />
          <line
          :x1="200"
          :y1="200"
            :x2="200"
            :y2="20"
            :style="{stroke: 'orange', 'strokeWidth': 10}"
            :transform="`rotate(${minuteHandDegrees} 200 200)`"
            stroke-linecap="round"
          />
          <line
          :x1="200"
          :y1="200"
            :x2="200"
            :y2="20"
            :style="{stroke: '#B9B9B9', 'strokeWidth': 1.5}"
            :transform="`rotate(${secondHandDegrees} 200 200)`"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
</template>

<script>
    import {svgArcBuilder} from './svg-arc-builder.js';
    import NumbersContainer from './NumbersContainer.vue';
    export default {
        name: "Clock",
        components: {NumbersContainer},
        data() {
          return {
            timer: null,
            renderTime: new Date(),
            wakeHour: 6,
            wakeMinute: 30
          }
        },
        computed: {
          secondHandDegrees() {
            return ((this.renderTime.getTime() % 60000)/60000)*360;
          },
          minuteHandDegrees() {
            return ((this.renderTime.getTime() % 3600000)/3600000)*360;
          },
          hourHandDegrees() {
            const millisIntoDay = this.renderTime.getTime() % 86400000;
            const secondsIntoDay = millisIntoDay / 1000;
            const minutesIntoDay = secondsIntoDay / 60;
            const hoursAfter12 = (minutesIntoDay / 60) - (this.renderTime.getTimezoneOffset()/60) - 12;
            return (hoursAfter12 / 12) * 360;
          },
          arcData() {
            const arcBuilder = svgArcBuilder();
            console.log('Minutes from midnight')
            console.log((this.renderTime.getHours()*60) + this.renderTime.getMinutes());
            arcBuilder.addConfig({startDegrees: 0, lengthInDegrees: (59.99999/60) * 360, color: 'gray', rounded: false});
            if(this.renderTime.getHours()%12 === this.wakeHour){

            }else if (this.renderTime.getHours()%12 === this.wakeHour + 1){
              arcBuilder.addConfig({startDegrees: (0/60) * 360, lengthInDegrees: (30/60) * 360, color: 'red', rounded: false});
              arcBuilder.addConfig({startDegrees: (0/60) * 360, lengthInDegrees: (30/60) * 360, color: 'red', rounded: false});
            }
            return {
              arcs: arcBuilder.getArcs()
            };
          }
        },
        mounted() {
          this.timer = setInterval(() => {
            this.renderTime = new Date();
          }, 100);
        }

    }
</script>

<style scoped lang="scss">
.clock-wrap {
background: black;
  .hands-wrap {
    margin: 0 25%;
  }
}
</style>