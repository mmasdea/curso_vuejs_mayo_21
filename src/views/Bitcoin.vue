<template>
  <div id="app">
    <h1>El Precio del Bitcoin es :</h1>

    <table border="1px">
      <tr v-if="bitcoin !== null">
        <th>Moneda</th>
        <th>Simbolo</th>
        <th>Valor</th>
      </tr>
      <tr v-for="valor in bitcoin" :key="valor.symbol">
        <td style="padding-left: 5px; padding-right: 5px">{{ valor.description }}</td>
        <td v-html="valor.symbol" style="text-align: center; padding-left: 5px, padding-right: 5px"></td>
        <td style="padding-left: 5px; padding-right: 5px">{{ valor.rate_float | currencydecimal }}</td>
      </tr>
    </table>
    <v-btn class="mt-6" text color="primary" @click="damePrecioBitcoin()">
      DAME El precio del BITCOIN en este momento!!!
    </v-btn>
  </div>
</template>

<script>
import bitcoinService from "../services/bitcoinService";
export default {
  name: "Bitcoin",
  data: () => ({
    bitcoin: null,
  }),
  components: {},

  mounted() {},

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },

  methods: {
    damePrecioBitcoin() {
      bitcoinService
        .getPrecioBitcoin()
        .then((response) => {
          this.bitcoin = response.data.bpi;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
