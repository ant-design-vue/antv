<template>
  <section>
    <h2>按钮</h2>
    <v-button>Default</v-button>
    <v-button type="primary">Primary</v-button>
    <v-button type="ghost">Ghost</v-button>
    <v-button type="dashed">Dashed</v-button>
    <v-button type="text">Text</v-button>
    <br><br>
    <v-button type="primary" shape="circle" icon="search"></v-button>
    <v-button type="primary" icon="search">Search</v-button>
    <br><br>
    <v-button type="ghost" shape="circle" icon="search"></v-button>
    <v-button type="ghost" icon="search">Search</v-button>
    <br><br>
    <v-button type="primary" size="large">Large</v-button>
    <v-button type="primary">Default</v-button>
    <v-button type="primary" size="small">Small</v-button>
    <br><br>
    <v-button type="primary">Primary</v-button>
    <v-button type="primary" disabled>Primary(disabled)</v-button>
    <br><br>
    <v-button>Default</v-button>
    <v-button disabled>Default(disabled)</v-button>
    <br><br>
    <v-button type="ghost">Ghost</v-button>
    <v-button type="ghost" disabled>Ghost(disabled)</v-button>
    <br><br>
    <v-button type="dashed">Dashed</v-button>
    <v-button type="dashed" disabled>Dashed(disabled)</v-button>
    <br><br>
    <v-button type="primary" loading>
      Loading
    </v-button>
    <v-button type="primary" size="small" loading>
      Loading
    </v-button>
    <br><br>
    <v-button type="primary" :loading="loading" @click.native="toLoading">
      <span v-if="!loading">Click me!</span>
      <span v-else>Loading</span>
    </v-button>
    <v-button type="primary" :loading="loading2" icon="check" @click.native="toLoading2">
      <span v-if="!loading2">Click me!</span>
      <span v-else>Loading</span>
    </v-button>
    <br><br>
    <v-button-group>
      <v-button>Cancel</v-button>
      <v-button type="primary">OK</v-button>
    </v-button-group>
    <v-button-group>
      <v-button disabled>L</v-button>
      <v-button disabled>M</v-button>
      <v-button disabled>R</v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary">L</v-button>
      <v-button>M</v-button>
      <v-button type="ghost">M</v-button>
      <v-button type="dashed">R</v-button>
    </v-button-group>
    <br><br>
    <h4>With Icon</h4>
    <v-button-group>
      <v-button type="primary">
        <v-icon type="left" />Go back
      </v-button>
      <v-button type="primary">
        Go forward<v-icon type="right" />
      </v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary" icon="cloud" />
      <v-button type="primary" icon="cloud-download" />
    </v-button-group>
    <br><br>
    <h4>Size</h4>
    <v-button-group size="large">
      <v-button type="ghost">Large</v-button>
      <v-button type="ghost">Large</v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="ghost">Default</v-button>
      <v-button type="ghost">Default</v-button>
    </v-button-group>
    <v-button-group size="small">
      <v-button type="ghost">Small</v-button>
      <v-button type="ghost">Small</v-button>
    </v-button-group>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false
      }
    },
    methods: {
      toLoading() {
        this.loading = true
      },
      toLoading2() {
        this.loading2 = true
      }
    }
  }
</script>
