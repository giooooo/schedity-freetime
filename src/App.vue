<template>
  <div id="app">
    <v-app id="example-2">
      <main>
        <v-container fluid class="pa-0">
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    };
  },
};
</script>

<style lang=stylus>
@import './stylus/main';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
$theme := {
  primary: $blue.darken-2
  accent: $blue.accent-2
  secondary: $grey.darken-3
  info: $blue.base
  warning: $amber.base
  error: $red.base
  success: $green.base
}
</style>
