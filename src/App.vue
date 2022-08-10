<template>
  <v-app>
    <v-main>
      <v-container class="main-content">
        <v-row class="text-center">
          <v-col cols="12"><h1>Mortgage Calculator</h1></v-col>
          <v-col sm="12" md="7">
            <FormComponent />
          </v-col>
          <v-col sm="12" md="5">
            <DonutChart />
          </v-col>
          <v-col cols="12">
            <SummaryComponent />
          </v-col>
          <v-col cols="12">
            <ScheduleTable />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import DonutChart from "./components/DonutChart.vue";
import ScheduleTable from "./components/ScheduleTable.vue";
import SummaryComponent from "./components/SummaryComponent.vue";

export default {
  name: "App",

  components: {
    FormComponent,
    DonutChart,
    ScheduleTable,
    SummaryComponent,
  },

  data: () => {
    return {};
  },
};
</script>
<style>
.main-content {
  max-width: 1200px;
}
</style>
