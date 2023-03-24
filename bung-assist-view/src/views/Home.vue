<template>
  <HelloWorld />
</template>

<script>
import { HubConnectionBuilder } from '@microsoft/signalr';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data: () => ({
    connection: null,
  }),
  mounted() {
    this.connection = new HubConnectionBuilder()
      .withUrl('/api')
      .build();

    this.connection.on('send', (data) => {
      console.log('data:', data);
    });

    this.connection.start().then(() => {
      console.log('connected');
      // this.connection.invoke('send', 'TEST');
    });
  },
}
</script>
