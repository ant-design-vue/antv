<template>
  <section>
    <h2 style="margin-bottom: 100px">Collapse折叠面板</h2>
    <v-collapse v-model="activeIndex1" @onChange="onChange">
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
    <v-collapse :bordered="false">
      <v-panel index="1" header="This is panel header 1">
        This is panel header 1
      </v-panel>
      <v-panel index="2" header="This is panel header 2">
        This is panel header 2
      </v-panel>
    </v-collapse>
    <br/>
    <br/>
    <br/>
    <br/>
    <v-collapse @onChange="onChange">
      <v-panel header="This is panel header 1" index="1">
        <v-collapse v-model="activeIndex2">
          <v-panel header="This is panel nest panel" index="1">
            <p>{{text}}</p>
          </v-panel>
        </v-collapse>
      </v-panel>
      <v-panel header="This is panel header 2" index="2">
        <p>{{text}}</p>
      </v-panel>
      <v-panel header="This is panel header 3" index="3">
        <p>{{text}}</p>
      </v-panel>
    </v-collapse>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        text: `A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `,
        activeIndex1: ['1', '2'],
        activeIndex2: '1'
      }
    },
    methods: {
      onChange(index) {
        console.log(index)
      }
    }
  }
</script>
