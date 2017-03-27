<template>
  <section>
    <h2>Switch 开关</h2>
   <v-switch v-model="switch1"></v-switch>
   <v-switch v-model="switch1" size="small"></v-switch>
   <v-switch v-model="switch2" checkedChildren="开" unCheckedChildren="关"></v-switch>
   <v-switch v-model="switch3" checkedChildren="开" unCheckedChildren="关">
     <v-icon slot="checkedChildren" type="check"></v-icon>
     <v-icon slot="unCheckedChildren" type="cross"></v-icon>
   </v-switch>
   <v-switch disabled=""></v-switch>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        switch1: false,
        switch2: false,
        switch3: false
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
