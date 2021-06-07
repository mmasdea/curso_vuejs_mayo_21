<template>
  <div id="app">
    <h1>Pronóstico para mañana en Argentina</h1>
    <v-btn class="mt-6" text color="primary" @click="dameTemperatura()">
      Consulta Pronóstico / Actualizar
    </v-btn>
    <table border="1px">
      <tr v-if="temperatura !== null">
        <th>Ciudad</th>
        <th>Provincia</th>
        <th>Mañana</th>
        <th>Tarde</th>
      </tr>
      <tr v-for="valor in temperatura" :key="valor._id">
        <td style="padding-left: 5px; padding-right: 5px">{{ valor.name }}</td>
        <td style="padding-left: 5px; padding-right: 5px">{{ valor.province }}</td>
        <td style="text-align: center">{{ valor.weather.morning_temp }}</td>
        <td style="text-align: center">{{ valor.weather.afternoon_temp }}</td>		
      </tr>
    </table>
  </div>
</template>

<script>
import tempService from "../services/tempService";
export default {
  name: "Home",
  data: () => ({
    temperatura: null,
  }),
  components: {},

  mounted() {},

  methods: {
    dameTemperatura() {
      tempService
        .getTemperature()
        .then((response) => {
          this.temperatura = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
