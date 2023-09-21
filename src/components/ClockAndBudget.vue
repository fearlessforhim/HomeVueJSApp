<template>
    <div
      class="clock-budget-container"
    >
      <Clock/>
      <BudgetAndWeather/>
    </div>
  </template>
  
  <script>
      import Clock from './clock/Clock.vue';
      import BudgetAndWeather from './budget/BudgetAndWeather.vue';
    
      export default {
          name: "ClockAndBudget",
          components: {Clock, BudgetAndWeather}
  
      }
  </script>
  
  <style scoped lang="scss">
  .clock-budget-container {
    height: 100%;
    background: black;
    display: flex;
  }
  </style>