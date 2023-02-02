<template>
    <div
      class="clock-budget-container"
    >
      <Clock/>
      <Budget/>
    </div>
  </template>
  
  <script>
      import Clock from './clock/Clock.vue';
      import Budget from './budget/Budget.vue';
    
      export default {
          name: "ClockAndBudget",
          components: {Clock, Budget}
  
      }
  </script>
  
  <style scoped lang="scss">
  .clock-budget-container {
    height: 100%;
    background: black;
    display: flex;
  }
  </style>