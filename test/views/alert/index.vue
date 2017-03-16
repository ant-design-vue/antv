<template>
  <section>
    <h2>v-alert 警告提示</h2>
    <v-alert message="Success Text" type="success"/>
    <v-alert message="Info Text" type="info"/>
    <v-alert message="Warning Text" type="warning"/>
    <v-alert message="Error Text" type="error"/>
    <br>
    <br>
    <br>
    <v-alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
           type="warning"
           closable
           @onClose="onClose"/>
    <v-alert message="Error Text"
           description="Error Description Error Description Error Description Error Description Error Description Error Description"
           type="error"
           closable
           @onClose="onClose"/>
    <br>
    <br>
    <br>
    <v-alert message="Success Tips" type="success" showIcon/>
    <v-alert message="Informational Notes" type="info" showIcon/>
    <v-alert message="Warning" type="warning" showIcon/>
    <v-alert message="Error" type="error" showIcon/>
    <v-alert
      message="success tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon/>
    <v-alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon/>
    <v-alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon/>
    <v-alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon/>
    <br>
    <br>
    <br>
    <v-alert message="Info Text" type="info" closeText="Close Now" />
    <br>
    <br>
    <br>
    <v-alert message="Warning text" banner />
    <br />
    <v-alert message="Very long warning text warning text text text text text text text" banner closable />
  </section>
</template>
<script>
  export default {
    methods: {
      onClose() {
        console.log('close...')
      }
    }
  }
</script>
