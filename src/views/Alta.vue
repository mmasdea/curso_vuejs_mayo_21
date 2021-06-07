<template>
  <v-form>
    <h1>Alta de Usuario</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstName"
            :counter="20"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastName"
            :counter="15"
            label="Apellido"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-btn class="mt-6" text color="primary" @click="agregar()">
            Agregar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
  }),
  mounted() {},
  methods: {
    agregar() {
      this.$store.dispatch("setFirstName", this.firstName);
      this.$store.dispatch("setLastName", this.lastName);
      this.$store.dispatch("setEmail", this.email);
      localStorage.setItem("firstName", this.firstName);
      localStorage.setItem("lastName", this.lastName);
      localStorage.setItem("email", this.email);
      console.log(localStorage.getItem("firstName"));
      console.log(localStorage.getItem("lastName"));
      console.log(localStorage.getItem("email"));
    },
  },
};
</script>
