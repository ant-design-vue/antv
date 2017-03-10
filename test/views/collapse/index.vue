<template>
  <section>
    <h2 style="margin-bottom: 100px">Collapse折叠面板</h2>
    <v-collapse defaultActiveIndex="1">
      <v-panel index="1" header="This is panel header 1">
        This is panel header 1
      </v-panel>
      <v-panel index="2" header="This is panel header 2">
        This is panel header 2
      </v-panel>
    </v-collapse>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-collapse accordion>
      <v-panel index="1" header="This is panel header 1">
        This is panel header 1
      </v-panel>
      <v-panel index="2" header="This is panel header 2">
        This is panel header 2
      </v-panel>
    </v-collapse>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-collapse bordered>
      <v-panel index="1" header="This is panel header 1">
        This is panel header 1
      </v-panel>
      <v-panel index="2" header="This is panel header 2">
        This is panel header 2
      </v-panel>
    </v-collapse>
  </section>
</template>
<script>
</script>
