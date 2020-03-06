<template>
  <div>
    <PanelGroup />
    <Charts />
  </div>
</template>

<script>
import PanelGroup from "./PanelGroup";
import Charts from "./RandomChart";
export default {
  components: {
    Charts,
    PanelGroup
  },

  data() {
    return {};
  },
  mounted() {}
};
</script>

<style>
</style>