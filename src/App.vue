<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12"><h3>Mortgage Calculator</h3></v-col>
          <v-col cols="12">
            <FormComponent />
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
import ScheduleTable from "./components/ScheduleTable.vue";

export default {
  name: "App",

  components: {
    FormComponent,
    ScheduleTable,
  },

  data: () => ({}),
};
</script>
