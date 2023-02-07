<template>
    <div
        class="budget-wrap"
      >
      <div
        v-for="b in budgetDisplay"
        :id="b.name"
        class="budget-item"
      >
        <span>{{ `${b.name} : ${b.used}/${b.total}` }}</span>
        <div
            class="budget-item-outer"
        >
            <div
                :class="`budget-item-inner ${b.statusClass}`"
                :style="{width: `${b.percentUsed}%`}"
            />
        </div>
      </div>
    </div>
  </template>
  
  <script>
      
      export default {
          name: "Budget",
          data() {
            return {
                budgetItems: [
                    {
                        name: "Name",
                        used: 10,
                        total: 100
                    },
                    {
                        name: "Name2",
                        used: 70,
                        total: 100
                    },
                    {
                        name: "Name3",
                        used: 90,
                        total: 100
                    },
                    {
                        name: "Name4",
                        used: 100,
                        total: 100
                    },
                ]
            }
          },
          computed: {
            budgetDisplay() {
                return this.budgetItems.map(b => {
                    const percentUsed = (b.used/b.total)*100;
                    let statusClass = '';

                    if (percentUsed >= 70) {
                        statusClass = 'soft-warn'
                    }

                    if (percentUsed >= 90) {
                        statusClass = 'warn'
                    }

                    if (percentUsed >= 100) {
                        statusClass = 'over'
                    }

                    return {
                        name: b.name,
                        used: b.used,
                        total: b.total,
                        percentUsed,
                        statusClass
                    }
                });
            }
          },
          async created() {
            const response = await fetch('static/media/budget.txt');
            if(response.ok){
                const text = await response.text();

                const budgetsArray = text.split('\n');
                const budgets = budgetsArray.map(b => {
                    if(!b) return;

                    const name = b.split(":")[0];
                    const numbers = b.split(":")[1].split("/");
                    return {
                        name: name,
                        used: parseInt(numbers[0]),
                        total: parseInt(numbers[1])
                    }
                }).filter(b => b);

                console.log(budgets);

                this.budgetItems = budgets;
            }
          }
  
      }
  </script>
  
  <style scoped lang="scss">

  
  .budget-wrap {
    flex: 1;
    padding: 20px;
    color: white;
    margin-left: 10px;
    border-left: 1px solid gray;

    .budget-item {
        width: 100%;
	font-size: 30px;

        & + .budget-item {
            margin-top: 10px;
        }

        .budget-item-outer {
            width: 100%;
            background: gray;
            height: 20px;
        }

        .budget-item-inner {
            max-width: 100%;
            background: rgb(0, 225, 0);
            height: 20px;

            &.soft-warn {
                background: yellow,
            }

            &.warn {
                background: orange;
            }

            &.over {
                background: red;
            }
        }
    }
  }
  </style>
