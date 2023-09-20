<template>
    <div
      class="clock-budget-container"
    >
      <Clock/>
      <Budget/>
      <Weather/>
    </div>
  </template>
  
  <script>
      import Clock from './clock/Clock.vue';
      import Budget from './budget/Budget.vue';
      import Weather from './weather/Weather.vue';
    
      export default {
          name: "ClockAndBudget",
          components: {Clock, Budget, Weather}
  
      }
  </script>
  
  <style scoped lang="scss">
  .clock-budget-container {
    height: 100%;
    background: black;
    display: flex;
  }
  </style>